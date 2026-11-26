import { useEffect, useRef, useState } from "react";
import * as d3 from "d3-geo";
import * as topojson from "topojson-client";

// ── Config ────────────────────────────────────────────────────────────────────
const DEG  = Math.PI / 180;
const PI2  = Math.PI * 2;

const PAUSE_FRAMES = 180;        // 3 s at each station
const MOVE_FRAMES  = 40;         // Faster travel

const MARKERS = [
  { label: "Eastern Europe",      value: 100, suffix: "%" },
  { label: "Europe",              value: 90,  suffix: "%" },
  { label: "Southeast Asia",      value: 95,  suffix: "%" },
  { label: "Other Asian Regions", value: 90,  suffix: "%" },
  { label: "Middle East & Africa",value: 10,  suffix: "+" },
  { label: "Latin America",       value: 90,  suffix: "%" },
  { label: "North America",       value: 80,  suffix: "%" },
];
const N = MARKERS.length;
const ARC = PI2 / N;

const STATION_ANGLES = Array.from({ length: N }, (_, i) => -Math.PI / 2 + i * ARC);

const easeIn = (t: number) => t * t;

// ── Region Mapping ────────────────────────────────────────────────────────────
const REGION_CENTERS = [
  [45, 55],    // 0: Eastern Europe
  [10, 50],    // 1: Europe
  [110, 10],   // 2: Southeast Asia
  [90, 35],    // 3: Other Asian Regions
  [20, 10],    // 4: Middle East & Africa
  [-60, -15],  // 5: Latin America
  [-100, 40],  // 6: North America
];

const REGION_MAPPING: Record<string, number> = {
  // 0: Eastern Europe
  "Ukraine": 0, "Belarus": 0, "Poland": 0, "Czechia": 0, "Romania": 0, "Hungary": 0, "Slovakia": 0, "Bulgaria": 0, "Moldova": 0,
  // 1: Europe
  "United Kingdom": 1, "France": 1, "Germany": 1, "Italy": 1, "Spain": 1, "Sweden": 1, "Norway": 1, "Finland": 1, "Netherlands": 1, "Belgium": 1, "Switzerland": 1, "Austria": 1, "Portugal": 1, "Greece": 1, "Ireland": 1, "Denmark": 1, "Croatia": 1, "Serbia": 1,
  // 2: Southeast Asia
  "Indonesia": 2, "Thailand": 2, "Malaysia": 2, "Vietnam": 2, "Philippines": 2, "Singapore": 2, "Myanmar": 2, "Cambodia": 2, "Laos": 2,
  // 3: Other Asian Regions
  "China": 3, "Japan": 3, "South Korea": 3, "India": 3, "Pakistan": 3, "Bangladesh": 3, "Mongolia": 3, "Nepal": 3, "Kazakhstan": 3, "Uzbekistan": 3, "Afghanistan": 3, "Taiwan": 3, "Sri Lanka": 3,
  // 4: Middle East & Africa
  "Saudi Arabia": 4, "United Arab Emirates": 4, "Egypt": 4, "South Africa": 4, "Nigeria": 4, "Kenya": 4, "Iran": 4, "Iraq": 4, "Turkey": 4, "Israel": 4, "Morocco": 4, "Algeria": 4, "Ethiopia": 4, "Ghana": 4, "Tanzania": 4, "Sudan": 4, "Yemen": 4, "Syria": 4, "Mali": 4, "Madagascar": 4, "Cameroon": 4, "Côte d'Ivoire": 4, "Niger": 4, "Burkina Faso": 4, "Senegal": 4, "Chad": 4, "Somalia": 4, "Zimbabwe": 4, "Uganda": 4, "Angola": 4, "Mozambique": 4, "Zambia": 4, "Malawi": 4, "Dem. Rep. Congo": 4, "W. Sahara": 4,
  // 5: Latin America
  "Brazil": 5, "Argentina": 5, "Mexico": 5, "Colombia": 5, "Peru": 5, "Chile": 5, "Venezuela": 5, "Ecuador": 5, "Bolivia": 5, "Paraguay": 5, "Uruguay": 5, "Guyana": 5, "Cuba": 5, "Honduras": 5, "Guatemala": 5, "El Salvador": 5, "Costa Rica": 5, "Panama": 5, "Nicaragua": 5, "Dominican Rep.": 5, "Haiti": 5, "Puerto Rico": 5, "Bahamas": 5,
  // 6: North America
  "United States of America": 6, "Canada": 6, "Greenland": 6,
};

// ── Component ─────────────────────────────────────────────────────────────────
export function GlobeWithMarkers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [globeLayout, setGlobeLayout] = useState({ cx: 0, cy: 0, gR: 0 });
  const anim      = useRef({
    phase:    "pausing" as "pausing" | "moving",
    station:  0,
    frames:   0,
    dotAngle: STATION_ANGLES[0],
  });
  
  // To store fetched GeoJSON features
  const geoFeatures = useRef<any[] | null>(null);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then(res => res.json())
      .then(topology => {
        const world = topojson.feature(topology, topology.objects.countries);
        // @ts-ignore
        geoFeatures.current = world.features;
      })
      .catch(err => console.error("Failed to fetch map data", err));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let animId: number;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const padX = 200;
      const padY = 200;

      canvas.style.left = `-${padX}px`;
      canvas.style.top = `-${padY}px`;
      canvas.style.width = `${rect.width + padX * 2}px`;
      canvas.style.height = `${rect.height + padY * 2}px`;

      canvas.width  = (rect.width + padX * 2) * dpr;
      canvas.height = (rect.height + padY * 2) * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let currentLayout = { cx: 0, cy: 0, gR: 0 };

    const draw = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const parentW = parent.clientWidth;
      const parentH = parent.clientHeight;
      const padX = 200;
      const padY = 200;

      const W = canvas.width  / dpr;
      const H = canvas.height / dpr;
      ctx.clearRect(0, 0, W, H);

      // ── Dimensions ───────────────────────────────────────────────
      const baseR = parentH * 0.388 * 0.95 * 0.95;         
      const ringR = baseR * 1.13;
      const innerR = baseR * 0.95 * 0.95; 
      
      const cx = parentW / 2 + padX;
      const cy = parentH / 2 + padY;

      if (currentLayout.cx !== cx || currentLayout.cy !== cy || currentLayout.gR !== innerR) {
        currentLayout = { cx, cy, gR: innerR };
        setGlobeLayout({ cx, cy, gR: innerR });
      }

      // ── Animation state ──────────────────────────────────────────
      const a = anim.current;
      a.frames++;

      if (a.phase === "pausing") {
        a.dotAngle = STATION_ANGLES[a.station];
        if (a.frames >= PAUSE_FRAMES) { a.phase = "moving"; a.frames = 0; }
      } else {
        const t    = Math.min(a.frames / MOVE_FRAMES, 1);
        a.dotAngle = STATION_ANGLES[a.station] + ARC * easeIn(t);
        if (a.frames >= MOVE_FRAMES) {
          a.station  = (a.station + 1) % N;
          a.dotAngle = STATION_ANGLES[a.station];
          a.phase    = "pausing";
          a.frames   = 0;
        }
      }

      const labelAlpha = a.phase === "pausing"
        ? Math.min(1, a.frames / 18)
        : Math.max(0, 1 - a.frames / 14);

      const dotX = cx + Math.cos(a.dotAngle) * ringR;
      const dotY = cy + Math.sin(a.dotAngle) * ringR;

      // ── Draw Solid Earth with Highlight ─────────────────────────
      if (geoFeatures.current) {
        ctx.save();
        
        let viewLon = REGION_CENTERS[a.station][0];
        let viewLat = REGION_CENTERS[a.station][1];

        if (a.phase === "moving") {
          const t = Math.min(a.frames / MOVE_FRAMES, 1);
          const easeT = easeIn(t);
          const nextStation = (a.station + 1) % N;
          const targetLon = REGION_CENTERS[nextStation][0];
          const targetLat = REGION_CENTERS[nextStation][1];

          let lonDelta = targetLon - viewLon;
          if (lonDelta > 180) lonDelta -= 360;
          if (lonDelta < -180) lonDelta += 360;

          viewLon += lonDelta * easeT;
          viewLat += (targetLat - viewLat) * easeT;
        }

        const projection = d3.geoOrthographic()
          .scale(innerR)
          .translate([cx, cy])
          .rotate([-viewLon, -viewLat]);
        
        const path = d3.geoPath(projection, ctx);

        // Draw sphere base (ocean)
        ctx.beginPath();
        path({ type: "Sphere" } as any);
        ctx.fillStyle = "#1F2225"; 
        ctx.fill();

        // Draw countries
        for (const feature of geoFeatures.current) {
          ctx.beginPath();
          path(feature);
          const name = feature.properties.name;
          const region = REGION_MAPPING[name];
          
          if (region === a.station && labelAlpha > 0.1) {
            // Highlight region
            ctx.fillStyle = `rgba(1, 205, 134, ${labelAlpha * 0.95})`;
            ctx.shadowColor = "rgba(1, 205, 134, 0.25)";
            ctx.shadowBlur = 10;
          } else {
            // Normal region
            ctx.fillStyle = "#2A2E33";
            ctx.shadowBlur = 0;
          }
          
          ctx.fill();
        }
        ctx.restore();
      }

      // ── Dynamic halo ring with glow around the dot ───────────────────────
      const haloRadius = ringR * 1.8; 
      const haloGrad = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, haloRadius);
      haloGrad.addColorStop(0, "rgba(255,255,255,1)");
      haloGrad.addColorStop(0.15, "rgba(255,255,255,0.7)");
      haloGrad.addColorStop(0.4, "rgba(255,255,255,0.2)");  
      haloGrad.addColorStop(0.7, "rgba(0,209,106,0.08)");  
      haloGrad.addColorStop(1, "rgba(0,209,106,0)");

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, 0, PI2);
      ctx.shadowColor = "rgba(0,209,106,0.25)"; 
      ctx.shadowBlur  = 15; 
      ctx.strokeStyle = haloGrad; 
      ctx.lineWidth   = 2.5;
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, 0, PI2);
      ctx.shadowColor = "rgba(255,255,255,1)"; 
      ctx.shadowBlur  = 15; 
      ctx.strokeStyle = haloGrad; 
      ctx.lineWidth   = 1.8;
      ctx.stroke();
      ctx.restore();

      // ── Green dot ────────────────────────────────────────────────
      const dotAlpha = Math.max(0, 1 - labelAlpha);
      
      if (dotAlpha > 0) {
        ctx.save();
        ctx.globalAlpha = dotAlpha;

        const glow = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 18);
        glow.addColorStop(0, "rgba(0,209,106,0.85)");
        glow.addColorStop(1, "rgba(0,209,106,0)");
        ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(dotX, dotY, 18, 0, PI2); ctx.fill();

        ctx.beginPath(); ctx.arc(dotX, dotY, 5.5, 0, PI2);
        ctx.fillStyle = "#01CD86"; ctx.fill();

        ctx.beginPath(); ctx.arc(dotX, dotY, 2.2, 0, PI2);
        ctx.fillStyle = "#ffffff"; ctx.fill();
        ctx.restore();
      }

      // ── Labels: centered on ring station point ───────────────────
      for (let i = 0; i < N; i++) {
        const el = labelRefs.current[i];
        if (!el) continue;
        if (i === a.station) {
          const lx = cx + Math.cos(STATION_ANGLES[i]) * ringR;
          const ly = cy + Math.sin(STATION_ANGLES[i]) * ringR;
          el.style.left    = `${lx - padX}px`;
          el.style.top     = `${ly - padY}px`;
          el.style.opacity = String(labelAlpha);
          
          if (a.phase === "pausing") {
            const numEl = el.querySelector('.animated-percent');
            if (numEl) {
              const p = Math.min(1, a.frames / 40);
              const val = Math.floor(p * MARKERS[i].value);
              numEl.textContent = val + MARKERS[i].suffix;
            }
          }
        } else {
          el.style.opacity = "0";
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    const obs = new ResizeObserver(resize);
    obs.observe(canvas);
    return () => { cancelAnimationFrame(animId); obs.disconnect(); };
  }, []);

  return (
    <div className="relative w-full h-full" style={{ overflow: "visible" }}>
      <canvas
        ref={canvasRef}
        style={{
          display:  "block",
          position: "absolute",
          pointerEvents: "none"
        }}
      />

      {MARKERS.map((mk, i) => (
        <div
          key={i}
          ref={el => { labelRefs.current[i] = el; }}
          className="absolute pointer-events-none"
          style={{ opacity: 0, transform: "translate(-50%, -50%)", zIndex: 10 }}
        >
            <div
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            8.4,
              background:     "rgba(255,255,255,0.95)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border:         "1px solid rgba(255,255,255,0.5)",
              borderRadius:   9999,
              padding:        "7.35px 16px",
              whiteSpace:     "nowrap",
              boxShadow:      "0 0 16px rgba(255,255,255,0.4), 0 4px 24px rgba(0,0,0,0.15)",
            }}
          >
            <span style={{ color: "#10B981", fontSize: 14, fontWeight: 600, letterSpacing: "0.02em" }}>
              {mk.label}
            </span>
            <span 
              className="animated-percent"
              style={{ color: "#10B981", fontSize: 14, fontWeight: 700, minWidth: "35px", display: "inline-block", textAlign: "right" }}
            >
              0{mk.suffix}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3-geo";
import * as topojson from "topojson-client";

// ── Config ────────────────────────────────────────────────────────────────────
const PI2  = Math.PI * 2;
const ANIM_DURATION = 1500; // 1.5 seconds for rotation and zoom

import Frame50 from "../../imports/Frame50";
import Frame52 from "../../imports/Frame52";
import Frame53 from "../../imports/Frame53";
import Frame54 from "../../imports/Frame54";

// ── Region Mapping ────────────────────────────────────────────────────────────
export const GLOBE_TARGETS: Record<string, { center: [number, number], label: string, flag: React.ReactNode, endZoom: number }> = {
  "Turkey":      { center: [35, 39],     label: "Turkey",      flag: <div className="w-[32px] h-[32px]"><Frame50 /></div>, endZoom: 2.2 },
  "Philippines": { center: [122, 13],    label: "Philippines", flag: <div className="w-[32px] h-[32px]"><Frame53 /></div>, endZoom: 2.5 },
  "Egypt":       { center: [30, 26],     label: "Egypt",       flag: <div className="w-[32px] h-[32px]"><Frame52 /></div>, endZoom: 2.2 },
  "Middle East": { center: [45, 23],     label: "Middle East", flag: <div className="w-[32px] h-[32px]"><Frame54 /></div>, endZoom: 1.8 },
};

const HIGHLIGHT_MAPPING: Record<string, string[]> = {
  "Turkey":      ["Turkey"],
  "Philippines": ["Philippines"],
  "Egypt":       ["Egypt"],
  "Middle East": ["Saudi Arabia", "United Arab Emirates", "Oman", "Qatar", "Kuwait", "Bahrain", "Yemen", "Iraq", "Iran", "Syria", "Jordan"],
};

export function StaticGlobeMap({ target }: { target: keyof typeof GLOBE_TARGETS }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [globeLayout, setGlobeLayout] = useState({ cx: 0, cy: 0, dotX: 0, dotY: 0, labelAlpha: 0 });
  const geoFeatures = useRef<any[] | null>(null);
  const startTimeRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !geoFeatures.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;
    
    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();
    const padX = 100;
    const padY = 100;

    canvas.style.left = `-${padX}px`;
    canvas.style.top = `-${padY}px`;
    canvas.style.width = `${rect.width + padX * 2}px`;
    canvas.style.height = `${rect.height + padY * 2}px`;
    canvas.width  = (rect.width + padX * 2) * dpr;
    canvas.height = (rect.height + padY * 2) * dpr;
    
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const parentW = rect.width;
    const parentH = rect.height;
    
    // Base Globe Dimensions, scaled down by an additional 20%
    const baseR = parentH * 0.388 * 0.95 * 0.95 * 0.8;
    const tConfig = GLOBE_TARGETS[target];
    
    // Shift globe slightly right so it's centered in the visible space
    // Let's adjust the cx parameter
    const cx = parentW / 2 + padX;
    const cy = parentH / 2 + padY;

    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    // Animation progress
    const elapsed = performance.now() - startTimeRef.current;
    const progress = Math.min(Math.max(elapsed / ANIM_DURATION, 0), 1);
    const easeT = 1 - Math.pow(1 - progress, 3); // cubic ease-out
    
    // Smoothly scale up from baseR to 1.5x zoom
    const currentScale = baseR * (1 + 0.5 * easeT);

    // Calculate current rotation (rotate to center)
    const startLon = -10; // Fixed start angle (Atlantic Ocean / West Africa)
    const startLat = 10;
    const targetLon = tConfig.center[0];
    const targetLat = tConfig.center[1];

    let lonDelta = targetLon - startLon;
    // ensure shortest path
    if (lonDelta > 180) lonDelta -= 360;
    if (lonDelta < -180) lonDelta += 360;

    const currentLon = startLon + lonDelta * easeT;
    const currentLat = startLat + (targetLat - startLat) * easeT;

    const projection = d3.geoOrthographic()
      .scale(currentScale)
      .translate([cx, cy])
      .rotate([-currentLon, -currentLat]);
    
    const path = d3.geoPath(projection, ctx);

    // 1. Draw sphere base (ocean)
    ctx.save();
    ctx.beginPath();
    path({ type: "Sphere" } as any);
    ctx.fillStyle = "#1F2225"; 
    ctx.fill();

    // 2. Draw countries
    const highlightList = HIGHLIGHT_MAPPING[target] || [];
    let targetCentroid = [0, 0];
    let foundCentroid = false;

    for (const feature of geoFeatures.current) {
      ctx.beginPath();
      path(feature);
      const name = feature.properties.name;
      const isTarget = highlightList.includes(name);
      
      if (isTarget) {
        ctx.fillStyle = `rgba(1, 205, 134, 0.95)`;
        ctx.shadowColor = "rgba(1, 205, 134, 0.25)";
        ctx.shadowBlur = 10;
        
        // Pin label to the projection centroid
        if (!foundCentroid) {
          const c = d3.geoCentroid(feature);
          const p = projection(c as [number, number]);
          if (p) {
            targetCentroid = p;
            foundCentroid = true;
          }
        }
      } else {
        ctx.fillStyle = "#2A2E33";
        ctx.shadowBlur = 0;
      }
      
      ctx.fill();
    }
    ctx.restore();

    // 3. Draw Green Dot & Label (Fade in at the very end of rotation)
    let dotX = cx;
    let dotY = cy;
    if (foundCentroid) {
      dotX = targetCentroid[0];
      dotY = targetCentroid[1];
    }

    const popupProgress = Math.max(0, (progress - 0.7) / 0.3); // 0 to 1 in last 30% of time
    const labelAlpha = 1 - Math.pow(1 - popupProgress, 3);

    if (labelAlpha > 0.01) {
      ctx.save();
      ctx.globalAlpha = labelAlpha;
      const glow = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 24);
      glow.addColorStop(0, "rgba(0,209,106,0.6)");
      glow.addColorStop(1, "rgba(0,209,106,0)");
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(dotX, dotY, 24, 0, PI2); ctx.fill();

      ctx.beginPath(); ctx.arc(dotX, dotY, 6, 0, PI2);
      ctx.fillStyle = "#01CD86"; ctx.fill();

      ctx.beginPath(); ctx.arc(dotX, dotY, 2.5, 0, PI2);
      ctx.fillStyle = "#ffffff"; ctx.fill();
      ctx.restore();
    }

    setGlobeLayout({ 
      cx, cy, 
      dotX: dotX - padX, 
      dotY: dotY - padY,
      labelAlpha
    });

    if (progress < 1) {
      animFrameRef.current = requestAnimationFrame(draw);
    }
  }, [target]);

  // Load GeoData
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then(res => res.json())
      .then(topology => {
        const world = topojson.feature(topology, topology.objects.countries);
        // @ts-ignore
        geoFeatures.current = world.features;
        startTimeRef.current = performance.now();
        animFrameRef.current = requestAnimationFrame(draw);
      })
      .catch(err => console.error("Failed to fetch map data", err));

    return () => cancelAnimationFrame(animFrameRef.current);
  }, [draw]);

  // Restart animation when target changes
  useEffect(() => {
    if (geoFeatures.current) {
      cancelAnimationFrame(animFrameRef.current);
      startTimeRef.current = performance.now();
      animFrameRef.current = requestAnimationFrame(draw);
    }
  }, [target, draw]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      // Force an immediate re-draw if it's already done animating
      if (geoFeatures.current && performance.now() - startTimeRef.current >= ANIM_DURATION) {
         draw();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [draw]);

  const tConfig = GLOBE_TARGETS[target];

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

      {/* Dynamic Label pinned near the centroid */}
      {globeLayout.labelAlpha > 0.01 && (
        <div
          className="absolute"
          style={{ 
            left: `${globeLayout.dotX + 32}px`, 
            top: `${globeLayout.dotY}px`,
            transform: "translate(0, -50%)", 
            opacity: globeLayout.labelAlpha,
            zIndex: 10 
          }}
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
              padding:        "7.35px 16px 7.35px 8.4px",
              whiteSpace:     "nowrap",
              boxShadow:      "0 0 16px rgba(255,255,255,0.4), 0 4px 24px rgba(0,0,0,0.15)",
            }}
          >
            <div
              className="overflow-hidden rounded-full"
              style={{
                width: 32, height: 32,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, background: "transparent"
              }}
            >
              {typeof tConfig.flag === 'string' ? tConfig.flag : (
                <div className="flex items-center justify-center w-[150%] h-[150%] scale-[0.66]">{tConfig.flag}</div>
              )}
            </div>
            <span style={{ color: "#1B1D21", fontSize: 14, fontWeight: 600, letterSpacing: "0.02em" }}>
              {tConfig.label}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useState, useMemo } from 'react';
import * as d3 from 'd3-geo';
import * as topojson from 'topojson-client';

export function StaticRegionMap({ targetCountries }: { targetCountries: string[] }) {
  const [geoData, setGeoData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then(res => res.json())
      .then(topology => {
        const world = topojson.feature(topology, topology.objects.countries);
        // @ts-ignore
        setGeoData(world.features);
      })
      .catch(err => console.error("Map fetch error:", err));
  }, []);

  const targetFeatures = useMemo(() => {
    if (!geoData.length) return [];
    return geoData.filter(f => targetCountries.includes(f.properties.name));
  }, [geoData, targetCountries]);

  if (!geoData.length || !targetFeatures.length) {
    return <div className="w-full h-full flex items-center justify-center opacity-0"></div>;
  }

  const featureCollection = { type: "FeatureCollection", features: targetFeatures };
  
  // Use a projection that focuses on the target countries but leaves a 50px padding so neighbors show up well
  const projection = d3.geoMercator().fitExtent([[50, 50], [550, 550]], featureCollection as any);
  const pathGenerator = d3.geoPath().projection(projection);

  return (
    <svg width="100%" height="100%" viewBox="0 0 600 600" className="opacity-95" style={{ overflow: "hidden" }}>
      {geoData.map((feature, i) => {
        const isTarget = targetCountries.includes(feature.properties.name);
        return (
          <path
            key={i}
            d={pathGenerator(feature as any) || ""}
            fill={isTarget ? "rgba(1, 205, 134, 0.95)" : "#2A2E33"} 
            stroke="#1F2225"
            strokeWidth={0.5}
            strokeLinejoin="round"
          />
        );
      })}
    </svg>
  );
}

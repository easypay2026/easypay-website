import * as topojson from "topojson-client";

const WORLD_ATLAS_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// The globe components each need the same ~700KB country topology. Cache the
// in-flight promise so navigating between pages that use a globe reuses the
// first request instead of refetching and re-parsing the topology.
let cache: Promise<any[]> | null = null;

export function loadWorldFeatures(): Promise<any[]> {
  if (!cache) {
    cache = fetch(WORLD_ATLAS_URL)
      .then(res => {
        if (!res.ok) throw new Error(`World atlas request failed: ${res.status}`);
        return res.json();
      })
      .then(topology => {
        const world = topojson.feature(topology, topology.objects.countries);
        // @ts-ignore - topojson types return a union; countries is a collection
        return world.features as any[];
      })
      .catch(err => {
        // Let a later mount retry rather than caching the failure forever.
        cache = null;
        throw err;
      });
  }
  return cache;
}

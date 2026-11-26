import * as d3 from 'd3-geo';
import * as topojson from 'topojson-client';

export async function loadGeoData() {
  const res = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
  const topology = await res.json();
  const world = topojson.feature(topology, topology.objects.countries);
  return world.features;
}

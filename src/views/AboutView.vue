<template>
  <div class="about">
    <h1>This is a map</h1>
    <div id="map"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return { test: [] };
  },
  mounted: function () {
    /*global mapboxgl */
    mapboxgl.accessToken = process.env.VUE_APP_MAP_API_KEY;
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-87.6298, 41.8781], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/3745 N Lincoln Ave, Chicago, IL 60613.json?access_token=${process.env.VUE_APP_MAP_API_KEY}`
      )

      .then((response) => {
        console.log(response);
        this.test = response.data.features[0].center;
        console.log(this.test);

        const geojson = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                message: "Zoom for details",
                iconSize: [50, 50],
              },
              geometry: {
                type: "Point",
                coordinates: [this.test[0], this.test[1]],
              },
            },
          ],
        };

        // Create a default Marker and add it to the map.
        const marker1 = new mapboxgl.Marker().setLngLat([-87.6298, 41.8781]).addTo(map);

        // Create a default Marker, colored black, rotated 45 degrees.
        const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 })
          .setLngLat([1 - 87.6298, 41.8781])
          .addTo(map);
        console.log(map, marker1, marker2);
        for (const marker of geojson.features) {
          // Create a DOM element for each marker.
          const el = document.createElement("div");
          const width = marker.properties.iconSize[0];
          const height = marker.properties.iconSize[1];
          el.className = "marker";
          el.style.backgroundImage = `url(favicon.ico)`;
          el.style.width = `${width}px`;
          el.style.height = `${height}px`;
          el.style.backgroundSize = "100%";

          el.addEventListener("click", () => {
            window.alert(marker.properties.message);
          });

          // Add markers to the map.
          new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
        }
      });
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
#map {
  height: 50vh;
  width: 100%;
}
</style>

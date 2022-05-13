<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sale: {},
      location: [],
    };
  },
  created: function () {
    axios.get("/sales/" + this.$route.params.id).then((response) => {
      console.log("sales show", response);
      this.sale = response.data;
      this.createMap();
    });
  },
  methods: {
    destroySale: function (sale) {
      axios.delete("/sales/" + sale.id).then((response) => {
        console.log("sales destroy", response);
        this.$router.push("/sales");
      });
    },
    createAgendas: function (sale) {
      axios
        .post("/agendas", { sale_id: sale.id })
        .then((response) => {
          console.log("agendas create", response);
          this.currentAgenda = response.data;
        })
        .catch((error) => {
          console.log("location", error.response);
          this.errors = error.response.data.errors;
        });
    },
    createMap: function () {
      /*global mapboxgl */
      mapboxgl.accessToken = process.env.VUE_APP_MAP_API_KEY;
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-87.6298, 41.8781], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
      console.log(this.sale, "hi");
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.sale.address}.json?access_token=pk.eyJ1Ijoia2F0ZXZhbnNkZXYiLCJhIjoiY2wxcGszanVtMThqczNkdGNiOXJsNmViYiJ9.Dzviryeelie_bodosYl9_g`
        )
        .then((response) => {
          console.log(response);
          this.location = response.data.features[0].center;
          console.log("location", this.location[0]);
          console.log(this.sale.address);

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
                  coordinates: [this.location[0], this.location[1]],
                },
              },
            ],
          };
          for (const marker of geojson.features) {
            // Create a DOM element for each marker.
            const el = document.createElement("div");
            const width = marker.properties.iconSize[0];
            const height = marker.properties.iconSize[1];
            el.className = "marker";
            el.style.backgroundImage = `url(https://res.cloudinary.com/dwstndeye/image/upload/v1652238193/android-chrome-512x512_ybhmhj.png)`;
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
  },
};
</script>

<template>
  <div class="sales-show">
    <h2>{{ sale.title }}</h2>
    <p>Address: {{ sale.address }}</p>
    <img v-bind:src="sale.picture" v-bind:alt="sale.title" width="400" height="300" />
    <p>Description: {{ sale.description }}</p>
    <p>Start Time: {{ sale.start_time }}</p>
    <p>Start Date: {{ sale.start_date }}</p>
    <p>End Time: {{ sale.end_time }}</p>
    <p>End Date: {{ sale.end_date }}</p>
    <div class="col">
      <div>
        <button><router-link to="/sales">Back to All</router-link></button>
        <div></div>
        <p></p>
        <div></div>
        <button v-on:click="createAgendas(sale)">Add to Agenda</button>
      </div>
      <p></p>
      <button><router-link v-bind:to="`/sales/${sale.id}/edit`">Edit Sale</router-link></button>
      <p></p>
      <div><button v-on:click="destroySale(sale)">Delete Sale</button></div>
      <p></p>
      <div></div>
    </div>
  </div>
  <h2>Map View</h2>
  <div id="map"></div>
</template>

<style>
button {
  background-color: rgb(237, 196, 218);
  color: black;
}

a {
  color: black;
  text-decoration: none;
}
h2 {
  color: rgb(237, 196, 218);
}
#map {
  width: 50vh;
  height: 50vh;
}
</style>

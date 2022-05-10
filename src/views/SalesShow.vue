<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sale: {},
    };
  },
  created: function () {
    axios.get("/sales/" + this.$route.params.id).then((response) => {
      console.log("sales show", response);
      this.sale = response.data;
    });
  },
  methods: {
    destroySale: function (sale) {
      axios.delete("/sales/" + sale.id).then((response) => {
        console.log("sales destroy", response);
        this.$router.push("/sales");
      });
    },
  },
};
</script>

<template>
  <div class="sales-show">
    <h2>{{ sale.title }}</h2>
    <p>Address: {{ sale.address }}</p>
    <img v-bind:src="sale.picture" v-bind:alt="sale.title" />
    <p>Description: {{ sale.description }}</p>
    <p>Start Time: {{ sale.start_time }}</p>
    <p>Start Date: {{ sale.start_date }}</p>
    <p>End Time: {{ sale.end_time }}</p>
    <p>End Date: {{ sale.end_date }}</p>
    <router-link v-bind:to="`/sales/${sale.id}/edit`">Edit Sale</router-link>
    <button v-on:click="destroySale(sale)">Delete Sale</button>
    <router-link to="/sales">Back to All</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sales: [],
    };
  },
  created: function () {
    this.indexSales();
  },
  methods: {
    indexSales: function () {
      axios.get("/sales").then((response) => {
        console.log("sales index", response);
        this.sales = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="sales-index">
    <h1>All sales</h1>
    <div v-for="sale in sales" v-bind:key="sale.id">
      <h2>{{ sale.title }}</h2>
      <h3>{{ sale.address }}</h3>
      <img v-bind:src="sale.picture" v-bind:alt="sale.title" />
      <p>Start date {{ sale.start_date }}</p>
      <p>Start time {{ sale.start_time }}</p>
      <p>End date {{ sale.end_date }}</p>
      <p>End time {{ sale.end_time }}</p>
      <p>Start date {{ sale.start_date }}</p>
      <p>Start time {{ sale.start_time }}</p>
    </div>
  </div>
</template>

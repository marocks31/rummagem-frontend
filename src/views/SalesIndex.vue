<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sales: [],
      message: "hello?",
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
    <h1 class="m-3">All sales</h1>
    <div class="col" v-for="sale in sales" v-bind:key="sale.title">
      <h2>{{ sale.title }}</h2>
      <img class="img-fluid" v-bind:src="sale.picture" v-bind:alt="sale.title" style="width: 25rem" />
      <h4>{{ sale.address }}</h4>
      <p>Start date {{ sale.start_date }}</p>
      <p>Start time {{ sale.start_time }}</p>
    </div>
  </div>
</template>

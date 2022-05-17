<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sales: [],
      message: "hello?",
      currentSale: {},
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
    <p></p>
    <p></p>
    <h1 class="m-3">ALL SALES</h1>
    <div class="row">
      <div
        class="col"
        v-bind:class="{ selected: sale === currentSale }"
        v-for="sale in sales"
        v-bind:key="sale.title"
        v-on:click="currentSale = sale"
      >
        <div class="card mx-auto my-4" style="width: 18rem">
          <h5 class="gem-title">{{ sale.title }}</h5>
          <img class="img-fluid" v-bind:src="sale.picture" v-bind:alt="sale.title" style="width: 25rem" />
          <div class="card-body">
            <h4 class="card-text">{{ sale.address }}</h4>
            <p class="card-text">Start date {{ sale.start_date }}</p>
            <p class="card-text">Start time {{ sale.start_time }}</p>
            <a v-bind:href="`/sales/${sale.id}`" class="btn btn-primary">DETAILS</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-body {
  background-color: rgb(222, 146, 24);
  color: black;
}
.card {
  box-shadow: 0 4px 8 px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 0;
}
.card-body:hover {
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  background-color: rgb(240, 96, 30);
}
.btn-primary {
  background-color: rgb(193, 14, 139);
  border-radius: 5px;
  box-shadow: 0 4px 8 px 0 rgba(0, 0, 0, 0.2);
  border: 0.5rem outset rgb(129, 184, 244);
}
.img {
  border-radius: 5px 5px 0 0;
  border-color: black;
  border: 3px solid;
  border-color: #d16ba5;
}
.gem-title {
  color: rgb(0, 0, 0);
  font-weight: 900;
  background-color: rgb(234, 157, 57);
}
.sales-index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-image: linear-gradient(
    to top,
    #f8f8ff,
    #d16ba5,
    #dd6483,
    #dc6660,
    #ce6f3f,
    #b67b22,
    #af8018,
    #a7850c,
    #9e8a00,
    #ae8900,
    #bf8800,
    #d08505,
    #e18214,
    #d16ba5
  );
}
.card.mx-auto.my-4 {
  background-color: rgb(222, 146, 24);
  border-color: black;
}
.img-fluid {
  border: 3px solid;
  border-color: #d16ba5;
}
</style>

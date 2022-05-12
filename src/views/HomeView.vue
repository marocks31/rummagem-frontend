<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">There are {{ sales.length }} sales near you.</h2>
          <h3 class="section-subheading text-muted">Browse sales or post your own.</h3>
        </div>
      </div>
      <div class="row">
        <div
          class="col"
          v-bind:class="{ selected: sale === currentSale }"
          v-for="sale in sales"
          v-bind:key="sale.title"
          v-on:click="currentSale = sale"
        >
          <div class="card mx-auto my-4" style="width: 18rem">
            <h2 class="card-title">{{ sale.title }}</h2>
            <img class="img-fluid" v-bind:src="sale.picture" v-bind:alt="sale.title" style="width: 25rem" />
            <div class="card-body">
              <h4 class="card-text">{{ sale.address }}</h4>
              <p class="card-text">Start date {{ sale.start_date }}</p>
              <p class="card-text">Start time {{ sale.start_time }}</p>
              <a v-bind:href="`/sales/${sale.id}`" class="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sales: [],
      newSaleParams: {},
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
    createSale: function () {
      axios
        .post("/sales", this.newSaleParams)
        .then((response) => {
          console.log("sales create", response);
          this.sales.push(response.data);
          this.newSaleParams = {};
        })
        .catch((error) => {
          console.log("sales create error", error.response);
        });
    },
    showSale: function (sale) {
      this.currentSale = sale;
      document.querySelector("#sale-details").showModal();
    },
  },
};
</script>

<style></style>

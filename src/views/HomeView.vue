<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Sales</h2>
        <h3 class="section-subheading text-muted">Browse sales or post your own.</h3>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-4">
          <!-- Portfolio item 1-->
          <div v-for="sale in sales" class="portfolio-item" v-bind:key="sale">
            <a class="portfolio-link" data-bs-toggle="modal" href="/agendas">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
              </div>
              <img class="img-fluid" v-bind:src="sale.picture" v-bind:alt="sale.title" />
            </a>
            <div class="portfolio-caption" v-bind:key="sale.title">
              <div class="portfolio-caption-heading">{{ sale.title }}</div>
              <div class="portfolio-caption-subheading text-muted">{{ sale.address }}</div>
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
      message: "Welcome to Vue.js!",
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

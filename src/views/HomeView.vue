<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
  <section class="page-section bg-light" id="portfolio">
    <div class="container-homepage">
      <div class="row">
        <!-- <div class="text-center">
          <h2 class="section-heading text-uppercase">There are {{ sales.length }} sales near you.</h2>
          <h3 class="section-subheading text-muted">Browse sales or post your own.</h3>
        </div> -->
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
            <h4 class="card-title">{{ sale.title }}</h4>
            <img class="card-img-top" v-bind:src="sale.picture" v-bind:alt="sale.title" style="width: 18rem" />
            <div class="card-body">
              <h5 class="card-text">{{ sale.address }}</h5>
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

<style scoped>
.card-img-top {
  height: 250px;
  object-fit: cover;
  border-color: black;
  border: 1px solid;
  border-color: #000000;
}
.page-section.bg-light {
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
.text-center {
  background-color: rgb(254, 166, 3);
}
/* .card-body {
  background-color: black;
} */
/* .gem-title {
  color: rgb(0, 0, 0);
  font-weight: 900;
  background-color: black;
} */

.card-title {
  text-shadow: 2px 2px #090808;
}
</style>

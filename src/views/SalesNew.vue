<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newSaleParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createSale: function () {
      axios
        .post("/sales", this.newSaleParams)
        .then((response) => {
          console.log("sales create", response);
          this.$router.push("/sales");
        })
        .catch((error) => {
          console.log("sales create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="sales-new">
    <h1>New Sale</h1>
    <div class="container">
      <form v-on:submit.prevent="createSale()">
        <div class="row align-items-stretch mb-5">
          <div class="col-md-6">
            <div class="form group">
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              Title
              <input
                class="form-control"
                id="title"
                type="text"
                placeholder="Your Title "
                v-model="newSaleParams.title"
              />
              Description
              <input
                class="form-control"
                id="descripton"
                placeholder="Your description "
                type="text"
                v-model="newSaleParams.description"
              />
              Address
              <input
                class="form-control"
                id="address"
                placeholder="Your Address "
                type="text"
                v-model="newSaleParams.address"
              />
              Picture
              <input
                class="form-control"
                id="picture"
                placeholder="Your Picture "
                type="text"
                v-model="newSaleParams.picture"
              />
              Start Date
              <input
                class="form-control"
                id="start_date"
                placeholder="Your Start Date"
                type="text"
                v-model="newSaleParams.start_date"
              />
              End Date
              <input
                class="form-control"
                id="end_date"
                placeholder="Your End Date"
                type="text"
                v-model="newSaleParams.end_date"
              />
              Start Time
              <input
                class="form-control"
                id="start_time"
                placeholder="Your Start Time"
                type="text"
                v-model="newSaleParams.start_time"
              />
              End Time
              <input
                class="form-control"
                id="end_time"
                placeholder="Your End Time"
                type="text"
                v-model="newSaleParams.end_time"
              />
              <input type="submit" value="Create" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>

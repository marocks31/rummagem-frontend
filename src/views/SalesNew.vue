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
              <div>
                Title
                <input class="form-control" type="text" placeholder="Your Title " v-model="newSaleParams.title" />
              </div>
              <div>
                Description
                <input
                  class="form-control"
                  placeholder="Your description "
                  type="text"
                  v-model="newSaleParams.description"
                />
              </div>
              <div>
                Address
                <input class="form-control" placeholder="Your Address " type="text" v-model="newSaleParams.address" />
              </div>
              <div>
                Picture
                <input class="form-control" placeholder="Your Picture " type="text" v-model="newSaleParams.picture" />
              </div>
              <div>
                Start Date
                <input
                  class="form-control"
                  placeholder="Your Start Date"
                  type="text"
                  v-model="newSaleParams.start_date"
                />
              </div>
              <div>
                End Date
                <input class="form-control" placeholder="Your End Date" type="text" v-model="newSaleParams.end_date" />
              </div>
              <div>
                Start Time
                <input
                  class="form-control"
                  placeholder="Your Start Time"
                  type="text"
                  v-model="newSaleParams.start_time"
                />
              </div>
              <div>
                End Time
                <input class="form-control" placeholder="Your End Time" type="text" v-model="newSaleParams.end_time" />
              </div>
              <input type="submit" value="createSale" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>

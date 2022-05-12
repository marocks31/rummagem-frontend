<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newSaleParams: {},
      errors: [],
      imageFile: "",
    };
  },
  created: function () {},
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.imageFile = event.target.files[0];
      }
    },
    createSale: function () {
      var saleForm = new FormData();
      saleForm.append("title", this.newSaleParams.title);
      saleForm.append("description", this.newSaleParams.description);
      saleForm.append("address", this.newSaleParams.address);
      saleForm.append("image_file", this.imageFile);
      saleForm.append("start_date", this.newSaleParams.start_date);
      saleForm.append("end_date", this.newSaleParams.end_date);
      saleForm.append("start_time", this.newSaleParams.start_time);
      saleForm.append("end_time", this.newSaleParams.end_time);

      axios
        .post("/sales", saleForm)
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
            <div class="form-group">
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
                <input
                  class="form-control"
                  placeholder="Your Picture "
                  type="file"
                  v-on:change="setFile($event)"
                  ref="fileInput"
                />
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

<style>
h1 {
  color: blue;
}
</style>

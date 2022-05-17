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
    <button class="title" style="font-size: 20px"><strong>POST A SALE</strong></button>
    <div class="container">
      <form v-on:submit.prevent="createSale()">
        <div class="row align-items-stretch mb-5">
          <div class="col-md-6 m-auto">
            <div class="form-group">
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div class="row">
                <div>
                  <h4 class="card-title" style="font-size: 18px">TITLE</h4>
                  <input class="form-control" type="text" placeholder="Your Title " v-model="newSaleParams.title" />
                </div>
              </div>
              <div>
                <h4 class="card-title" style="font-size: 18px">DESCRIPTION</h4>
                <input
                  class="form-control"
                  placeholder="Your description "
                  type="text"
                  v-model="newSaleParams.description"
                />
              </div>
              <div>
                <h4 class="card-title" style="font-size: 18px">ADDRESS</h4>
                <input class="form-control" placeholder="Your Address " type="text" v-model="newSaleParams.address" />
              </div>
              <div>
                <h4 class="card-title" style="font-size: 18px">PICTURE</h4>
                <input
                  class="form-control"
                  placeholder="Your Picture "
                  type="file"
                  v-on:change="setFile($event)"
                  ref="fileInput"
                />
              </div>
              <div>
                <h4 class="card-title" style="font-size: 18px">START DATE</h4>
                <input
                  class="form-control"
                  placeholder="Your Start Date"
                  type="text"
                  v-model="newSaleParams.start_date"
                />
              </div>
              <div>
                <h4 class="card-title" style="font-size: 18px">END DATE</h4>
                <input class="form-control" placeholder="Your End Date" type="text" v-model="newSaleParams.end_date" />
              </div>
              <div>
                <h4 class="card-title" style="font-size: 18px">START TIME</h4>
                <input
                  class="form-control"
                  placeholder="Your Start Time"
                  type="text"
                  v-model="newSaleParams.start_time"
                />
              </div>
              <div>
                <h4 class="card-title" style="font-size: 18px">END TIME</h4>
                <input class="form-control" placeholder="Your End Time" type="text" v-model="newSaleParams.end_time" />
              </div>
              <input class="submit" type="submit" value="POST SALE" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.title {
  border: 0.5rem outset rgb(129, 184, 244);
  border-radius: 12px;
  font: bold rem sans-serif;
  font-size: 50px;
  margin: 4rem;
  padding: 1rem;
  outline-offset: 0.5rem;
  background: rgb(83, 151, 215);
  color: rgb(255, 255, 255);
}
.sales-new {
  background-image: url("https://res.cloudinary.com/dwstndeye/image/upload/v1652643234/sapphire-stone-1536x1152_rxvdqt.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.card-title {
  border: 0.5rem outset rgb(129, 184, 244);
  /* outline: 0.5rem solid rgb(252, 137, 221); */
  border-radius: 12px;
  font: bold rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
  background: rgb(83, 151, 215);
  color: white;
  box-shadow: 2px 3px #000000;
}

.submit {
  border: 0.5rem outset rgb(111, 27, 27);
  border-radius: 12px;
  font: bold rem sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 4rem;
  padding: 1rem;
  outline-offset: 0.5rem;
  background: rgb(173, 0, 0);
  color: rgb(255, 255, 255);
}

.form-group {
  height: 95%;
  padding: 1rem;
  background-color: rgba(17, 114, 232, 0.628);
  padding: 7%;
  display: inline-block;
  text-align: center;
  display: inline-block;
  border-radius: 12px;
}
</style>

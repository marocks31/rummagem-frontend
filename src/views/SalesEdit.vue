<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sale: {},
      editSaleParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/sales/" + this.$route.params.id).then((response) => {
      console.log("sales show", response);
      this.sale = response.data;
      this.editSaleParams = this.sale;
    });
  },
  methods: {
    updateSale: function (sale) {
      axios
        .patch("/sales/" + sale.id, this.editSaleParams)
        .then((response) => {
          console.log("sales update", response);
          this.$router.push("/sales");
        })
        .catch((error) => {
          console.log("sales update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="sales-edit row">
    <h1>Edit Sale</h1>
    <div class="col-2 m-auto editsale">
      <form v-on:submit.prevent="updateSale(sale)">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          Title:
          <input type="text" v-model="editSaleParams.title" />
        </div>
        <div>
          Address:
          <input type="text" v-model="editSaleParams.address" />
        </div>
        <div>
          Picture:
          <input type="text" v-model="editSaleParams.picture" />
        </div>
        <div>
          Description:
          <input type="text" v-model="editSaleParams.description" />
        </div>
        <div>
          Start Date:
          <input type="text" v-model="editSaleParams.start_date" />
        </div>
        <div>
          Start Time:
          <input type="text" v-model="editSaleParams.start_time" />
        </div>
        <div>
          End Date:
          <input type="text" v-model="editSaleParams.end_date" />
        </div>
        <div>
          End Time:
          <input type="text" v-model="editSaleParams.end_time" />
        </div>
        <div>
          <input type="submit" value="Update" />
        </div>
      </form>
    </div>
  </div>
</template>
<style>
.sales-edit {
  color: black;
  padding: 5em;
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
.editsale {
}
</style>

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
  <div class="sales-edit">
    <h1>Edit Sale</h1>
    <form v-on:submit.prevent="updateSale(sale)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Title:
      <input type="text" v-model="editSaleParams.title" />
      Address:
      <input type="text" v-model="editSaleParams.address" />
      Picture:
      <input type="text" v-model="editSaleParams.picture" />
      Description:
      <input type="text" v-model="editSaleParams.description" />
      Start Date:
      <input type="text" v-model="editSaleParams.start_date" />
      Start Time:
      <input type="text" v-model="editSaleParams.start_time" />
      End Date:
      <input type="text" v-model="editSaleParams.end_date" />
      End Time:
      <input type="text" v-model="editSaleParams.end_time" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

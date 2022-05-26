<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sale: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/sales/${this.$route.params.id}`).then((response) => {
      console.log("sales show", response);
      this.sale = response.data;
    });
  },
  methods: {
    editSale() {
      axios
        .patch(`/sales/${this.sale.id}`, this.sale)
        .then((response) => {
          console.log("sales edit", response);
          this.$router.push("/sales");
        })
        .catch((error) => {
          console.log("sales edit error", error.response);
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
      <form v-on:submit.prevent="editSale()">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          Title:
          <input type="text" v-model="sale.title" />
        </div>
        <div>
          Address:
          <input type="text" v-model="sale.address" />
        </div>
        <div>
          Picture:
          <input type="text" v-model="sale.picture" />
        </div>
        <div>
          Description:
          <input type="text" v-model="sale.description" />
        </div>
        <div>
          Start Date:
          <input type="text" v-model="sale.start_date" />
        </div>
        <div>
          Start Time:
          <input type="text" v-model="sale.start_time" />
        </div>
        <div>
          End Date:
          <input type="text" v-model="sale.end_date" />
        </div>
        <div>
          End Time:
          <input type="text" v-model="sale.end_time" />
        </div>
        <div>
          <input type="submit" value="edit" />
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

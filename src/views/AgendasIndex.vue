<script>
import axios from "axios";
export default {
  data: function () {
    return {
      agendas: [],
      message: "hello?",
      currentAgenda: {},
    };
  },
  created: function () {
    this.indexAgendas();
  },
  methods: {
    indexAgendas: function () {
      axios.get("/agendas").then((response) => {
        console.log(response.data);
        this.agendas = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="agendas-index">
    <h1 class="m-3">YOUR AGENDA</h1>
    <div
      class="col"
      v-bind:class="{ selected: agenda === currentAgenda }"
      v-for="agenda in agendas"
      v-bind:key="agenda.id"
      v-on:click="currentAgenda"
    >
      <div>
        <!-- <h2>{{ agenda.id }}</h2> -->
        <p></p>
        <img
          class="img-fluid"
          v-bind:src="agenda.sale.picture"
          v-bind:alt="agenda.sale.title"
          style="width: 25rem; height: 15rem"
        />
        <h4>{{ agenda.sale.address }}</h4>
        <p>Start date {{ agenda.sale.start_date }}</p>
        <p>Start time {{ agenda.sale.start_time }}</p>
        <a v-bind:href="`/sales/${agenda.sale.id}`" class="btn btn-primary">Details</a>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <p></p>
    </div>
  </div>
</template>

<style scoped>
.agendas-index {
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
    #e18214
  );
  color: black;
}
</style>

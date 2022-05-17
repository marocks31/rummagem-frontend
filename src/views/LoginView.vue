<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer" + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
          console.log(response.data.jwt);
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div class="login-page">
    <div class="row">
      <div class="login col-2 m-auto">
        <form v-on:submit.prevent="submit()">
          <p></p>
          <h1>Login</h1>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div>
            <label>Email:</label>
            <input type="email" v-model="newSessionParams.email" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" v-model="newSessionParams.password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  color: black;
  background-image: linear-gradient(to top, #f8f8ff, #ff0000, #e9174b, #dc60b3, #ce6f3f, #d08505, #e18214, #c2c2c2);
  padding: 20px;
  margin: 10px 0;
}
</style>

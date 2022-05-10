<template>
  <div id="app">
    <header class="masthead">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars ms-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <!-- <li class="nav-item"><a class="nav-link" href="#services">Services</a></li> -->
              <li class="nav-item"><a class="nav-link" href="/sales">Sales</a></li>
              <li class="nav-item"><a class="nav-link" href="/sales/new">Post a Sale</a></li>
              <li v-if="!isLoggedIn" class="nav-item"><a class="nav-link" href="/login">Log In</a></li>
              <li v-if="isLoggedIn" class="nav-item"><a class="nav-link" href="/logout">Sign Out</a></li>
              <li v-if="!isLoggedIn" class="nav-item"><a class="nav-link" href="/signup">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="masthead-subheading">What will you find?</div>
        <div class="masthead-heading text-uppercase">Rummagem</div>
        <a class="btn btn-primary btn-xl text-uppercase" href="#services">Treasures</a>
      </div>
    </header>
    <!-- Portfolio Grid-->

    <router-view />
    <!-- Footer-->
    <footer class="footer py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-start">Copyright &copy; Rummagem 2022</div>
          <div class="col-lg-4 my-3 my-lg-0">
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
            <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.getItem("jwt");
      console.log(localStorage.jwt, "jwt check");
      console.log(this.isLoggedIn);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

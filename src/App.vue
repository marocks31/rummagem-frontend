<template>
  <div id="app">
    <header class="masthead">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="#page-top"></a>
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
              <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
              <!-- <li class="nav-item"><a class="nav-link" href="/sales">Sales</a></li> -->
              <li class="nav-item"><a class="nav-link" href="/sales/new">Post a Sale</a></li>
              <li class="nav-item"><a class="nav-link" href="/agendas">Agenda</a></li>
              <!-- <li class="nav-item"><a class="nav-link" href="/about">Map View</a></li> -->

              <li v-if="!isLoggedIn" class="nav-item"><a class="nav-link" href="/login">Log In</a></li>
              <li v-if="isLoggedIn" class="nav-item"><a class="nav-link" href="/logout">Sign Out</a></li>
              <li v-if="!isLoggedIn" class="nav-item"><a class="nav-link" href="/signup">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container-title">
        <!-- <a class="btn btn-primary btn-xl text-uppercase" href="/sales">Sales</a> -->
        <div class="masthead-heading text-uppercase">Rummagem</div>
        <div class="masthead-subheading">What treasures will you find?</div>
      </div>
    </header>
    <!-- Portfolio Grid-->

    <router-view />
    <!-- Footer-->
    <footer class="footer py-4">
      <div class="container">
        <img class="footer-img" style="width: auto; height: 200px" />
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

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-image: url("https://res.cloudinary.com/dwstndeye/image/upload/v1652664225/fader-1_ozfkdg.png");
  padding: 0;
  object-fit: cover;
  background-repeat: repeat;
  background-size: cover;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.masthead {
  text-shadow: 3px 3px #090808;
  width: auto;
  background-position: center;
  height: auto;
}
.footer {
  background-image: url("https://res.cloudinary.com/dwstndeye/image/upload/v1652643839/footer_2_ffdcwp.webp");
}
.masthead-subheading {
  position: relative;
  bottom: 70px;
}
.img {
  height: 250px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  border-color: black;
  border: 3px solid;
  border-color: #d16ba5;
}
</style>

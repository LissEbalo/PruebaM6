<template>
  <div>
    <b-navbar variant="dark">
      <h1>🎮 Games opinion</h1>
      <!-- <router-link class="navbar" to="/">🎮 Games opinion</router-link> -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-navbar-nav>
            <router-link class="navbar" to="/">🏠 Home</router-link>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "NavbarComponent",
});
</script>

<style scoped>
.navbar {
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 10px;
}
</style>

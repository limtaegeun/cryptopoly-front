<template>
  <v-app-bar
    absolute
    app
    height="44"
    class="home-app-bar"
    dense
    flat
    color="#f2f4f8"
  >
    <router-link to="/">
      <v-toolbar-title class="logo">Cryptopoly</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="price">
      <button class="page-link">Price</button>
    </router-link>
    <router-link to="login">
      <button class="page-link">Login</button>
    </router-link>

    <v-btn outlined color="#c48c34">
      Start
    </v-btn>
  </v-app-bar>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "AppBar"
});
</script>

<style scoped lang="scss">
.logo {
  font-family: "Comfortaa", sans-serif;
  color: #111111;
  text-decoration: none;
}
.page-link {
  font-family: "Noto Sans KR", "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #111111;
  text-decoration: none;
  margin-right: 20px;
}
button:hover {
  cursor: pointer;
  color: #F0BD66;
}
</style>

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
    <v-toolbar-title>Cryptopoly</v-toolbar-title>
    <v-btn text style="margin-left: 30px">
      About
    </v-btn>
    <v-btn text>
      Contact
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn rounded color="#c48c34">
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

<style scoped></style>

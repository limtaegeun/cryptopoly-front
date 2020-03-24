<template>
  <div class="home">
    <app-bar></app-bar>
    <start-banner></start-banner>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StartBanner from "@/components/home/StartBanner.vue";
import AppBar from "@/components/home/AppBar.vue";
import Footer from "@/components/home/Footer.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Footer,
    AppBar,
    StartBanner
  },
  data: () => ({
    //
  })
});
</script>
<style scoped lang="scss">
.home {
}
</style>

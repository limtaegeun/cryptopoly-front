<template>
  <v-app>
    <core-app-bar></core-app-bar>
    <core-view></core-view>
    <core-footer></core-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",
  components: {
    CoreView: () => import("@/components/home/View.vue"),
    CoreAppBar: () => import("@/components/home/AppBar.vue"),
    CoreFooter: () => import("@/components/home/Footer.vue")
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

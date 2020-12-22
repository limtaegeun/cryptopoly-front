<template>
  <div id="home">
    <core-app-bar></core-app-bar>
    <core-view></core-view>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",
  components: {
    CoreView: () => import("@/components/home/View.vue"),
    CoreAppBar: () => import("@/components/home/AppBar.vue"),
  },
  data: () => ({
    //
  })
});
</script>
<style scoped lang="scss">
#home {
  height: 100vh;
  overflow-y: auto;
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
  beforeMount() {
    let isMobile = /iphone|ipod|android|ie|blackberry|fennec/.test(
      navigator.userAgent.toLowerCase()
    );
    this.setIsMobile(isMobile);
  },
  methods: {
    ...mapMutations(["setIsMobile"])
  }
});
</script>
<style scoped lang="scss">
.keyColor {
  color: #ffc66d;
}
.dark-key {
  color: #c48c34;
}
.background {
  background-color: #2b2b2b;
}
</style>

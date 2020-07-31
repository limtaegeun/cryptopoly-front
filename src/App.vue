<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
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
<style lang="scss">
.keyColor {
  color: #ffc66d;
}
.dark-key {
  color: #c48c34;
}
.background {
  background-color: #f2f4f8;
}

a {
  color: #111111;
  text-decoration: none;
}
</style>

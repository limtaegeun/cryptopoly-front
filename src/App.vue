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
  color: #f9bc53;
}
.dark-key {
  color: #c48c34;
}
.background {
  background-color: #f2f4f8;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: "Noto Sans KR", "Roboto", sans-serif;
}
a {
  color: #111111;
  text-decoration: none;
}
button:hover {
  cursor: pointer;
  color: #f0bd66;
}
button:focus {
  outline: none;
  border: none;
}

.convex-card {
  border-radius: 8px;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff;
  background-color: #f2f4f8;
  padding: 30px;
}
.convex-reverse {
  border-radius: 8px;
  box-shadow: inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),
    inset -3px -3px 6px 0px #fff;
  background-color: #f2f4f8;
  padding: 20px;
}
.convex-btn {
  border-radius: 8px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.08), -2px -2px 4px 0px #fff;
  background-color: #f2f4f8;
}
</style>

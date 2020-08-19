<template>
  <v-footer id="cpredict-footer" absolute height="82">
    <div class="footer-items">
      Cryptopoly
    </div>
    <v-spacer />
    <span class="font-weight-light copyright">
      &copy;
      {{ new Date().getFullYear() }}
      TGL
    </span>
  </v-footer>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend( {
    name: "Footer",
    data: () => ({
      links: [
        { name: "Home", Link: "/#" },
        { name: "Shop", Link: "https://havehad.kr" },
        { name: "Admin", Link: "https://wp.havehad.kr" }
      ]
    })
  })
</script>

<style scoped lang="scss">
  #predict-footer {
    z-index: 0;
  }
  .footer-links {
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    padding: 15px;
    line-height: 1.8;
  }
</style>
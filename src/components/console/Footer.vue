<template>
  <v-footer id="cpredict-footer" absolute height="82">
    <div class="footer-items">
      <span v-for="link in links" :key="link.name">
        <a :href="link.Link" class="tertiary--text footer-links">{{
          link.name
        }}</a>
      </span>
    </div>
    <v-spacer />
    <span class="font-weight-light copyright">
      &copy;
      {{ new Date().getFullYear() }}
      <a href="https://limtaegeun.github.io" target="_blank">Steve Lim</a>, made
      with
      <v-icon color="tertiary" size="17">mdi-heart</v-icon>
      for a better havehad
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
<template>
  <v-content class="grey lighten-3">
    <div id="console-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
    <predict-footer />
  </v-content>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    name: "ProdictView",
    components: {
      PredictFooter: () => import("@/components/console/Footer")
    },
  })
</script>

<style scoped lang="scss">
  #console-view {
    padding-bottom: 100px;
  }
</style>
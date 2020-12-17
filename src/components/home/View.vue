<template>
  <v-content class="grey lighten-3">
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    name: "HomeView",
    components: {
    },
  })
</script>

<style scoped lang="scss">
  #core-view {
    padding-bottom: 82px;
    background-color: #f2f4f8;
    min-height: calc(100vh - 44px);
  }
</style>
<template>
  <v-content class="grey lighten-3">
    <div id="core-view">
<!--      <v-fade-transition mode="out-in">-->
<!--        <router-view />-->
<!--      </v-fade-transition>-->
    </div>
    <core-footer></core-footer>
  </v-content>
</template>

<script>
  export default {
    name: "View",
    components: {
      CoreFooter: () => import("@/components/home/Footer.vue")
    },
  }
</script>

<style scoped>

</style>
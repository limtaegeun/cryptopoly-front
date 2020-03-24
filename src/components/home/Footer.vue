<template>
  <v-card height="150">
    <v-footer
      padless
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    name: "Footer",
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    })
  })
</script>

<style scoped lang="scss">

</style>
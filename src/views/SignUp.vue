<template>
  <div class="sign-up-view">
    <v-container class="container">
      <v-row class="row-wrapper" align="center" justify="center">
        <v-card class="sign-up-card" outlined tile>
          Column
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SignUp"
};
</script>

<style scoped lang="scss">
  .sign-up-view {
    min-height: 400px;
    .container {
      height: 100%;
    }
    .row-wrapper {
      height: 100%;
    }
  }
.sign-up-card {
  width: 100%;
  max-width: 400px;
}
</style>

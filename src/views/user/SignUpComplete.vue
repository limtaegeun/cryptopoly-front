<template>
  <div class="sign-up-complete-view">
      <v-row class="wrapper" justify="center" align="center" no-gutters>
        <div  class="convex-card" style="display: block; position: relative">
          <h2 class="mb-4">Registration is complete. 🎉</h2>
          <p>Hi! {{$route.params.username}} 👋 <br>Congratulations on the start of your smart investment.</p>
          <div class="actions">
            <router-link to="/login">
              <button class="convex-btn rignt-down" >Login</button>
            </router-link>

          </div>

        </div>

      </v-row>

  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SignUpComplete",
  data: () => ({
    //
  })
})
</script>

<style scoped lang="scss">
.sign-up-complete-view {
  height: calc(100vh - 126px);
}
.wrapper{
  height: 100%;
}
button {
  font-size: 1.2rem;
}
p {
  font-size: 1.2rem;
}
.actions {
  height: 50px;
}
.rignt-down {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>
<template>
  <v-slide-y-reverse-transition>
    <div v-show="!close" class="alert-banner px-8 py-3">
      <div class="banner-card">
        Try all features for free during the beta period.
      </div>
      <v-btn icon color="white" class="close-btn" @click="close=true"><v-icon>mdi-close</v-icon></v-btn>
    </div>
  </v-slide-y-reverse-transition>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AlertBanner",
  data: () => ({
    close: false
  })
});
</script>

<style scoped lang="scss">
.alert-banner {
  background-color: #f0bd65;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
}
.banner-card {
  border-radius: 8px;
  text-align: center;
  font-size: 1.3rem;
  color: white;
  font-weight: 700;
}
.close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>

<template>
  <div class="start-banner">
    <h1>존나 멋진 서비스</h1>
    <v-btn rounded color="#c48c34">
      시작하기
    </v-btn>
  </div>
</template>

<script>
  import Vue from "vue";
  export default Vue.extend({
    name: "StartBanner"
  })
</script>

<style scoped lang="scss">
  .start-banner {
    height: 300px;
  }
</style>
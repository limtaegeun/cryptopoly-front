<template>
  <div class="price-view">

  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {mapState} from "vuex";
  export default Vue.extend({
    name: "",
    data: () => ({
      //
    }),
    computed: {
      ...mapState(['user'])
    }
  })
</script>

<style scoped lang="scss">
.price-view {
  min-height: 700px;
}
</style>
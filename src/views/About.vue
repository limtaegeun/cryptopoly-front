<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
  import Vue from "vue";
  import { mapState } from "vuex";
  export default Vue.extend({
    name: "About",
    data: () => ({

    }),
    computed: {
      ...mapState(["user"])
    }
  });
</script>

<style scoped lang="scss">

</style>
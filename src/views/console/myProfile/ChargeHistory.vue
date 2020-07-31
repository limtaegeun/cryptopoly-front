<template
  ><div class="charge-history-view">
    <v-data-table
      :headers="headers"
      :items="charges"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table></div
></template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ChargeHistory",
  data: () => ({
    headers: [
      {
        text: "date",
        align: "start",
        value: "name"
      },
      { text: "status", value: "calories" },
      { text: "Total Amount", value: "fat" },
      { text: "Plan Name", value: "carbs" },
      { text: "Payment Date", value: "protein" },
      { text: "Invoice", value: "invoice" }
    ],
    charges: []
  })
});
</script>

<style scoped lang="scss"></style>

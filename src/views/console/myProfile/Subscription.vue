<template>
  <div class="subscription-view">
    <v-data-table
      :headers="headers"
      :items="subscriptions"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "",
  data: () => ({
    headers: [
      {
        text: "Service Name",
        align: "start",
        value: "service"
      },
      { text: "Plan Name", value: "plan" },
      { text: "Date Subscribed", value: "start" },
      { text: "Date expired", value: "expired" },
      { text: "Update", value: "update" }
    ],
    subscriptions: []
  })
});
</script>

<style scoped lang="scss"></style>

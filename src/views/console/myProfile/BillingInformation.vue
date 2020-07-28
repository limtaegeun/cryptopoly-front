<template>
  <div>
    <h1>Billing Information</h1>
    <div class="info-wrapper">
      <v-row>
        <v-col cols="12">
          <v-text-field
            class="info-text-field"
            outlined
            dense
            label="Regular"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            class="info-text-field" dense
            outlined
            label="Regular"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field class="info-text-field" dense
            outlined
            label="Regular"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field class="info-text-field" dense
            outlined
            label="Regular"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field class="info-text-field" dense
            outlined
            label="Regular"
          ></v-text-field>
        </v-col>

      </v-row>
      <v-row class="button-wrapper">
        <v-btn style="margin-right: 12px">Edit</v-btn>
        <v-btn>Delete</v-btn>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BillingInformation",
  data: () => ({
    //
  })
});
</script>

<style scoped lang="scss">
  .info-wrapper {
    max-width: 500px;
  }
  .button-wrapper {
    padding: 12px;
  }
  .info-text-field {
    height: 25px;
  }
</style>

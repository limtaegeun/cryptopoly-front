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
            label="Name"
            v-mask="'XXXXXXXXXXXXXXXXXXXXXX'"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            class="info-text-field"
            dense
            outlined
            label="Card Number"
            v-mask="'#### #### #### ####'"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            class="info-text-field"
            dense
            outlined
            label="MM/YY"
            v-mask="'##/##'"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            class="info-text-field"
            dense
            outlined
            label="CVC"
            v-mask="'###'"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row v-if="isEdit" class="button-wrapper">
        <v-btn style="margin-right: 12px">Save</v-btn>
        <v-btn @click="isEdit=!isEdit">Cancel</v-btn>
      </v-row>
      <v-row v-else class="button-wrapper">
        <v-btn style="margin-right: 12px" @click="isEdit=!isEdit" disabled>Edit</v-btn>
        <v-btn>Delete</v-btn>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
const VueTheMask = require("vue-the-mask");

export default Vue.extend({
  name: "BillingInformation",
  directives: { mask: VueTheMask.mask },
  data: () => ({
    isEdit: false
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

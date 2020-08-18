<template>
  <div class="price-prediction wrapper-banner">
    <v-container>
      <v-row justify="center">
        <v-col cols="11" sm="5">
          <v-img :src="require('../../../assets/price.png')"></v-img
        ></v-col>
        <v-col :cols="undefined"></v-col>
        <v-col cols="11" sm="5">
          <div class="convex-card card-banner">
            <h2>Price Prediction</h2>
            <p>
              High-accuracy cryptocurrency price prediction using deep learning
            </p>
            <div class="convex-reverse inner-card">30 Sec</div>
            <div class="convex-reverse inner-card">1 day</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PricePrediction",
  data: () => ({
    //
  })
});
</script>

<style scoped lang="scss">
.wrapper-banner {
  padding: 30px 0;
}
.card-banner {
  padding: 50px;
}
.inner-card {
  padding: 10px 20px;
  display: inline-block;
  margin-right: 20px;
}
h2 {
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 900;
}
p {
  margin-bottom: 20px;
  font-size: 16px;
}
button {
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 600;
}
</style>

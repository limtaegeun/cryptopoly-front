<template>
  <div class="start-banner wrapper-banner">
    <v-container>
      <v-row justify="center">
        <v-col cols="11" sm="5">
          <h1>Cryptocurrency investment by Ai</h1>
          <p>
            <v-icon small color="#f0bd66">mdi-check</v-icon> Price prediction by
            unit of time
          </p>
          <p>
            <v-icon small color="#f0bd66">mdi-check</v-icon> Investment
            sentiment analysis
          </p>
          <p>
            <v-icon small color="#f0bd66">mdi-check</v-icon> Cryptocurrency
            real-time keyword analysis
          </p>
          <button class="convex-card">Start free trial</button>
        </v-col>
        <v-col cols="11" sm="5"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "StartBanner"
});
</script>

<style scoped lang="scss">
.wrapper-banner {
  padding: 30px 0;
}
h1 {
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 900;
}
p {
  margin-bottom: 10px;
  font-size: 16px;
}
button {
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 600;
}
</style>

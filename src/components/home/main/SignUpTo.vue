<template>
  <div class="price-prediction wrapper-banner">
    <v-container>
      <v-row justify="center">
        <v-col cols="11" sm="5">
          <div class="convex-card card-banner">
            <h2>Signup to Cryptopoly</h2>
            <p>
              Essential tool for cryptocurrency investors
            </p>
            <p>
              <v-icon small color="#f0bd66">mdi-check</v-icon> Price prediction
            </p>
            <p>
              <v-icon small color="#f0bd66">mdi-check</v-icon> Investment
              sentiment analysis
            </p>
            <p>
              <v-icon small color="#f0bd66">mdi-check</v-icon> Keyword analysis
            </p>
            <button class="convex-card" @click="startService">Start free trial</button>
          </div>
        </v-col>
        <v-col :cols="undefined"></v-col>
        <v-col cols="11" sm="5"><v-img contain  :src="require('../../../assets/img/daseboard.png')"></v-img
        > </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapState} from "vuex";

export default Vue.extend({
  name: "SignUpTo",
  computed: {
    ...mapState(['user'])
  },
  methods : {
    startService() {
      if (this.user) {
        this.$router.push("console");
      } else {
        this.$router.push("signup");
      }
    }
  }
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

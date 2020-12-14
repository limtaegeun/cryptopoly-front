<template>
  <div class="price-prediction wrapper-banner">
    <v-container>
      <v-row justify="center">
        <v-col cols="11" sm="5">
          <v-img :src="require('../../../assets/img/cloud.png')"></v-img
        ></v-col>
        <v-col :cols="undefined"></v-col>
        <v-col cols="11" sm="5">
          <div class="convex-card card-banner">
            <span class="badge">preparing</span>
            <h2>Word Cloud</h2>
            <p>
              It analyzes and displays keywords such as news, community, and
              blog related to cryptocurrency.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "WordCloud",
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
.badge {
  padding: 3px 15px;
  border-radius: 8px;
  border: #f0bd66 1px solid;
  color: #f0bd66;
  display: inline-block;
  font-size: 16px;
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

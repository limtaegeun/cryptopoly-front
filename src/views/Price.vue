<template>
  <div class="price-view">
    <v-container>
      <v-row align="center" justify="center">
        <div class="plan-card" v-for="(plan, i) in plans" :key="i">
          <h2>{{ plan.name }}</h2>
          <h3>{{ plan.price }}</h3>
          <p v-for="(text, j) in plan.contents" :key="j" ><v-icon small>mdi-check</v-icon> {{ text }}</p>

          <v-btn class="plan-btn"  outlined color="#c48c34">
            Start free trial
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  name: "",
  data: () => ({
    plans: [
      {
        name: "Basic",
        price: "Free",
        contents: ["Investor reaction word cloud", "keyword mind map"]
      },
      {
        name: "Pro",
        price: "$10",
        contents: [
          "Basic content included",
          "AI price prediction"
        ]
      }
    ]
  }),
  computed: {
    ...mapState(["user"])
  }
});
</script>

<style scoped lang="scss">
.price-view {
  min-height: 700px;
  padding: 100px 0;
  h2 {

  }
  h3 {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  p {
    margin-top: 10px;
  }
}
.plan-card {
  position: relative;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff;
  background-color: #f2f4f8;
  margin: 20px 20px;
  min-height: 400px;
}
  .plan-btn {
    position: absolute;
    bottom: 20px;
    width: calc(100% - 40px);
  }
</style>

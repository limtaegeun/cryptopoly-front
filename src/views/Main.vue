<template>
  <div class="main">
    <start-banner></start-banner>
    <price-prediction></price-prediction>
    <keyword-analytics></keyword-analytics>
    <word-cloud></word-cloud>
    <sign-up-to></sign-up-to>
  </div>
</template>

<script>
import StartBanner from "../components/home/main/StartBanner";
import PricePrediction from "../components/home/main/PricePrediction";
import KeywordAnalytics from "../components/home/main/KeywordAnalytics";
import WordCloud from "../components/home/main/WordCloud";
import SignUpTo from "../components/home/main/SignUpTo";
export default {
  name: "Main",
  components: {StartBanner, PricePrediction, KeywordAnalytics, WordCloud, SignUpTo }
};
</script>

<style scoped></style>

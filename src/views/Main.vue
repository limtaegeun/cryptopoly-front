<template>
  <div class="main">
    <start-banner></start-banner>
    <price-prediction></price-prediction>
    <keyword-analytics></keyword-analytics>
    <word-cloud></word-cloud>
  </div>
</template>

<script>
import StartBanner from "../components/home/main/StartBanner";
import PricePrediction from "../components/home/main/PricePrediction";
import KeywordAnalytics from "../components/home/main/KeywordAnalytics";
import WordCloud from "../components/home/main/WordCloud";
export default {
  name: "Main",
  components: { StartBanner, PricePrediction, KeywordAnalytics, WordCloud }
};
</script>

<style scoped></style>

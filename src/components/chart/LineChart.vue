<script>
  import { Line, mixins } from "vue-chartjs";
  const { reactiveProp } = mixins
  export default {
    name: "LineChart",
    extends: Line,
    mixins: [reactiveProp],
    props: ['options'],
    mounted() {
      this.renderChart(this.chartData, this.options);
    }
  };
</script>

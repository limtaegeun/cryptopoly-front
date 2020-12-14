<template>
  <div class="close-chart-view">
    <v-container fluid>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="2" xs="6">
          <v-select
            v-model="currentPreset"
            :items="datePreset"
            @change="selectChange"
          ></v-select>
        </v-col>
        <v-col cols="4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="dates"
            transition="scale-transition"
            offset-y
            min-width="290px"
            max-width="490px"
            :close-on-click="false"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateRangeText"
                label="조회 기간을 선택해 주세요"
                prepend-icon="mdi-calendar"
                readonly
                v-on="on"
              >
              </v-text-field>
            </template>
            <v-date-picker v-model="dates" no-title scrollable range>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="changeDateSave">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12">
          <div class="chart-wrapper">
            <line-chart
              class="line-chart"
              ref="priceChart"
              :chart-data="chartDataCollection"
              :options="chartOptions"
            ></line-chart>
          </div>
        </v-col>
        <v-col cols="12">
          <!-- data table-->
          <h3 class="mb-2">Actual Price</h3>
          <v-data-table
            :headers="actualHeaders"
            :items="actualPrices"
            dense
            :items-per-page="10"
            class="elevation-1"
          ></v-data-table>
        </v-col>
        <v-col cols="12">
          <!-- data table-->
          <h3 class="mb-2">Target Price</h3>
          <v-data-table
            :headers="targetHeaders"
            :items="targetPrices"
            dense
            :items-per-page="10"
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import moment from "moment";
import Vue from "vue";
import LineChart from "../../components/chart/LineChart";
import _ from "lodash";
export default Vue.extend({
  name: "OneDayChart",
  components: { LineChart },
  data: () => ({
    dates: [],
    period: 86400,
    sortingDates: [],
    menu: false,
    tableLoading: true,
    snackbar: false,
    datePreset: ["어제", "최근 7일", "지난 30일", "맞춤"],
    currentPreset: "최근 7일",
    // for chart.js
    chartDataCollection: {},
    chartOptions: {
      maintainAspectRatio: false
    },
    // for table
    actualHeaders: [
      {
        text: "date",
        align: "left",
        value: "date"
      },
      { text: "high", value: "high" },
      { text: "low", value: "low" },
      { text: "open", value: "open" },
      { text: "close", value: "close" },
      { text: "volume", value: "volume" }
    ],
    targetHeaders: [
      {
        text: "date",
        align: "left",
        value: "date"
      },
      { text: "close", value: "close" }
    ],
    actualPrices: [],
    targetPrices: []
  }),
  computed: {
    dateRangeText() {
      return this.sortingDates.join(" ~ ");
    }
  },
  watch: {
    dates(newValue) {
      console.log(newValue);
      let sorting = _.cloneDeep(newValue);
      sorting.sort((a, b) => {
        return moment(a).unix() - moment(b).unix();
      });
      this.sortingDates = sorting;
      return newValue;
    }
  },
  beforeMount() {
    this.currentPreset = "최근 7일";
    this.dates = this.setDatesWithSubtract(moment(), 6);
    this.sortingDates = this.dates;
    this.refreshData();
  },
  methods: {
    changeDateSave() {
      // console.log("change");
      this.$refs.menu.save(this.dates);
      this.currentPreset = "맞춤";
      this.refreshData();
    },
    setDatesWithSubtract(endDay, subtract) {
      const startDay = moment(endDay.toISOString()).subtract(subtract, "days");
      return [startDay.format("YYYY-MM-DD"), endDay.format("YYYY-MM-DD")];
    },
    selectChange(cur) {
      switch (cur) {
        case "어제": {
          const yest = moment().subtract(1, "days");
          this.dates = this.setDatesWithSubract(yest, 0);
          break;
        }
        case "최근 7일": {
          this.dates = this.setDatesWithSubract(moment(), 6);
          break;
        }
        case "지난 30일": {
          this.dates = this.setDatesWithSubract(moment(), 30);
          break;
        }
      }
    },
    refreshData() {
      this.resetChartSize(this.sortingDates, this.period);
      let divide = this.divideDate(this.sortingDates[0], this.sortingDates[1]);
      console.log(divide);
      let asyncArray = [];
      if (divide.real.length) {
        asyncArray.push(
          this.requestRealData(divide.real[0], divide.real[1], 86400)
        );
      } else {
        asyncArray.push(null);
      }
      if (divide.predict.length) {
        asyncArray.push(
          this.requestPredictData(divide.predict[0], divide.predict[1], 86400)
        );
      } else {
        asyncArray.push(null);
      }
      Promise.all(asyncArray).then(value => {
        this.makeCollection(value[0], value[1]);
        this.actualPrices = this.makeTableValue(value[0]);
        this.targetPrices = this.makeTableValue(value[1]);
      });
    },
    resetChartSize(dates, period) {
      let start = moment(dates[0]).unix();
      let end = moment(dates[1]).unix();
      let diff = (end - start) / period;
      let minWidthOfBlock = 1000 / 30;
      let neededWidth = parseInt(diff * minWidthOfBlock)
      let windowWidth = window.innerWidth;
      if (Object.prototype.hasOwnProperty.call(this.$refs, "priceChart")) {
        console.log(this.$refs.priceChart);
        document.querySelector(
          "#console-view > div > div > div > div:nth-child(4) > div > div"
        ).style.width =
            (windowWidth > neededWidth ? '100%' : neededWidth+ "px");
      }
    },
    divideDate(start, end) {
      let realRange = [];
      let predictRange = [];
      let now = moment.utc();
      start = moment.utc(start);
      end = moment.utc(end);

      if (start.unix() < now.unix()) {
        realRange = [start.format("YYYY-MM-DD"), now.format("YYYY-MM-DD")];
      }
      if (start.unix() < end.unix()) {
        predictRange = [start.format("YYYY-MM-DD"), end.format("YYYY-MM-DD")];
      }
      return { real: realRange, predict: predictRange };
    },
    requestRealData(start, end, period) {
      return new Promise((resolve, reject) => {
        this.$http
          .get(this.$API + `/chart?start=${start}&end=${end}&period=${period}`)
          .then(real => {
            this.loading = false;
            console.log("real:", real);
            console.log("SUCCESS!!");
            resolve(real.data.data);
          })
          .catch(err => {
            this.loading = false;
            this.fail = true;
            console.log("FAILURE!!");
            reject(err);
          });
      });
    },
    requestPredictData(start, end, period) {
      return new Promise((resolve, reject) => {
        this.$http
          .get(
            this.$API + `/predict?start=${start}&end=${end}&period=${period}`
          )
          .then(predict => {
            this.loading = false;
            console.log(predict);
            resolve(predict.data.data);
            console.log("SUCCESS!!");
          })
          .catch(err => {
            this.loading = false;
            this.fail = true;
            console.log("FAILURE!!");
            reject(err);
          });
      });
    },
    genLabel(real, predict) {
      let predictDate = predict
        ? predict.map(el => {
            return moment.utc(el.date).format("YYYY-MM-DD");
          })
        : [];
      return predictDate;
    },
    makeCollection(real, predict) {
      let dataSets = [];
      if (real) {
        dataSets.push({
          label: "actual", // data 이름
          borderColor: "#f87979",
          backgroundColor: "rgba(0,0,0,0)",
          data: real.map(el => {
            return el.close;
          })
        });
      }
      if (predict) {
        dataSets.push({
          label: "target", // data 이름
          borderColor: "#f8f413",
          backgroundColor: "rgba(0,0,0,0)",

          data: predict.map(el => {
            return el.close;
          })
        });
      }
      this.chartDataCollection = {
        labels: this.genLabel(real, predict), // x축 labels
        datasets: dataSets
      };
    },
    makeTableValue(rawValue) {
      return rawValue.map(el => {
        return { ...el, date: moment.utc(el.date).format("YYYY-MM-DD") };
      });
    }
  }
});
</script>

<style scoped lang="scss">
.chart-wrapper {
  overflow-x: auto;
  .line-chart {
    max-height: 400px;
    width: 100%;
  }
}
</style>

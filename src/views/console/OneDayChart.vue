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
          <!-- chart -->
        </v-col>
        <v-col cols="12">
          <!-- data table-->
          <v-data-table
            :headers="headers"
            :items="charts"
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
export default Vue.extend({
  name: "OneDayChart",
  data: () => ({
    dates: [],
    menu: false,
    tableLoading: true,
    snackbar: false,
    datePreset: ["어제", "최근 7일", "지난 30일", "맞춤"],
    currentPreset: "최근 7일",
    // for chart.js
    chartData: null,
    chartOptions: {
      legend: { position: "left" },
      title: {
        display: true,
        text: "Top 10 Product",
        fontSize: 20
      }
    },
    // for table
    headers: [
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
    charts: []
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  },
  beforeMount() {
    this.currentPreset= "최근 7일"
    this.dates = this.setDatesWithSubract(moment(), 6)
    this.requestRealData(this.dates[0], this.dates[1], 86400)
    this.requestPredictData(this.dates[0], this.dates[1], 86400)
  },
  methods: {
    changeDateSave() {
      // console.log("change");
      this.$refs.menu.save(this.dates);
      this.currentPreset = "맞춤";
      // this.requestLogs();
    },
    setDatesWithSubract(endDay, subtract) {
      const startDay = moment(endDay.toISOString()).subtract(subtract, "days");
      return  [
        startDay.format("YYYY-MM-DD"),
        endDay.format("YYYY-MM-DD")
      ];

    },
    selectChange(cur) {
      switch (cur) {
        case "어제": {
          const yest = moment()
            .subtract(1, "days")
          this.dates = this.setDatesWithSubract(yest, 0);
          break;
        }
        case "최근 7일": {
          this.dates = this.setDatesWithSubract(moment(), 6)
          break;
        }
        case "지난 30일": {
          this.dates = this.setDatesWithSubract(moment(), 30)
          break;
        }
      }
    },
    requestRealData (start , end, period) {
      // let startString = moment(start).format('YYYY-MM-DD')
      // let endString = end.format('YYYY-MM-DD')
      console.log('request real')
      this.$http
        .get(this.$API + `/chart?start=${start}&end=${end}&period=${period}`)
        .then((real) => {
          this.loading = false;
          console.log('real:',real)
          console.log("SUCCESS!!");
        })
        .catch(err => {
          this.loading = false;
          this.fail = true;
          console.log("FAILURE!!");
        });
    },
    requestPredictData (start , end, period) {
      // let startString = start.format('YYYY-MM-DD')
      // let endString = end.format('YYYY-MM-DD')
      this.$http
        .get(this.$API + `/predict?start=${start}&end=${end}&period=${period}`)
        .then(() => {
          this.loading = false;

          console.log("SUCCESS!!");
        })
        .catch(err => {
          this.loading = false;
          this.fail = true;
          console.log("FAILURE!!");
        });
    }
  }
});
</script>

<style scoped lang="scss"></style>

<template><div class="close-chart-view">
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
          ref="HHCMenu"
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
            <v-btn text color="primary" @click="changeDateSave(dates)">OK</v-btn>
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
</div> </template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
export default Vue.extend({
  name: "HalfHourChart",
  data: () => ({
    dates: [] as string[],
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
    dateRangeText(): string {
      return this.dates.join(" ~ ");
    }
  },
  mounted() {
    this.currentPreset= "최근 7일"
    this.dates = this.setDatesWithSubract(moment(), 6)
  },
  methods: {
    changeDateSave(dates: string[]) {
      // console.log("change");
      (this.$refs.HHCMenu as Vue & { save : (date : any) => void}).save(dates);
      this.currentPreset = "맞춤";
      // this.requestLogs();
    },
    setDatesWithSubract(endDay: moment.Moment, subtract: number) {
      const startDay = moment(endDay.toISOString()).subtract(subtract, "days");
      return  [
        startDay.format("YYYY-MM-DD"),
        endDay.format("YYYY-MM-DD")
      ];

    },
    selectChange(cur : string) {
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
    }
  }
});
</script>

<style scoped lang="scss"></style>

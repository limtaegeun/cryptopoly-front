<template>
  <v-app>
    <predict-app-bar />
    <predict-drawer />
    <predict-view />
  </v-app>
</template>

<script>
export default {
  name: "Base",
  components: {
    PredictDrawer: () => import("@/components/predict/Drawer"),
    PredictAppBar: () => import("@/components/predict/AppBar"),
    PredictView: () => import("@/components/predict/View")
  }
};
</script>

<style scoped></style>

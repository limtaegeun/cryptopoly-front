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
    PredictDrawer: () => import("@/components/console/Drawer"),
    PredictAppBar: () => import("@/components/console/AppBar"),
    PredictView: () => import("@/components/console/View")
  },
  data: () => ({
    expandOnHover: false,
  }),
};
</script>

<style scoped></style>

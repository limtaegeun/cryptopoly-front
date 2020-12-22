<template>
  <div id="console-base">
    <predict-app-bar />
    <predict-drawer />
    <predict-view />
  </div>

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

<style lang="scss" scoped>
#console-base {
  height: 100%;
}
</style>

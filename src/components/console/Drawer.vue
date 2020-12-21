<template>
  <v-navigation-drawer
    id="predict-app-drawer"
    v-model="inputValue"
    app
    color="grey darken-2"
    dark
    floating
    mobile-break-point="991"
    persistent
    width="260"
  >
    <template v-slot:img="attrs">
      <v-img
        v-bind="attrs"
        gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"
      />
    </template>

    <v-list-item two-line>
      <v-list-item-title class="logo-btn">
        Cryptopoly
      </v-list-item-title>
    </v-list-item>

    <v-divider class="mx-3 mb-3" />

    <v-list nav>
      <!-- Bug in Vuetify for first child of v-list not receiving proper border-radius -->
      <div />
      <v-list-item to="/console/dashboard" active-class="primary white--text">
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>
      <v-list-group
        :prepend-icon="link.icon"
        :value="false"
        v-for="(link, i) in links"
        :key="i"
      >
        <template v-slot:activator>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </template>
        <v-list-item
          v-for="(item, j) in link.child"
          :key="j"
          :to="item.to"
          dense
          active-class="primary white--text"
        >
          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list-group>
    </v-list>
    <template v-slot:append>
      <v-list-item to="/console/myprofile" active-class="primary white--text">
        <v-list-item-action>
          <v-avatar>
            <img
              v-if="false"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            />
            <span v-else-if="false" class="white--text headline">CJ</span>
            <v-icon v-else dark>mdi-account-circle</v-icon>
          </v-avatar>
        </v-list-item-action>
        <v-list-item-title>My profile</v-list-item-title>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script>
import Vue from "vue";
import { mapMutations, mapState } from "vuex";

export default Vue.extend({
  name: "Drawer",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    links: [
      {
        icon: "",
        text: "비트코인 (BTC)",
        child: [
          {
            to: "/console/1d/btc",
            icon: "",
            text: "하루 단위 예측"
          },{
            to: "/console/30min/btc",
            icon: "",
            text: "30분 단위 예측"
          }
        ]
      }
    ]
  }),
  computed: {
    ...mapState(["drawer"]),
    inputValue: {
      get() {
        return this.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },
  methods: {
    ...mapMutations(["setDrawer", "toggleDrawer"])
  }
});
</script>

<style scoped lang="scss">
.logo-btn {
  font-family: "Comfortaa", sans-serif;
  text-decoration: none;
  font-size: 23px;
}
</style>

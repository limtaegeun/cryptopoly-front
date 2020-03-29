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
      <v-list-item-avatar color="white">
        <v-img
          src="https://wiki.d-addicts.com/images/thumb/4/4c/IU.jpg/220px-IU.jpg"
          height="40"
        />
      </v-list-item-avatar>

      <v-list-item-title class="title">
        HAVE HAD MD
      </v-list-item-title>
    </v-list-item>

    <v-divider class="mx-3 mb-3" />

    <v-list nav>
      <!-- Bug in Vuetify for first child of v-list not receiving proper border-radius -->
      <div />
      <v-list-item to="dash" active-class="primary white--text">
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>

        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>
      <v-list-group :prepend-icon="link.icon" :value="false" v-for="(link, i) in links" :key="i">
        <template v-slot:activator>
          <v-list-item-title>{{ link.text}}</v-list-item-title>
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
  </v-navigation-drawer>
</template>

<script>
  import Vue from "vue";
  import { mapMutations, mapState } from "vuex";

  export default Vue.extend({
    name: "Drawer",
    props: {
      opened: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      links: [
        {
          icon: "mdi-math-log",
          text: "로그 데이터",
          child: [
            {
              to: "addcartlog",
              icon: "mdi-cart-plus",
              text: "장바구니 로그"
            },
            {
              to: "purchaselog",
              icon: "mdi-cash-usd-outline",
              text: "구매 로그"
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
  })
</script>

<style scoped lang="scss">

</style>
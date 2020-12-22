<template>
  <v-app-bar
    id="predict-app-bar"
    absolute
    app
    color="#eee"
    elevate-on-scroll
    scroll-target="#console-content-view"
    height="60"
  >
    <v-btn
      v-if="!responsive"
      class="mr-3"
      elevation="0"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon>
        mdi-dots-vertical
      </v-icon>
    </v-btn>
    <v-toolbar-title class="tertiary--text font-weight-light align-self-center">
      <v-btn v-if="responsive" dark icon @click.stop="onClick">
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
      {{ title }}
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-row align="center" class="mx-0">
<!--        <v-text-field-->
<!--          class="mr-4 purple-input"-->
<!--          color="purple"-->
<!--          label="Search..."-->
<!--          hide-details-->
<!--        />-->

<!--        <v-btn icon to="/">-->
<!--          <v-icon color="tertiary">-->
<!--            mdi-view-dashboard-->
<!--          </v-icon>-->
<!--        </v-btn>-->

<!--        <v-menu bottom left offset-y transition="slide-y-transition">-->
<!--          <template v-slot:activator="{ attrs, on }">-->
<!--            <v-btn-->
<!--              class="toolbar-items"-->
<!--              icon-->
<!--              to="/notifications"-->
<!--              v-bind="attrs"-->
<!--              v-on="on"-->
<!--            >-->
<!--              <v-badge color="error" overlap>-->
<!--                <template slot="badge">-->
<!--                  {{ notifications.length }}-->
<!--                </template>-->
<!--                <v-icon color="tertiary">-->
<!--                  mdi-bell-->
<!--                </v-icon>-->
<!--              </v-badge>-->
<!--            </v-btn>-->
<!--          </template>-->

<!--          <v-card>-->
<!--            <v-list dense>-->
<!--              <v-list-item-->
<!--                v-for="notification in notifications"-->
<!--                :key="notification"-->
<!--                @click="onClick"-->
<!--              >-->
<!--                <v-list-item-title v-text="notification" />-->
<!--              </v-list-item>-->
<!--            </v-list>-->
<!--          </v-card>-->
<!--        </v-menu>-->

<!--        <v-btn to="/user-profile" icon>-->
<!--          <v-icon color="tertiary">-->
<!--            mdi-account-->
<!--          </v-icon>-->
<!--        </v-btn>-->
      </v-row>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "AppBar",
  data: () => ({
    title: null,
    responsive: false,
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one"
    ]
  }),
  watch: {
    $route(val) {
      this.title = val.name;
    }
  },
  computed: {
    ...mapState(["drawer"])
  },
  mounted() {
    this.title = this.$route.name
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },

  methods: {
    ...mapMutations(["setDrawer", "toggleDrawer"]),
    onClick() {
      this.setDrawer(!this.$store.state.drawer);
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  }
});
</script>

<style scoped lang="scss">
#predict-app-bar {
  width: auto;
  a {
    text-decoration: none;
  }
}
</style>

<template>
  <div class="my-profile-view">
    <div class="left-flex-item">
      <v-card class="my-profile-drawer" elevation="12" width="256" v-if="!isMobile">
        <v-navigation-drawer floating permanent>
          <v-list dense rounded>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
      <v-tabs v-else>
        <v-tab v-for="item in items" :key="item.title" >{{item.title}}</v-tab>
      </v-tabs>
    </div>
    <div class="right-flex-item">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapState} from 'vuex'

export default Vue.extend({
  name: "myProfile",
  data() {
    return {
      items: [
        { title: "Profile", to: "dashboard" },
        { title: "Billing Information", to: "question_answer" },
        { title: "Transaction History", to: "question_answer" },
        { title: "Subscriptions & Usage", to: "question_answer" },

      ]
    };
  },
  computed: {
    ...mapState(['isMobile'])
  }
})
</script>

<style scoped lang="scss">
.my-profile-view {
 display: flex;
  flex-flow: row nowrap;
}
.left-flex-item {
  flex: 0 0 300px;
  border: solid 1px red;
}
.right-flex-item {
  flex: 1 1;
  border: solid 1px blue;
}
.my-profile-drawer {
  margin-left: 20px;
}
@media only screen and(max-width: 768px) {
  .my-profile-view {
    display: flex;
    flex-flow: column nowrap;
  }
  .left-flex-item {
    flex: 0 0 80px;
    border: solid 1px red;
  }
  .right-flex-item {
    flex: 1 1;
    border: solid 1px blue;
  }

}
</style>

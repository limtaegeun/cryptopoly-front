<template>
  <v-app-bar
    app
    absolute
    elevate-on-scroll
    scroll-target="#home"
    class="home-app-bar"

    color="#f2f4f8"
  >
    <router-link to="/">
      <v-toolbar-title class="logo">Cryptopoly</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="price">
      <button class="page-link">Price</button>
    </router-link>
    <template>
      <router-link to="login" v-if="!user">
        <button class="page-link">Login</button>
      </router-link>
      <div v-else>
        <button class="page-link" @click="logout">Logout</button>
      </div>
    </template>
    <v-btn outlined color="#c48c34" @click="startService">
      Start
    </v-btn>
    <v-snackbar v-model="fail" :timeout="2000" color="#FF5722">
      {{ errMsg }}
      <v-btn icon @click="fail = false">
        <v-icon dark>mdi-close-outline</v-icon>
      </v-btn>
    </v-snackbar>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
export default Vue.extend({
  name: "AppBar",
  data(): any {
    return {
      errMsg: "서버 에러",
      fail: false
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapMutations(["setUser"]),
    logout() {
      this.$http
        .get(this.$API + "/user/logout", { withCredentials: true })
        .then((res: { data: { success: boolean } }) => {
          if (res.data.success) {
            this.setUser(null);
          }
        })
        .catch((err: any) => {
          this.errMsg = "로그아웃에 실패했습니다.";
          this.fail = true;
        });
    },
    startService() {
      if (this.user) {
        this.$router.push("console");
      } else {
        this.$router.push("signup");
      }
    }
  }
});
</script>

<style scoped lang="scss">
.logo {
  font-family: "Comfortaa", sans-serif;
  color: #111111;
  text-decoration: none;
}
.page-link {
  font-family: "Noto Sans KR", "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #111111;
  text-decoration: none;
  margin-right: 20px;
}
button:hover {
  cursor: pointer;
  color: #f0bd66;
}
</style>

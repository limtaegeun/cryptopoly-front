<template>
  <div class="profile-view">
    <v-text-field
      label="email"
      v-model="user.email"
      readonly
      disabled
      color="#c48c34"
    ></v-text-field>
    <v-text-field label="username" v-model="username" color="#c48c34">
      <template v-slot:append>
        <v-fade-transition>
          <v-btn v-show="isEditUsername" text small color="#c48c34">Save</v-btn>
        </v-fade-transition>
      </template>
    </v-text-field>
    <div>
      <v-card max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Plan</div>
            <v-list-item-title class="headline mb-1">{{
              user.plan
            }}</v-list-item-title>
            <v-list-item-subtitle v-if="user.memberDueDate"
              >Expires on {{ user.memberDueDate }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn text disabled>Upgrade</v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
    <v-form ref="changePwdForm" v-model="valid" :lazy-validation="lazy">
      <v-text-field
        label="password"
        v-model="password"
        style="margin-top: 30px;"
        :append-icon="pwdShow ? 'mdi-eye' : 'mdi-eye-off'"
        :type="pwdShow ? 'text' : 'password'"
        @click:append="pwdShow = !pwdShow"
        color="#c48c34"
        required
      ></v-text-field>
      <v-text-field
        label="new password"
        v-model="newPassword"
        :hint="hint"
        persistent-hint
        :rules="pwdRules"
        :append-icon="pwdShow ? 'mdi-eye' : 'mdi-eye-off'"
        :type="pwdShow ? 'text' : 'password'"
        @click:append="pwdShow = !pwdShow"
        color="#c48c34"
        required
      ></v-text-field>
      <v-text-field
        label="confirm password"
        v-model="confirmPassword"
        color="#c48c34"
        :rules="confirmRules"
        :append-icon="pwdShow ? 'mdi-eye' : 'mdi-eye-off'"
        :type="pwdShow ? 'text' : 'password'"
        @click:append="pwdShow = !pwdShow"
        required
      ></v-text-field>
    </v-form>
    <v-row>
      <v-spacer> </v-spacer>
      <v-btn
        outlined
        @click="changePassword"
        :disabled="!valid"
        :loading="loading"
        >Change Password</v-btn
      >
    </v-row>
    <v-snackbar v-model="fail" :timeout="2000" color="#FF5722">
      {{ errMsg }}
      <v-btn icon @click="fail = false">
        <v-icon dark>mdi-close-outline</v-icon>
      </v-btn>
    </v-snackbar>
    <v-snackbar
        v-model="success"
        color="success"
    >
      {{ successMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="success = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Profile",
  data: () => ({
    valid: true,
    username: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
    pwdShow: false,
    pwdRules: [
      (v: string) => !!v || "Password is required",
      (v: string) =>
        /(?=.{9,})(?=.*?[^\w\s])(?=.*?[0-9])(?=.*?[A-Z]).*?[a-z].*/.test(v) ||
        "Use at least 9 characters in combination of uppercase, lowercase, numbers, and symbols"
    ],
    confirmRules: [(v: string) => !!v || "Confirm password is required"],
    hint:
      "Use at least 9 characters in combination of uppercase, lowercase, numbers, and symbols",
    fail: false,
    loading: false,
    lazy: false,
    errMsg: "failed",
    success: false,
    successMsg: 'You have changed your password.'
  }),
  beforeMount() {
    this.username = this.user.username;
  },
  computed: {
    ...mapState(["user"]),
    isEditUsername() {
      return this.user.username !== this.username;
    }
  },
  methods: {
    changeUsername() {
      //
    },
    changePassword() {
      (this.$refs.changePwdForm as HTMLFormElement).validate();
      if (!this.valid) {
        return;
      }
      if (this.newPassword !== this.confirmPassword) {
        this.errMsg = "Password and confirm password do not match.";
        this.fail = true;
        return;
      }
      let data = {
        pwd: this.password,
        newPwd: this.newPassword
      };
      this.loading = true;
      this.$http
        .post(this.$API + "/user/changepwd", data, { withCredentials: true })
        .then(res => {
          this.loading = false;
          this.success = true
          this.password = ''
          this.newPassword = ''
        })
        .catch(err => {
          this.loading = false;
          this.fail = true;
          this.errMsg = err.response.data.msg;
          // console.log(err.response);
        });
    }
  }
});
</script>

<style scoped lang="scss">
.profile-view {
  padding: 20px;
}
</style>

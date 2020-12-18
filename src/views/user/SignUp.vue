<template>
  <div class="sign-up-view">
    <v-container class="container">
      <v-row class="row-wrapper" align="center" justify="center">
        <v-card class="sign-up-card" raised tile :loading="loading">
          <v-card-text>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="e-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="name"
                :counter="20"
                :rules="nameRules"
                label="name"
                required
              ></v-text-field>
              <v-text-field
                v-model="pwd"
                :rules="pwdRules"
                label="Password"
                :append-icon="pwdShow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="pwdShow ? 'text' : 'password'"
                @click:append="pwdShow = !pwdShow"
                required
              ></v-text-field>
              <v-text-field
                v-model="confirmPwd"
                :rules="confirmRules"
                label="Confirm password"
                :append-icon="pwdShow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="pwdShow ? 'text' : 'password'"
                @click:append="pwdShow = !pwdShow"
                required
              ></v-text-field>
              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="submit"
            >
              submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-snackbar v-model="fail" :timeout="2000" color="#FF5722">
        {{ errMsg }}
        <v-btn icon @click="fail = false">
          <v-icon dark>mdi-close-outline</v-icon>
        </v-btn>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {User} from '@/declaration/interfaces'
import {mapMutations} from "vuex";

export default Vue.extend({
  name: "SignUp",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v: string) => !!v || "Name is required",
      (v: string) => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    pwd: "",
    pwdShow: false,
    pwdRules: [
      (v: string) => !!v || "Password is required",
      (v: string) =>
        /(?=.{9,})(?=.*?[^\w\s])(?=.*?[0-9])(?=.*?[A-Z]).*?[a-z].*/.test(v) ||
        "Use at least 9 characters in combination of uppercase, lowercase, numbers, and symbols"
    ],
    confirmPwd: "",
    confirmRules: [(v: string) => !!v || "Confirm password is required"],
    select: null,
    checkbox: false,
    lazy: false,
    loading: false,
    fail: false,
    errMsg: "Sign up failed"
  }),

  methods: {
    validate() {
      (this.$refs.form as HTMLFormElement).validate();
    },
    submit() {
      (this.$refs.form as HTMLFormElement).validate();
      if (!this.valid) {
        return;
      }
      if (this.pwd !== this.confirmPwd) {
        this.errMsg = "Password and confirm password do not match.";
        this.fail = true;
        return;
      }
      console.log("submit");
      this.loading = true;
      let data = {
        email: this.email,
        password: this.pwd,
        username: this.name
      };
      this.$http
        .post(this.$API + "/user/signup", data)
        .then((res: { data: {user: User} }) => {
          this.loading = false;
          this.$router.push({path: 'signupcomplete/' + data.username})
          // console.log(res)
          // console.log("SUCCESS!!");
        })
        .catch(err => {
          this.loading = false;
          try {
            this.errMsg = err.response.data.error.email.msg;
          } catch (e) {
            this.errMsg = "Sign up failed";
          }
          this.fail = true;
          // console.log("FAILURE!!");
        });
    },
    reset() {
      (this.$refs.form as HTMLFormElement).reset();
    },
    resetValidation() {
      (this.$refs.form as HTMLFormElement).resetValidation();
    }
  }
});
</script>

<style scoped lang="scss">
.sign-up-view {
  min-height: 400px;
  .container {
    height: 100%;
  }
  .row-wrapper {
    height: 100%;
  }
}
.sign-up-card {
  width: 100%;
  max-width: 400px;
}
</style>

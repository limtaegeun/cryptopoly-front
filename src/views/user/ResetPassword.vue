<template>
  <div class="reset-password-view">
    <v-container class="container">
      <v-row class="row-wrapper" align="center" justify="center">
        <v-card v-if="!isResetPwd" class="reset-password-card" raised tile :loading="loading">
          <v-card-title class="headline">Forget Password</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
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
                label="Comfirm password"
                :append-icon="pwdShow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="pwdShow ? 'text' : 'password'"
                @click:append="pwdShow = !pwdShow"
                required
              ></v-text-field>
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
              Reset
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else class="reset-password-card" raised tile>
          <v-card-title class="headline">Reset Your Password</v-card-title>
          <v-card-text>
            <p>
              Thank you! <br />
              You have reset your password.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined color="#c48c34" @click="goToLogin">Go to login</v-btn>
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

<script>
export default {
  name: "ResetPassword",
  data: () => ({
    isResetPwd : false,
    valid: true,
    pwd: "",
    pwdShow: false,
    pwdRules: [
      v => !!v || "Password is required",
      v =>
        /(?=.{9,})(?=.*?[^\w\s])(?=.*?[0-9])(?=.*?[A-Z]).*?[a-z].*/.test(v) ||
        "Use at least 9 characters in combination of uppercase, lowercase, numbers, and symbols"
    ],
    confirmPwd: "",
    confirmRules: [
      v => !!v || "Confirm password is required"
    ],
    lazy: false,
    loading: false,
    fail: false,
    errMsg: "Reset password failed"
  }),
  methods: {
    submit() {
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      }
      if (this.pwd !== this.confirmPwd) {
        this.errMsg = "Password and confirm password do not match.";
        this.fail = true;
        return;
      }
      let data = {
        newPwd: this.pwd,
        token: this.$route.query.token
      };
      this.$http
        .post(this.$API + "/forget/reset", data)
        .then(res => {
          this.loading = false;
          this.isResetPwd = true
          console.log(res);
          // location.href = "http://localhost:8080/login";
          console.log("success");
        })
        .catch(err => {
          this.loading = false;
          this.fail = true;
          this.errMsg = err.response.data.err
          console.log(err.response);
        });
    },
    goToLogin () {
      this.$router.push('login')
    }
  }
};
</script>

<style scoped lang="scss">
.reset-password-view {
  min-height: 400px;
  .container {
    height: 100%;
  }
  .row-wrapper {
    height: 100%;
  }
}
.reset-password-card {
  width: 100%;
  max-width: 400px;
}
</style>

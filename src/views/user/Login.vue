<template>
  <div class="login-view">
    <v-container class="container">
      <v-row class="row-wrapper" align="center" justify="center">
        <v-card class="login-card" raised tile :loading="loading">
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="e-mail"
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
            </v-form>
          </v-card-text>
          <v-card-actions>
            <a href="/forget" class="link">Forgot your password?</a>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              color="#f0bd66"
              class="mr-4 "
              outlined
              @click="login"
            >
              login
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

<script>
export default {
  name: "SignIn",
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    pwd: "",
    pwdShow: false,
    pwdRules: [v => !!v || "Password is required"],
    lazy: false,
    loading: false,
    fail: false,
    errMsg: "Login failed"
  }),
  methods: {
    login() {
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      }
      let data = {
        email: this.email,
        password: this.pwd
      };
      this.$http
        .post(this.$API + "/user/login", data)
        .then(res => {
          this.loading = false;
          console.log(res);
          location.href = "http://localhost:8080/console";
          console.log("success");
        })
        .catch(err => {
          this.loading = false;
          this.fail = true;
          console.log(err.response);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.login-view {
  min-height: 400px;
  .container {
    height: 100%;
  }
  .row-wrapper {
    height: 100%;
  }
}
.login-card {
  width: 100%;
  max-width: 400px;
  padding: 20px 10px;
}
.link {
  margin-left: 10px;
  color: #111111;
  font-size: 11pt;
}
</style>

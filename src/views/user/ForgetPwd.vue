<template>
  <div class="forget-password-view">
    <v-container class="container">
      <v-row class="row-wrapper" align="center" justify="center">
        <v-card v-if="!isSentEmail" class="forget-password-card" raised tile :loading="loading">
          <v-card-title class="headline">Forget Password</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="e-mail"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              color="#c48c34"
              class="mr-4"
              @click="submit"
              outlined
            >
              Email me a rest link
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else class="reset-password-card" raised tile>
          <v-card-title class="headline">Reset Your Password</v-card-title>
          <v-card-text>
            <p>
              Thank you! <br />
              If the email address exists in our system, an email with the reset
              link has been sent.<br>
              The authentication token is valid for 5 minutes.
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
  name: "FindPwd",
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    lazy: false,
    loading: false,
    fail: false,
    errMsg: "Sign up failed",
    isSentEmail : false
  }),
  methods: {
    submit() {
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      }
      let data = {
        email: this.email
      };
      this.loading = true;
      this.$http
        .post(this.$API + "/forget/auth", data)
        .then(res => {
          this.loading = false;
          console.log(res);
          this.isSentEmail = true
          console.log("success");
        })
        .catch(err => {
          this.loading = false;
          this.fail = true;
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
.forget-password-view {
  min-height: 400px;
  .container {
    height: 100%;
  }
  .row-wrapper {
    height: 100%;
  }
}
.forget-password-card {
  width: 100%;
  max-width: 400px;
}
</style>

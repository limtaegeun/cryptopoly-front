<template>
  <div class="profile-view">
    <v-text-field label="email" v-model="user.email" readonly></v-text-field>
    <v-text-field label="username" v-model="user.username"></v-text-field>
    <div>
      <v-card max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Plan</div>
            <v-list-item-title class="headline mb-1">Pro</v-list-item-title>
            <v-list-item-subtitle
              >Expires on {{ user.memberDueDate }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn text>Upgrade</v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
    <v-text-field
      label="password"
      v-model="password"
      style="margin-top: 30px;"
    ></v-text-field>
    <v-text-field
      label="new password"
      v-model="newPassword"
      :hint="hint"
      persistent-hint
    ></v-text-field>
    <v-text-field
      label="confirm password"
      v-model="confirmPassword"
    ></v-text-field>
    <v-row>
      <v-spacer> </v-spacer>
      <v-btn outlined>Change Password</v-btn>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Profile",
  data: () => ({
    password: "",
    newPassword: "",
    confirmPassword: "",
    hint:
      "Use at least 9 characters in combination of uppercase, lowercase, numbers, and symbols"
  }),
  computed: {
    ...mapState(["user"])
  }
});
</script>

<style scoped lang="scss">
.profile-view {
  padding: 20px;
}
</style>

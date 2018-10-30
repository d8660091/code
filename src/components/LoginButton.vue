<template>
  <div>
   <v-btn
      flat
      :loading="loading"
      :disabled="loading"
      @click.native="loginOrLogoutDialog">
     {{ this.user ? this.user.email : "Login" }}
   </v-btn>
   <v-layout row justify-center>
     <v-dialog v-model="logoutDialog" persistent max-width="290">
       <!-- <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn> -->
       <v-card>
         <v-card-title class="headline">Are you sure to logout?</v-card-title>
         <v-card-text></v-card-text>
         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn color="green darken-1" flat @click.native="logoutDialog = false">Cancel</v-btn>
           <v-btn color="green darken-1" flat @click.native="logout">Logout</v-btn>
         </v-card-actions>
       </v-card>
     </v-dialog>
   </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import firebaseApp, { googleProvider } from "@/firebase";

export default Vue.extend({
  name: "LoginButton",
  data: function() {
    return {
      loading: false,
      user: null as any,
      logoutDialog: false
    };
  },
  methods: {
    logout() {
      firebaseApp.auth().signOut();
      this.logoutDialog = false;
    },
    loginOrLogoutDialog() {
      if (this.user) {
        this.logoutDialog = true;
      } else {
        this.loading = true;
        firebaseApp
          .auth()
          .signInWithPopup(googleProvider)
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    }
  },
  mounted: function() {
    firebaseApp.auth().onIdTokenChanged(() => {
      this.user = firebaseApp.auth().currentUser;
    });
  }
});
</script>

<style lang="scss" scoped>
</style>

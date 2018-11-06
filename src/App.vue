<template>
  <v-app>
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>code</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/next-week">
          <v-list-tile-action>
            <v-icon>fast_forward</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Next Week's Problems</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/history">
          <v-list-tile-action>
            <v-icon>history</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>History Problems</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="https://chrome.google.com/webstore/detail/code/bfldfinkmdhoacdcddbabbjnbcclplci" target="_blank">
          <v-list-tile-action>
            <v-icon>extension</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Chrome Extension</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Code Week {{ week }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <login-button></login-button>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import LoginButton from "@/components/LoginButton.vue";
import moment from "moment";

export default {
  data: function() {
    return {
      drawer: null,
      week: moment().diff(moment("2018-10-29"), "weeks") + 1
    };
  },
  components: {
    LoginButton
  }
};
</script>

<style lang="scss">
pre {
  overflow: auto;
}
</style>

<template>
  <v-layout column>
    <v-layout justify-start align-center>
      <v-avatar
        :size="40"
        class="mr-2"
        color="grey lighten-4">
        <img :src="submission.author.photoURL" alt="avatar">
      </v-avatar>
      <v-layout column align-start>
        <h4>
          {{submission.author.displayName}}
        </h4>
        <span>
          {{submission.createdAt | fromNow}}
        </span>
      </v-layout>
    </v-layout>
    <v-flex xs12 class="text-md-left my-2">
      <v-chip color="primary" text-color="white">
        <v-icon class="mr-1">code</v-icon>
        {{submission.language}}
      </v-chip>
      <v-chip color="primary" text-color="white">
        <v-icon class="mr-1">timer</v-icon>
        {{submission.runtime}}
      </v-chip>
      <v-tooltip bottom>
        <v-chip color="primary" text-color="white" slot="activator">
          <v-icon class="mr-1">fas fa-chart-area</v-icon>
          {{submission.beatsPercentage}}
        </v-chip>
        <span>Beats {{submission.beatsPercentage}} of {{submission.language}} submissions</span>
      </v-tooltip>
    </v-flex>
    <v-flex xs12 class="mt-2">
      <pre class="code text-md-left">{{submission.code | printCode}}</pre>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import hljs from "highlight.js";

export default Vue.extend({
  props: ["submission"],
  filters: {
    fromNow: function(createdAt: any) {
      return moment.unix(createdAt.seconds).fromNow();
    },
    printCode: function(jsonString: string) {
      try {
        return JSON.parse(jsonString);
      } catch (e) {
        return jsonString;
      }
    }
  },
  mounted: function() {
    hljs.highlightBlock(this.$el.querySelector(".code") as any);
  }
});
</script>

<style lang="scss" scoped>
.code {
  width: 100%;
  padding: 1em;
}
</style>

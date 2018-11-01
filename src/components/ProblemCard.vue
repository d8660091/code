<template>
  <v-card>
    <v-card-title>
      <h3>{{problem.title}}</h3>
    </v-card-title>
    <v-card-text class="px-3 text-md-left">
      <div v-html="problem.description">
      </div>
    </v-card-text>
    <v-card-actions>
      <v-layout justify-end>
        <v-btn flat :href="problem.url" target="_blank">View</v-btn>
        <v-btn flat @click="isSubmissionsShown = !isSubmissionsShown">Submissions ({{problem.submissions.length}})</v-btn>
      </v-layout>
    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text v-show="isSubmissionsShown">
        <v-divider class="mb-3"></v-divider>
        <v-layout column v-for="submission in problem.submissions" :key="submission.author.email">
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
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import hljs from "highlight.js";

export default Vue.extend({
  props: ["problem"],
  data: function() {
    return {
      isSubmissionsShown: false
    };
  },
  filters: {
    fromNow: function(createdAt: any) {
      return moment.unix(createdAt.seconds).fromNow();
    },
    printCode: function(jsonString: string) {
      try {
        console.log(JSON.parse(jsonString));
        return JSON.parse(jsonString);
      } catch (e) {
        return jsonString;
      }
    }
  },
  methods: {},
  mounted: function() {
    const items = this.$el.querySelectorAll(".code");
    items.forEach(item => {
      hljs.highlightBlock(item);
    });
  }
});
</script>

<style lang="scss" scoped>
.code {
  width: 100%;
  padding: 1em;
}
</style>

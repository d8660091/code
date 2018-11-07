<template>
  <v-card class="mb-3">
    <v-progress-linear :value="submitted ? 100 : 0"></v-progress-linear>
    <v-card-title class="pt-0">
      <v-layout justify-space-between align-center>
        <h3>{{problem.title}}</h3>
        <v-chip :color="colors[problem.difficulty]" text-color="white">{{problem.difficulty}}</v-chip>
      </v-layout>
    </v-card-title>
    <v-card-text class="px-3 text-xs-left">
      <div v-html="problem.description"></div>
    </v-card-text>
    <v-card-actions>
      <v-layout justify-end>
        <v-btn flat :href="problem.url" target="_blank">View</v-btn>
        <v-btn
          v-if="!hideSubmissions"
          flat
          @click="isSubmissionsShown = !isSubmissionsShown"
        >Submissions ({{problem.submissions ? Object.values(problem.submissions).length : 0}})</v-btn>
      </v-layout>
    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text v-show="isSubmissionsShown">
        <div v-for="(submission, _, idx) in problem.submissions" :key="submission.author.email">
          <v-divider :class="idx === 0 ? 'mb-3' : 'my-3'"></v-divider>
          <submission column :submission="submission"></submission>
        </div>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Submission from "@/components/Submission.vue";
import firebaseApp from "@/firebase";

export default Vue.extend({
  props: ["problem", "hideSubmissions"],
  data: function() {
    return {
      isSubmissionsShown: false,
      user: null as any,
      colors: {
        Easy: "green",
        Medium: "orange",
        Hard: "red"
      }
    };
  },
  computed: {
    submitted: function() {
      return (
        this.user &&
        this.problem.submissions &&
        this.problem.submissions[this.user.uid]
      );
    }
  },
  components: {
    Submission
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

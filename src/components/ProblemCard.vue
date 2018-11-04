<template>
  <v-card class="mb-3">
    <v-card-title>
      <h3>{{problem.title}}</h3>
    </v-card-title>
    <v-card-text class="px-3 text-xs-left">
      <div v-html="problem.description">
      </div>
    </v-card-text>
    <v-card-actions>
      <v-layout justify-end>
        <v-btn flat :href="problem.url" target="_blank">View</v-btn>
        <v-btn flat @click="isSubmissionsShown = !isSubmissionsShown">Submissions ({{problem.submissions ? Object.values(problem.submissions).length : 0}})</v-btn>
      </v-layout>
    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text v-show="isSubmissionsShown">
        <v-divider class="mb-3"></v-divider>
        <submission column v-for="submission in problem.submissions" :key="submission.author.email" :submission="submission">
        </submission>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Submission from "@/components/Submission.vue";

export default Vue.extend({
  props: ["problem"],
  data: function() {
    return {
      isSubmissionsShown: false
    };
  },
  components: {
    Submission
  }
});
</script>

<style lang="scss" scoped>
</style>

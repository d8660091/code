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
        <v-btn flat>Submit</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["problem"],
  methods: {}
});
</script>

<style lang="scss" scoped>
</style>

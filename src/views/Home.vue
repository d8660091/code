<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <h3>Search Insert Position (Easy)</h3>
        </v-card-title>
        <v-card-text class="px-3 text-md-left">
          <p>
            Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
          </p>
          <p>
            You may assume no duplicates in the array.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-layout justify-end>
            <v-btn flat href="https://leetcode.com/problems/search-insert-position/description/" target="_blank">View</v-btn>
            <v-btn flat>Submit</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "home"
});
</script>

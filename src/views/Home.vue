<template>
  <v-layout>
    <v-flex xs12>
      <problem-card-list></problem-card-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import ProblemCardList from "@/components/ProblemCardList.vue";

export default Vue.extend({
  components: {
    ProblemCardList
  }
});
</script>

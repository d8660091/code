<template>
  <v-layout>
    <v-flex xs12>
      <problem-card-list :publishAt="publishAt" :hideSubmissions="true"></problem-card-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import ProblemCardList from "@/components/ProblemCardList.vue";
import moment from "moment";

export default Vue.extend({
  data: function() {
    const publishAt = (moment().day() == 0
      ? moment().day(1)
      : moment().day(8)
    ).toDate();
    publishAt.setHours(0, 0, 0, 0);
    return {
      publishAt
    };
  },
  components: {
    ProblemCardList
  }
});
</script>

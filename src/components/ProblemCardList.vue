<template>
  <div>
    <problem-card v-for="problem in problems" :problem="problem" :key="problem.createdAt.seconds" :hideSubmissions="hideSubmissions"></problem-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProblemCard from "@/components/ProblemCard.vue";
import { firestore } from "@/firebase";

export default Vue.extend({
  props: ["publishAt", "hideSubmissions", "operator"],
  data: function() {
    return {
      problems: [] as any[],
      unsubscribe: null as any
    };
  },
  mounted: function() {
    this.unsubscribe = firestore
      .collection("problems")
      .where("publishAt", this.operator || "==", this.publishAt)
      .onSnapshot((querySnapshot: any) => {
        const problems: any[] = [];
        querySnapshot.forEach((doc: any) => {
          problems.push(doc.data());
        });
        this.problems = problems;
      });
  },
  destroyed: function() {
    this.unsubscribe && this.unsubscribe();
  },
  components: {
    ProblemCard
  }
});
</script>

<style lang="scss" scoped>
</style>

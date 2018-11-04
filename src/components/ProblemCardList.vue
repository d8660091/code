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
      problems: [] as any[]
    };
  },
  mounted: function() {
    firestore
      .collection("problems")
      .where("publishAt", this.operator || "==", this.publishAt)
      .get()
      .then((querySnapshot: any) => {
        querySnapshot.forEach((doc: any) => {
          this.problems.push(doc.data());
        });
      })
      .catch(console.log);
  },
  components: {
    ProblemCard
  }
});
</script>

<style lang="scss" scoped>
</style>

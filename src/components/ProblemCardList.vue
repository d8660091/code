<template>
  <div>
    <problem-card v-for="problem in problems" :problem="problem" :key="problem.createdAt.seconds"></problem-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProblemCard from "@/components/ProblemCard.vue";
import { firestore } from "@/firebase";

export default Vue.extend({
  data: function() {
    return {
      problems: [] as any[]
    };
  },
  mounted: function() {
    firestore
      .collection("problems")
      .where("createdAt", ">=", new Date("10/29/2018"))
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

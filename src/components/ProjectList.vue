<!-- ProjectList.vue -->
<template>
  <div class="max-h-56 overflow-y-auto">
    <ProjectListCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<script>
import ProjectListCard from "@/components/ProjectListCard.vue";

export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProjectListCard,
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>

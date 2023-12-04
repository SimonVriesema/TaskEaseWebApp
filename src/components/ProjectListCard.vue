<!-- ProjectCard.vue -->
<template>
  <div class="bg-white rounded-lg mb-3 p-2">
    <p class="font-paragraphStyle text-md">{{ project.name }}</p>
    <p class="font-paragraphStyle text-sm text-gray-500">{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>

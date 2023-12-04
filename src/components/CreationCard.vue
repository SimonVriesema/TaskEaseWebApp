<template>
  <div class="flex flex-row rounded-2xl h-1/2 bg-white p-5">
    <div class="flex flex-col w-1/2">
      <p class="font-paragraphStyle text-2xl font-bold">
        {{ amount }}
      </p>
      <p class="font-paragraphStyle text-sm text-gray-500">
        {{ text }}
      </p>
    </div>
    <div class="w-1/2 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreationCard",
  props: {
    amount: {
      type: [Number, String],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>

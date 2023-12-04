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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClockCard",
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

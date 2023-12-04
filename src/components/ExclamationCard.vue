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
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExclamationCard",
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

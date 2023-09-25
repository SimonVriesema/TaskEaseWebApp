<template>
  <div>
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 px-4 mb-4">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
        <input type="text" id="title"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5"
               v-model="title"
               @change="sendDataToParent"
               placeholder="Enter title">
      </div>
      <div class="w-full md:w-1/2 px-4 mb-4">
        <label for="priority" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
          priority</label>
        <select id="priority"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5"
                v-model="priority"
                @change="sendDataToParent"
        >
          <option value="0">Low</option>
          <option value="1">Medium</option>
          <option value="2">High</option>
        </select>
      </div>
      <div class="w-full px-4 mb-4">
        <label for="description"
               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea id="description"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 h-16"
                  v-model="description"
                  placeholder="Enter description"
                  @change="sendDataToParent"
        ></textarea>
      </div>
      <div class="w-full md:w-1/2 px-4 mb-4">
        <label for="labels" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Labels/Tags
          {{ this.labels.length }}/5</label>
        <input type="text" id="labels"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5"
               v-model="newLabel"
               placeholder="Enter labels/tags"
               @change="sendDataToParent"
               @keyup.enter="addNewLabel"
        >
        <div class="overflow-x-auto mt-1">
          <div class="whitespace-nowrap">
            <a
                v-for="(label, index) in labels"
                :key="index"
                class="inline-flex items-center p-2.5 bg-gray-100 border border-gray-200 border-1 rounded-full mr-2"
            >
              <span>{{ label }}</span>
              <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-4 mb-4">
        <label for="priority" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
          status</label>
        <select id="priority"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5"
                v-model="status"
                @change="sendDataToParent"
        >
            <option value="0">Planning</option>
            <option value="1">Active</option>
            <option value="2">On Hold</option>
            <option value="3">Completed</option>
            <option value="4">Canceled</option>
            <option value="5">Pending Approval</option>
            <option value="6">In Review</option>
            <option value="7">Delayed</option>
            <option value="8">In Progress</option>
            <option value="9">Under Maintenance</option>
            <option value="10">Not Started</option>
            <option value="11">Reopened</option>
            <option value="12">Blocked</option>
        </select>
      </div>
    </div>


  </div>
</template>
<script>
export default {
  name: "ProjectCreationForm",
  data() {
    return {
      title: null,
      priority: null,
      description: null,
      labels: [],
      dueDate: null,
      newLabel: null,
      status: null,
    }
  },
  methods: {
    addNewLabel() {
      // Check if the newLabel is not empty and is not already in the labels array
      const isLabelValid = this.newLabel && !this.labels.includes(this.newLabel.trim());
      // Check if the newLabel is not empty
      const isNotEmpty = this.newLabel.trim() !== '';
      // Check if the labels array is below the maximum limit
      const isBelowMaxLimit = this.labels.length < 5;

      // Check if the newLabel is valid, not empty, and the labels array is below the maximum limit
      if (isLabelValid && isNotEmpty && isBelowMaxLimit) {
        // Add the newLabel to the labels array
        this.labels.push(this.newLabel.trim());
        // Clear the input field
        this.newLabel = ''; // Clear the input field
      }
    },
    sendDataToParent() {
      this.$emit('data-updated', {
        title: this.title,
        priority: this.priority,
        description: this.description,
        labels: this.labels,
        dueDate: this.dueDate,
        status: this.status,
      });
    },
    validateDate(inputDate) {
      // Attempt to convert the inputDate to a JavaScript Date object
      const dateToCheck = new Date(inputDate);
      // Check if the conversion resulted in an invalid Date object (NaN)
      if (isNaN(dateToCheck)) {
        // InputDate is not a valid date
        alert('Invalid date format. Please enter a valid date.');
        // Return false to indicate that the date is invalid
        return false;
      }
      // InputDate is a valid date
      const currentDate = new Date();
      // Check if the inputDate is greater than the currentDate
      return dateToCheck > currentDate;
    }
  }
}
</script>
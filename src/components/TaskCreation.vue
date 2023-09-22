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
        <label for="dueDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due
          Date</label>
        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </div>
          <input type="text" id="dueDate"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full pl-10"
                 placeholder="01/01/1970"
                 v-model.lazy="dueDate"
                 @change="sendDataToParent"
          >
        </div>
        <p v-if="validateDate(this.dueDate)">Please select a valid datee</p>
      </div>
    </div>


  </div>
</template>
<script>
export default {
  name: "TaskCreationForm",
  data() {
    return {
      title: null,
      priority: null,
      description: null,
      labels: [],
      assignees: [],
      dueDate: null,
      project: null,
      assigneeEmails: [
        {name: 'Assignee 1', email: 'assigneeEmails1@example.com'},
        {name: 'Assignee 2', email: 'assigneeEmails2@gmail.com'},
        {name: 'Assignee 3', email: 'assigneeEmails3@outlook.com'},
        {name: 'Assignee 4', email: 'assigneeEmails4@yahoo.com'},
        {name: 'Assignee 5', email: 'assigneeEmails5@emailprovider.com'}
      ],
      newLabel: null,
    }
  },
  methods: {
    addNewLabel() {
      const isLabelValid = this.newLabel && !this.labels.includes(this.newLabel.trim());
      const isNotEmpty = this.newLabel.trim() !== '';
      const isBelowMaxLimit = this.labels.length < 5;

      if (isLabelValid && isNotEmpty && isBelowMaxLimit) {
        this.labels.push(this.newLabel.trim());
        this.newLabel = ''; // Clear the input field
      }
    },
    sendDataToParent() {
      this.$emit('data-updated', {
        title: this.title,
        priority: this.priority,
        description: this.description,
        labels: this.labels,
        assignee: this.assignee,
        dueDate: this.dueDate,
        project: this.project
      });
    },
    validateDate(inputDate) {
      // Attempt to convert the inputDate to a JavaScript Date object
      const dateToCheck = new Date(inputDate);
      // Check if the conversion resulted in an invalid Date object (NaN)
      if (isNaN(dateToCheck)) {
        // InputDate is not a valid date
        alert('Invalid date format. Please enter a valid date.');
        return false; // Return false to indicate validation failure
      }
      // Get the current date
      const currentDate = new Date();
      // Compare the input date with the current date
      if (dateToCheck > currentDate) {
        // The input date is in the future
        return true;
      } else {
        // The input date is not in the future
        return false;
      }
    }
  }
}
</script>
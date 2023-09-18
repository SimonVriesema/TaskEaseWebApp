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
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
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
        <label for="labels" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Labels/Tags</label>
        <input type="text" id="labels"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5"
               v-model="labels"
               placeholder="Enter labels/tags"
               @change="sendDataToParent"
        >
      </div>
      <div class="w-full md:w-1/2 px-4 mb-4">
        <label for="simple-search"
               class="block mb-2 text-sm font-medium text-gray-900">Assignee</label>

        <form class="flex items-center">
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke-width="1.5" stroke="currentColor"
                   class="w-6 h-6 text-gray-500 dark:text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <input type="text" id="simple-search"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondaryhover block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-500 dark:focus:border-secondary-500"
                   placeholder="Search email"
                   v-model="assignee"
                   @change="sendDataToParent"
                   required>
          </div>
          <button type="submit"
                  class="p-2.5 ml-2 text-sm font-medium text-white bg-secondary rounded-lg border border-secondary hover:bg-secondaryhover focus:ring-4 focus:outline-none focus:ring-secondary-300 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </form>

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
                 v-model="dueDate"
                 @change="sendDataToParent"
          >
        </div>
      </div>

      <div class="w-full md:w-1/2 px-4 mb-4">
        <label for="simple-search"
               class="block mb-2 text-sm font-medium text-gray-900">Project</label>

        <form class="flex items-center">
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6 text-gray-500 dark:text-gray-400">

                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"/>
              </svg>

            </div>
            <input type="text" id="simple-search"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondaryhover block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-500 dark:focus:border-secondary-500"
                   placeholder="Search project"
                   v-model="assignee"
                   @change="sendDataToParent"
                   required>
          </div>
          <button type="submit"
                  class="p-2.5 ml-2 text-sm font-medium text-white bg-secondary rounded-lg border border-secondary hover:bg-secondaryhover focus:ring-4 focus:outline-none focus:ring-secondary-300 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </form>

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
      assignee: null,
      dueDate: null,
      project: null
    }
  },
  methods: {
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
    }
  }
}
</script>
<template>
  <button
      @click="openModal"
      class="hover:bg-secondaryhover text-white items-center rounded-full justify-center px-3 py-3 bg-secondary"
  >
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
    >
      <path
          fill-rule="evenodd"
          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
          clip-rule="evenodd"
      />
    </svg>
    <!-- Your button content -->
  </button>

  <!-- Modal content -->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                       leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"/>
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
                           enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                           enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                           leave-from="opacity-100 translate-y-0 sm:scale-100"
                           leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                      class="mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-orange-200 sm:mx-0 sm:h-12 sm:w-12">
                    <PencilSquareIcon class="h-7 w-7 text-secondaryhover" aria-hidden="true"/>
                  </div>
                  <div class="font-paragraphStyle mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3"
                                 class="text-primaryText font-headingStyle text-lg text-base font-semibold leading-6 mb-2 text-gray-900">
                      Create {{ this.selectedCreation == 1 ? 'Task' : 'Project'}}
                    </DialogTitle>
                    <div>
                      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                        what you want to create</label>
                      <select id="countries"
                              class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
                              v-model="selectedCreation">
                        <option value=1>Task</option>
                        <option value=2>Project</option>
                      </select>
                      <div v-if="selectedCreation == 1">
                        <TaskCreationForm @data-updated="handleTaskDataUpdate"></TaskCreationForm>
                      </div>
                      <div v-else-if="selectedCreation == 2">
                        <ProjectCreationForm @data-updated="handleProjectDataUpdate"></ProjectCreationForm>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 text-md sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    @click="open = false, handleButton()"
                    :class="{
    'text-white bg-secondary hover:bg-secondaryhover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800': !this.isDisabled,
    'text-gray-500 bg-gray-200 cursor-not-allowed opacity-50 rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600': this.isDisabled
  }"
                    type="submit"
                    class="text-white bg-secondary hover:bg-secondaryhover focus:ring-4 focus:outline-none
                  focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center
                  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit {{ 1 == this.selectedCreation ? 'Task' : 'Project' }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {ref} from 'vue';
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue';
import {PencilSquareIcon} from '@heroicons/vue/24/outline';
import TaskCreationForm from "@/components/TaskCreation.vue";
import ProjectCreationForm from "@/components/ProjectCreation.vue";

export default {
  name: "CreationModal",
  data() {
    return {
      open: ref(false),
      selectedCreation: 1,
      taskData: null,
      projectData: null,
      isDisabled: true,
    };
  },
  components: {
    ProjectCreationForm,
    TaskCreationForm,
    Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, PencilSquareIcon
  },
  methods: {
    openModal() {
      this.open = true;
    },
    handleTaskDataUpdate(data) {
      this.taskData = data;
      this.isDisabled = !(this.taskData.title !== null &&
          this.taskData.priority !== null &&
          this.taskData.description !== null &&
          this.taskData.labels !== null &&
          this.taskData.dueDate !== null);
    },
    handleProjectDataUpdate(data) {
      this.projectData = data;
      this.isDisabled = !(this.projectData.title !== null &&
          this.projectData.priority !== null &&
          this.projectData.description !== null &&
          this.projectData.labels !== null &&
          this.taskData.dueDate !== null);
    },
    handleButton() {
      //TODO: Create the POST route to store the Tasks/Projects in the database
      //TODO: Add more button functionality
      alert("Button Click!")
    }
  },
};
</script>



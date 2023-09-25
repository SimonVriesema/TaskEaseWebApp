<template>
  <div class="px-6 py-5 h-full">
    <div class="text-left flex justify-between">
      <h1 class="font-headingStyle text-xl">Tasks</h1>
      <a
        v-show="tasks.length > 1"
        href="#"
        class="py-1 text-secondary font-paragraphStyle text-sm"
        >View All</a
      >
    </div>
    <!-- Task List -->
    <div class="flex justify-center items-center h-60" v-if="tasks.length < 1">
      <div>
        <p class="text-center text-sm text-gray-500 font-paragraphStyle">
          No tasks
        </p>
      </div>
    </div>
    <div v-else-if="tasks.length > 0" class="mt-3 space-y-3">
      <div
        v-for="task in tasks"
        :key="task.name"
        class="font-paragraphStyle text-primaryText"
      >
        <div class="flex items-left">
          <div class="flex justify-center h-full w-1/5">
            <svg
              class="w-7 h-7 m-1 bg-red-500 text-secondary rounded-full"
            ></svg>
          </div>
          <div class="w-5/6 text-left">
            <h1>{{ task.name }}</h1>
            <p class="text-sm text-gray-500">Due on: {{ task.dueDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  components: {},
  data() {
    return {
      imagePath: require("@/assets/images/svg/MeditatingDoodle.svg"),
      tasks: [
        // {
        //   name: "Task 1",
        //   description: "Description 1",
        //   dueDate: "2021-10-01",
        //   completed: false,
        // },
        // {
        //   name: "Task 2",
        //   description: "Description 1",
        //   dueDate: "2021-10-01",
        //   completed: false,
        // },
        // {
        //   name: "Task 3",
        //   description: "Description 1",
        //   dueDate: "2021-10-01",
        //   completed: false,
        // },
        // {
        //   name: "Task 4",
        //   description: "Description 1",
        //   dueDate: "2021-10-01",
        //   completed: false,
        // },
      ],
    };
  },
};
</script>

<style scoped></style>

<template>
  <div class="bg-gray-50">
    <SideBar />
    <!-- Main content area -->
    <div class="w-full h-screen ml-20 p-8 px-16">
      <div class="rounded-lg">
        <h1
          class="text-left mt-1 text-xl font-semibold text-primaryText font-headingStyle"
        >
          Home
        </h1>
        <p
          class="mt-2 text-left font-semibold font-paragraphStyle text-secondary"
        >
          {{ getDay() }},
          <a class="font-normal text-grayish">{{ getDate() }}</a>
        </p>
      </div>
      <div class="flex mt-5 space-x-8">
        <div
          class="flex font-paragraphStyle text-primaryText rounded-lg w-3/5 h-1/4 bg-lightblue bg-diagonal-lines"
        >
          <div class="w-1/2">
            <img
              :src="imagePath1"
              alt="Coffee Doodle"
              class="w-2/4 m-auto mt-3"
            />
          </div>
          <div class="w-2/4 text-left my-7 text-primaryText">
            <h1 class="text-2xl font-normal">
              Hi,
              <span class="text-secondary font-extrabold">{{
                this.username
              }}</span>
            </h1>
            <h2>
              You have
              <span class="text-secondary font-extrabold">{{
                this.amountOfTasks
              }}</span>
              important tasks to complete today. Stay focused and make progress!
            </h2>
          </div>
        </div>
        <div class="bg-blue-500 w-1/5 rounded-lg">
          <h1>Test</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar.vue";

export default {
  name: "HomePage",
  data() {
    return {
      imagePath1: require("@/assets/images/svg/PlantDoodle.svg"),
      date: new Date(),
      username: "Simon Vriesema",
      amountOfTasks: 3,
    };
  },
  components: {
    SideBar,
  },
  methods: {
    getDate() {
      const day = this.date.getDate();
      const month = this.date.toLocaleString("default", { month: "long" });
      const year = this.date.getFullYear();
      const fullDate = `${day} ${month} ${year}`;
      return fullDate;
    },
    getDay() {
      const dayOfWeek = this.date.toLocaleString("default", {
        weekday: "long",
      });
      return dayOfWeek;
    },
  },
};
</script>

<style scoped></style>

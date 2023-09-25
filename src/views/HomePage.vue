<template>
  <div class="flex bg-lightblue w-screen h-screen">
    <SideBar/>
    <!-- Main content area -->
    <div class="w-5/6 font-paragraphStyle h-screen text-primaryText text-left">
      <div class="h-screen ml-32 space-y-7 mr-7">
        <div class="my-8">
          <h1 class="font-headingStyle text-2xl">
            Home Page
          </h1>
          <h2 class="text-grayish">
            <span class="text-secondary font-bold">{{ getDay() }}</span>,
            {{ getDate() }},
          </h2>
        </div>
        <div class="h-1/4 rounded-2xl flex flex-row w-full bg-secondary text-white p-2">
          <div class="w-1/2">
          </div>
          <div class="w-1/2">
            <h1 class="text-lg">Hi, <span class="font-bold">{{ this.username }}</span></h1>
            <p>
              Today, you have <span class="font-bold text-darkerShade">{{ this.amountOfTasks }}</span> tasks to
              complete,
              <span class="font-bold text-darkerShade">{{ this.amountOfTasks }}</span> tasks with upcoming
              deadlines, and you're currently working on <span class="font-bold text-darkerShade">{{
                this.amountOfTasks
              }}</span>
              projects. Stay organized and stay on top of your tasks and projects with our Task Manager Dashboard.</p>
          </div>
        </div>
        <div class="h-1/4 ">
          <div class="flex flex-row space-x-7 h-full">
            <div class="w-1/2 bg-white rounded-2xl">
              <p class="font-paragraphStyle text-lg p-2">
                Amount of tasks per day
              </p>
              <div>
                <LineChart class="p-3" :chart-data="chartData" :chart-options="chartOptions" :data="this.chartData"/>
              </div>
            </div>
            <div class="w-1/2 flex flex-row space-x-7">
              <div class="bg-primaryText w-1/2 rounded-2xl p-2 flex flex-col justify-center items-center">
                <p class="font-paragraphStyle text-lg text-white">
                  Progress
                </p>
                <div>
                  <DonutChart class="p-5" :chart-data="chartData" :chart-options="chartOptions"/>
                </div>
              </div>
              <div class="w-1/2 flex flex-col space-y-7 ">
                <div class="rounded-2xl h-1/2 bg-white p-5">
                  <p class="font-paragraphStyle text-2xl font-bold">
                    {{ this.amountOfTasks }}
                  </p>
                  <p class="font-paragraphStyle text-sm text-gray-500">
                    Overdue Tasks
                  </p>
                </div>
                <div class="rounded-2xl h-1/2 bg-white p-5">
                  <p class="font-paragraphStyle text-2xl font-bold">
                    {{ this.amountOfTasks }}
                  </p>
                  <p class="font-paragraphStyle text-sm text-gray-500">
                    Tasks Created
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-1/4">
          <div class="h-full flex flex-row space-x-7">
            <div class="w-1/2 bg-white rounded-2xl p-2">
              <p class="font-paragraphStyle text-lg">
                Task Distribution
              </p>
            </div>
            <div class="w-1/2 bg-white rounded-2xl p-2">
              <p class="font-paragraphStyle text-lg">
                Your Tasks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProfileSideBar/>
  </div>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar.vue";
import ProfileSideBar from "@/components/ProfileSideBar.vue";
import LineChart from "@/components/charts/Line.vue";
import DonutChart from "@/components/charts/Donut.vue";

export default {
  name: "HomePage",
  data() {
    return {
      imagePath1: require("@/assets/images/svg/PlantDoodle.svg"),
      date: new Date(),
      username: "Simon Vriesema",
      amountOfTasks: 3,
      chartData: {
        labels: this.getRecentWeekDays(),
        datasets: [
          //TODO: Add data from backend
          {
            label: "Activity",
            data: [3, 1, 2, 3, 2, 4, 6]
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
      amountOfOverdueTasks: 3,
    };
  },
  components: {
    DonutChart,
    LineChart,
    SideBar,
    ProfileSideBar,
  },
  methods: {
    getDate() {
      const day = this.date.getDate();
      const month = this.date.toLocaleString("default", {month: "long"});
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
    getRecentWeekDays() {
      // Get the names of the past 3 days, today and the next 3 days, but for today, call it 'Today'
      const days = [];
      for (let i = -3; i <= 3; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        if (i === 0) {
          days.push("Today");
        } else {
          days.push(date.toLocaleString("default", {weekday: "short"}));
        }
      }
      return days;
    },
  },
};
</script>

<style scoped></style>

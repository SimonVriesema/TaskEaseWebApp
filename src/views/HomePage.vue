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
            {{ getDate() }}
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
        <div class="h-1/4">
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
                <ExclamationCard :amount="amountOfTasks" text="Overdue Tasks"/>
                <CreationCard :amount="amountOfTasks" text="Tasks Created"/>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-row space-x-7">
          <div class="w-1/2 rounded-2xl">
            <p class="font-paragraphStyle text-lg">
              Recent projects
            </p>
            <div class="max-h-56 overflow-y-auto">
              <div class="bg-white rounded-lg mb-3 p-2 " v-for="project in projects" :key="project.id">
                <p class="font-paragraphStyle text-md">{{ project.name }}</p>
                <p class="font-paragraphStyle text-sm text-gray-500">{{ project.description }}</p>
              </div>
            </div>
          </div>
          <div class="w-1/2 flex flex-row space-x-7">
            <div class="bg-white w-1/2 rounded-2xl p-6 flex flex-col justify-center items-center">
              <p class="font-paragraphStyle text-lg">
                Task Distribution
              </p>
              <PieChart class="p-5" :chart-data="chartData" :chart-options="chartOptions"/>
            </div>
            <div class="w-1/2 flex flex-col space-y-7 ">
              <ClockCard :amount="amountOfTasks" text="Upcoming Tasks"/>
              <CompletedCard :amount="amountOfTasks" text="Tasks Completed"/>
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
import PieChart from "@/components/charts/Pie.vue";
import ExclamationCard from "@/components/ExclamationCard.vue";
import CreationCard from "@/components/CreationCard.vue";
import ClockCard from "@/components/ClockCard.vue";
import CompletedCard from "@/components/CompletedCard.vue";

export default {
  name: "HomePage",
  data() {
    return {
      imagePath1: require("@/assets/images/svg/PlantDoodle.svg"),
      date: new Date(),
      username: "Simon Vriesema",
      amountOfTasks: 3,
      ExclamationCircleIcon: {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        class: "w-6 h-6",
      },
      projects: [
        {id: 1, name: "Project 1", description: "Description for Project 1"},
        {id: 2, name: "Project 2", description: "Description for Project 2"},
        {id: 2, name: "Project 3", description: "Description for Project 3"},
        {id: 2, name: "Project 4", description: "Description for Project 4"},
        {id: 2, name: "Project 5", description: "Description for Project 5"},
      ],
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
    CompletedCard,
    ClockCard,
    CreationCard,
    DonutChart,
    LineChart,
    SideBar,
    ProfileSideBar,
    PieChart,
    ExclamationCard,
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

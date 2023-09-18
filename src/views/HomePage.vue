<template>
  <div class="flex bg-lightblue w-screen h-screen">
    <SideBar />
    <!-- Main content area -->

    <div class="m-auto">
      <CreationModal class="m-auto"/>
    </div>

    <ProfileSideBar />
  </div>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar.vue";
import ProfileSideBar from "@/components/ProfileSideBar.vue";
import CreationModal from "@/components/CreationModal.vue";

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
    CreationModal,
    SideBar,
    ProfileSideBar,
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

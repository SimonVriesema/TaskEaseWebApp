<template>
  <div
    class="flex flex-col fixed top-0 right-0 w-1/6 h-screen bg-white transition transition-all duration-100"
  >
    <div class="h-1/3">
      <ProfileCard />
    </div>
    <div class="h-1/3">
      <TaskList />
    </div>
    <div class="h-1/3">
      <InboxList />
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";
import TaskList from "@/components/TaskList.vue";
import InboxList from "@/components/InboxList.vue";

export default {
  name: "ProfileSideBar",
  data() {
    return {
      imagePath: require("@/assets/images/svg/undraw_profile_pic_re_iwgo.svg"),
    };
  },
  components: {
    ProfileCard,
    TaskList,
    InboxList,
  },
};
</script>

<style scoped>
/* Add your custom styling for each section here */
</style>

<template>
  <div class="font-paragraphStyle">
    <!--    Navigation Bar Section-->
    <div>
      <LandingPageNavBar :imagePath="imagePath" />
    </div>
    <!--    Main Section-->
    <div
      class="bg-lightblue flex flex-col items-center mx-15 justify-center space-y-16 h-screen"
    >
      <div class="animate__animated animate__fadeInUp space-y-10">
        <h1
          class="text-4xl text-primaryText font-headingStyle leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:"
        >
          Supercharge productivity with TaskEase
        </h1>
        <p
          class="text-lg text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          Stay organized, focused, and in control of your daily tasks with our
          feature-rich task management web app. Experience seamless
          collaboration, efficient task tracking, and enhanced productivity all
          in one place.
        </p>
        <a
          href="#"
          class="inline-flex text-white items-center justify-center px-5 py-3 text-base font-medium text-center bg-secondary rounded-full hover:bg-secondaryhover focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          <router-link to="/homepage">Learn more about TaskEase</router-link>
        </a>
      </div>
      <div
        class="animate__animated animate__fadeInUp animate__delay-1s grid grid-cols-1 text-gray-500 sm:grid-cols-2 md:grid-cols-3 gap-16"
      >
        <div class="flex flex-col items-center">
          <img
            :src="imagePath1"
            alt="Image 1"
            class="w-full h-auto sm:w-80 sm:h-80"
          />
          <p class="text-center mt-2">Tame the Chaos</p>
        </div>
        <div class="flex flex-col items-center">
          <img
            :src="imagePath2"
            alt="Image 2"
            class="w-full h-auto sm:w-80 sm:h-80"
          />
          <p class="text-center mt-2">Unlock Your Potential</p>
        </div>
        <div class="flex flex-col items-center">
          <img
            :src="imagePath3"
            alt="Image 3"
            class="w-full h-auto sm:w-80 sm:h-80"
          />
          <p class="text-center mt-2">Achieve Serenity</p>
        </div>
      </div>
    </div>
    <div
      class="h-screen bg-lighterShade flex flex-col items-center justify-center text-left"
    >
      <div ref="myElement" class="mb-5 flex flex-row w-3/4">
        <div class="w-2/3 text-lg">
          <h2 class="font-headingStyle text-3xl font-bold mb-4">
            Supercharge productivity
          </h2>
          <p>
            At TaskEase, we understand the challenges of managing tasks and
            staying on top of your workload. With our powerful task management
            web app, we bring you the perfect solution to streamline your daily
            workflow and maximize productivity.
          </p>
          <br />
          <p>
            Our feature-rich platform is designed to help you stay organized,
            focused, and in control. Say goodbye to scattered to-do lists and
            juggling multiple tools. With TaskEase, everything you need is
            conveniently located in one place.
          </p>
        </div>
        <div class="w-1/3 flex flex-col items-center justify-center">
          <img
            :src="imagePath4"
            alt="Image 2"
            class="w-full h-auto sm:w-64 sm:h-64"
          />
        </div>
      </div>

      <div ref="myElement" class="mt-5 flex flex-row w-3/4">
        <div class="w-1/3 flex flex-col items-center justify-center">
          <img
            :src="imagePath5"
            alt="Image 2"
            class="w-full h-auto sm:w-64 sm:h-64"
          />
        </div>
        <div class="w-2/3 text-lg">
          <h2 class="font-headingStyle text-3xl font-bold mb-4">
            Seamless Collaboration and Efficient Task Tracking
          </h2>
          <p>
            Collaboration is made seamless with our app. Easily assign tasks to
            team members, track progress, and communicate effortlessly, ensuring
            everyone is on the same page. Stay connected and work together
            towards your goals with ease.
          </p>
          <br />
          <p>
            Task tracking has never been more efficient. With TaskEase, you can
            prioritize your tasks, set deadlines, and receive notifications,
            keeping you on track and ensuring no task falls through the cracks.
            Take charge of your schedule and accomplish more in less time.
          </p>
        </div>
      </div>
    </div>
    <div
      class="h-screen bg-darkerShade flex flex-col items-center justify-center text-left"
    >
      <h2 class="text-4xl font-headingStyle">Read what our users say</h2>
      <div>
        <img
          :src="imagePath6"
          alt="Image 2"
          class="w-full h-auto sm:w-48 sm:h-48"
        />
      </div>
      <div class="max-w-screen-md mx-auto">
        <div class="flex items-center space-x-2 mb-6">
          <img
            class="w-12 h-12 rounded-full bg-gray-50"
            :src="imagePath7"
            alt="User 1"
          />
          <div>
            <h3 class="text-lg font-medium">John Doe</h3>
            <p class="">CEO, ABC Company</p>
          </div>
        </div>
        <p class="leading-relaxed mb-6">
          "TaskEase has completely transformed the way we manage our tasks and
          projects. It's intuitive, efficient, and helps our team stay organized
          and productive. Highly recommended!"
        </p>

        <div class="flex items-center space-x-4 mb-8">
          <img
            class="w-12 h-12 rounded-full bg-gray-50"
            :src="imagePath8"
            alt="User 2"
          />
          <div>
            <h3 class="text-lg font-medium">Jane Smith</h3>
            <p class="">Marketing Manager, XYZ Inc.</p>
          </div>
        </div>
        <p class="leading-relaxed mb-6">
          "TaskEase has made a significant impact on our team's productivity.
          It's user-friendly, packed with useful features, and keeps everyone on
          track. We couldn't be happier with this tool!"
        </p>

        <div class="flex items-center space-x-4 mb-8">
          <img
            class="w-12 h-12 rounded-full bg-gray-50"
            :src="imagePath9"
            alt="User 3"
          />
          <div>
            <h3 class="text-lg font-medium">Sarah Johnson</h3>
            <p class="">Project Manager, ABC Corp</p>
          </div>
        </div>
        <p class="leading-relaxed mb-6">
          "TaskEase has simplified our project management process. It's
          feature-rich, customizable, and helps us collaborate effectively. It's
          an invaluable tool for any team!"
        </p>
      </div>
    </div>
    <div>
      <LandingPageFooter :imagePath="imagePath" />
    </div>
  </div>
</template>
<script>
import LandingPageNavBar from "@/components/LandingPageNavBar";
import LandingPageFooter from "@/components/LandingPageFooter";

export default {
  name: "MyComponent",
  components: {
    LandingPageNavBar,
    LandingPageFooter,
  },
  data() {
    return {
      imagePath: require("@/assets/images/logos/full_logo.png"),
      imagePath1: require("@/assets/images/svg/MessyDoodle.svg"),
      imagePath2: require("@/assets/images/svg/ReadingDoodle.svg"),
      imagePath3: require("@/assets/images/svg/MeditatingDoodle.svg"),
      imagePath4: require("@/assets/images/svg/GroovyDoodle.svg"),
      imagePath5: require("@/assets/images/svg/LayingDoodle.svg"),
      imagePath6: require("@/assets/images/svg/LovingDoodle.svg"),
      imagePath7: require("@/assets/images/svg/undraw_male_avatar_g98d.svg"),
      imagePath8: require("@/assets/images/svg/undraw_pic_profile_re_7g2h.svg"),
      imagePath9: require("@/assets/images/svg/undraw_profile_pic_re_iwgo.svg"),
    };
  },
  props: {
    // Component props go here
  },
  computed: {
    // Computed properties go here
  },
  mounted() {},
  beforeUnmount() {},
  methods: {},
};
</script>

<style scoped>
.animate__animated.animate__fadeInUp {
  --animate-duration: 0.8s;
}
</style>

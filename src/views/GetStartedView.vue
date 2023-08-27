<template>
  <div class="h-screen w-screen flex flex-col sm:flex-row">
    <!-- Left Section - Sign Up Form -->
    <div
      class="bg-white w-full sm:w-1/2 flex flex-col space-y-2 items-center justify-center p-8"
    >
      <transition name="fade" mode="out-in">
        <div :key="signUpView" class="w-1/2">
          <!-- Render SignUp or SignIn component based on signUpView -->
          <div v-if="signUpView" class="animate__animated animate__fadeIn">
            <!-- Render SignUp component -->
            <SignUp
              :imagePath="imagePath"
              :signUpView="signUpView"
              :accounts="accounts"
              @switchToSignIn="handleSwitchToSignIn"
            />
          </div>
          <div v-else class="animate__animated animate__fadeIn">
            <!-- Render SignIn component -->
            <SignIn
              :imagePath="imagePath"
              :signUpView="signUpView"
              :accounts="accounts"
              @switchToSignIn="handleSwitchToSignUp"
            />
          </div>
        </div>
      </transition>
    </div>

    <!-- Right Section - Registration Information -->
    <div
      class="bg-lightblue bg-diagonal-lines w-full sm:w-1/2 space-y-16 flex flex-col items-center rounded-2xl m-3 justify-center p-8"
    >
      <div
        class="text-center sm:text-left animate__animated animate__fadeInUp animate__delay-0.5s"
      >
        <h1 class="text-3xl font-headingStyle py-6">Boost Your Productivity</h1>
        <p class="text-md text-gray-500 lg:text-lg dark:text-gray-400">
          Supercharge your productivity with TaskEase. Stay organized, focused,
          and in control of your tasks. Collaborate seamlessly, track tasks, and
          boost efficiency, all in one place.
        </p>
      </div>
      <img
        :src="imagePath1"
        alt="Image 1"
        class="animate__animated animate__fadeInUp animate__delay-1s mt-12 w-full h-full sm:w-full sm:h-80"
      />
    </div>
  </div>
</template>

<script>
import SignUp from "@/components/SignUp.vue";
import SignIn from "@/components/SignIn.vue";

export default {
  name: "GetStartedView",
  components: {
    SignUp,
    SignIn,
  },
  data() {
    return {
      signUpView: true,
      imagePath: require("@/assets/images/logos/logo_icon.png"),
      imagePath1: require("@/assets/images/svg/ReadingSideDoodle.svg"),
      accounts: [
        {
          email: "user1@example.com",
          password: "password1",
        },
        {
          email: "user2@example.com",
          password: "password2",
        },
      ],
    };
  },
  methods: {
    handleSwitchToSignIn() {
      // Switch to SignIn view
      this.signUpView = false;
    },
    handleSwitchToSignUp() {
      // Switch to SignUp view
      this.signUpView = true;
    },
  },
};
</script>

<style scoped>
@keyframes fade-enter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-leave {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="text-left">
    <!-- Header Section -->
    <div>
      <img :src="imagePath" class="h-10 mb-8" alt="TaskEase Logo" />
      <h1 class="text-3xl font-headingStyle">
        Sign in for <router-link to="/">TaskEase</router-link>
      </h1>
      <p class="font-paragraphStyle mt-4 mb-3">
        Don't have an account?
        <a class="text-secondary cursor-pointer" @click="switchToSignUp">
          Sign up here</a
        >
      </p>
      <div class="text-sm text-left mt-4 md:mt-6">
        <button
          class="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg py-2 px-4 hover:bg-gray-100 w-full mb-2 md:mb-2 flex items-center justify-center"
        >
          <i class="fa fa-google mr-2"></i>
          <span class="mx-auto">Sign in with Google</span>
        </button>
        <button
          class="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 w-full mb-2 md:mb-2 flex items-center justify-center"
        >
          <i class="fa fa-facebook mr-2"></i>
          <span class="mx-auto">Sign in with Facebook</span>
        </button>
        <button
          class="bg-black text-white rounded-lg py-2 px-4 hover:bg-gray-900 w-full flex items-center justify-center"
        >
          <i class="fa fa-apple mr-2"></i>
          <span class="mx-auto">Sign in with Apple ID</span>
        </button>
      </div>
      <div class="flex items-center mt-4">
        <hr class="flex-grow border-gray-300" />
        <div class="mx-4 text-gray-500">or</div>
        <hr class="flex-grow border-gray-300" />
      </div>
      <p
        v-if="this.isCredentialsValid"
        class="font-paragraphStyle text-red-500 mt-3 mb-3"
      >
        Your email or password is incorrect. Please try again.
      </p>
    </div>
    <!-- Sign In Form -->
    <div class="font-paragraphStyle mt-2">
      <form class="space-y-5">
        <!-- Email Input -->
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            v-model.lazy="email"
            type="email"
            id="email"
            :class="{
              'animate__animated animate__headShake border-red-500 bg-red-50':
                isCredentialsValid,
            }"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            placeholder="name@email.com"
            required
          />
        </div>
        <!-- Password Input -->
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Password</label
          >
          <input
            v-model.lazy="password"
            type="password"
            id="password"
            :class="{
              'animate__animated animate__headShake border-red-500 bg-red-50':
                isCredentialsValid,
            }"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            required
            placeholder="••••••••"
          />
        </div>
        <!-- Remember Me Checkbox -->
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 text-secondary border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            for="remember"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Remember me</label
          >
        </div>
        <!-- Submit Button -->
        <button
          @click="checkEmailAndPassword"
          type="submit"
          class="text-white bg-secondary hover:bg-secondaryhover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  props: ["imagePath", "signUpView", "accounts"],
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      isCredentialsValid: false,
    };
  },
  methods: {
    switchToSignUp() {
      // Emit an event to notify the parent to switch to the sign-up view
      this.$emit("switchToSignIn");
    },
    checkEmailAndPassword() {
      this.isCredentialsValid = false; // Assume credentials are not valid by default

      // Check if the email and password match any of the accounts
      for (let i = 0; i < this.accounts.length; i++) {
        if (
          this.accounts[i].email === this.email &&
          this.accounts[i].password === this.password
        ) {
          // If the email and password match, redirect to the dashboard
          console.log("Redirecting to dashboard");
          return;
        }
      }

      // If the email and password do not match, trigger animation
      this.isCredentialsValid = true;
    },
  },
};
</script>

<style scoped></style>

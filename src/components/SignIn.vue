<template>
  <div class="text-left">
    <!-- Header Section -->
    <div>
      <img :src="imagePath" class="h-10 mb-8" alt="TaskEase Logo" />
      <h1 class="text-3xl font-headingStyle">Sign in for TaskEase</h1>
      <p class="font-paragraphStyle mt-4 mb-3">
        Don't have an account?
        <a class="text-secondary cursor-pointer" @click="switchToSignUp">
          Sign up here</a
        >
      </p>
    </div>
    <!-- Sign In Form -->
    <div class="font-paragraphStyle">
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
              required
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
  props: ["imagePath", "signUpView"],
  data() {
    return {
      email: null,
      password: null,
      accounts: [
        {
          email: "user1@example.com",
          password: "password1",
        },
        {
          email: "user2@example.com",
          password: "password2",
        },
        // Add more account objects as needed
      ],
    };
  },
  methods: {
    switchToSignUp() {
      // Emit an event to notify the parent to switch to the sign-up view
      this.$emit("switchToSignUp");
    },
  },
};
</script>

<style scoped></style>

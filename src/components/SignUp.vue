<template>
  <div class="text-left">
    <!-- Header Section -->
    <div>
      <img :src="imagePath" class="h-10 mb-8" alt="TaskEase Logo" />
      <h1 class="text-3xl font-headingStyle">Sign up for TaskEase</h1>
      <p class="font-paragraphStyle mt-4 mb-3">
        Already have an account?
        <a class="text-secondary cursor-pointer" @click="switchToSignIn">
          Sign in here</a
        >
      </p>
    </div>
    <!-- Sign Up Form -->
    <div class="font-paragraphStyle">
      <form class="space-y-5">
        <!-- First Name and Last Name -->
        <div class="grid md:grid-cols-2 md:gap-1">
          <div>
            <label
              for="firstname"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >First name</label
            >
            <input
              type="text"
              id="firstname"
              class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="lastname"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Last name</label
            >
            <input
              type="text"
              id="lastname"
              class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
              placeholder="Doe"
              required
            />
          </div>
        </div>
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
          <p v-if="!checkEmail()" class="text-red-500 text-sm mt-2">
            Please enter a valid email address
          </p>
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
          <p v-if="!checkPasswordStrength()" class="text-red-500 text-sm mt-2">
            Password must be a minimum of 8 characters, including a lowercase
            letter, an uppercase letter, and a number.
          </p>
        </div>
        <!-- Repeat Password Input -->
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Repeat Password</label
          >
          <input
            v-model.lazy="repeatPassword"
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            required
            placeholder="••••••••"
          />
          <p v-if="!checkRepeatPassword()" class="text-red-500 text-sm mt-2">
            Password does not match previously entered password.
          </p>
        </div>
        <!-- Terms and Conditions Checkbox -->
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
            >I agree to the
            <a class="text-secondary" href="http://"
              >terms and conditions</a
            ></label
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
  name: "SignUp",
  props: ["imagePath", "signUpView"],
  data() {
    return {
      email: null,
      password: null,
      repeatPassword: null,
    };
  },
  methods: {
    switchToSignIn() {
      // Emit an event to notify the parent to switch to the sign-in view
      this.$emit("switchToSignIn");
    },
    checkEmail() {
      if (!this.email) {
        return true; // No email provided, so no error message
      }

      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

      return emailRegex.test(this.email);
    },
    checkPasswordStrength() {
      if (!this.password) {
        return true; // No password provided, so no error message
      }

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

      return passwordRegex.test(this.password);
    },
    checkRepeatPassword() {
      return this.password === this.repeatPassword;
    },
  },
};
</script>

<style scoped></style>

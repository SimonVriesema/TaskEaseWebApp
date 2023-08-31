<template>
  <!-- Profile Section -->
  <div class="px-6 py-5">
    <!-- Profile Section -->
    <div class="text-left flex justify-between">
      <h1 class="font-headingStyle text-xl">Profile</h1>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-gray-500 hover:text-gray-800 transition-colors duration-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
    </div>
    <!-- Profile Card -->
    <div class="items-center p-3">
      <!-- Image -->
      <img
        :src="imagePath"
        alt="Profile Image"
        class="w-50 h-50 sm:w-24 sm:h-24 rounded-full bg-white m-auto border-5 border-indigo-600"
        style="max-width: 100%; height: auto"
      />
      <h1 class="text-xl font-medium font-paragraphStyle text-primaryText">
        John Doe
      </h1>
      <p class="text-gray-500">Web Developer</p>
    </div>
    <div
      class="flex bg-gray-100 rounded-lg text-gray-500 font-paragraphStyle text-primaryText"
    >
      <div class="flex w-1/2 border-r items-center">
        <div class="flex justify-center h-full w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 m-3 text-secondary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
        </div>
        <div class="w-1/2 text-left">
          <h1>0</h1>
          <p class="text-sm text-gray-500">Friends</p>
        </div>
      </div>
      <div class="flex w-1/2 border-l items-center">
        <div class="flex justify-center h-full w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 m-3 text-secondary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        </div>
        <div class="w-1/2 text-left">
          <h1>0</h1>
          <p class="text-sm text-gray-500">Teams</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  data() {
    return {
      imagePath: require("@/assets/images/svg/undraw_profile_pic_re_iwgo.svg"),
    };
  },
};
</script>

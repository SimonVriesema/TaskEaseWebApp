<template>
  <div>
    <!-- Sidebar -->
    <aside
      @mouseenter="toggleSidebar(false)"
      @mouseleave="toggleSidebar(true)"
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 h-screen pt-20 transition-all -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      :style="{ width: sidebarWidth, transform: sidebarTransform }"
      aria-label="Sidebar"
    >
      <div class="h-full m-3 px-3 pb-4 overflow-y-auto dark:bg-gray-800">
        <div
          class="bg-gray-100 mb-5 font-medium rounded-lg font-paragraphStyle bg-gray-100 text-primaryText"
        >
          <h1>Create new task</h1>
          <div class="">
            <button
              class="hover:bg-secondaryhover text-white items-center rounded-full justify-center px-3 py-3 bg-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul class="space-y-5 font-medium font-paragraphStyle text-primaryText">
          <li>
            <!-- Gebruik router-link hier in plaats van een gewone link -->
            <router-link
              to="/homepage"
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              :class="{
                'bg-secondary text-white hover:bg-secondary':
                  $route.name === 'Homepage',
              }"
            >
              <div class="h-7">
                <div v-if="$route.name === 'Homepage'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="animate__bounceIn w-7 h-7"
                  >
                    <path
                      d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                    />
                    <path
                      d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                    />
                  </svg>
                </div>
                <div v-else>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="animate__bounceIn w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
              </div>
              <span v-if="!collapsed" class="ml-3">Homepage</span>
            </router-link>
          </li>
          <li>
            <a
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div class="h-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7 transition-transform"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                  />
                </svg>
              </div>
              <span v-if="!collapsed" class="ml-3">Projects</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div class="h-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span v-if="!collapsed" class="ml-3">Tasks</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div class="h-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </div>
              <span v-if="!collapsed" class="ml-3">Notifications</span>
            </a>
          </li>
        </ul>
        <div class="absolute bottom-0 left-0 right-0 px-3 pb-4">
          <button
            class="w-full flex p-2 rounded-lg text-primaryText hover:bg-gray-100"
            @click="signOut"
          >
            <div class="h-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </div>
            <span v-if="!collapsed" class="ml-3 font-paragraphStyle"
              >Logout</span
            >
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { collapsed, sidebarWidth, toggleSidebar } from "./state";

export default {
  name: "SideBar",
  // Add any necessary component logic here
  data() {
    return {
      imagePath: require("@/assets/images/logos/full_logo.png"),
    };
  },

  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },

  methods: {
    isActivePage(pageName) {
      return this.$route.name === pageName;
    },
  },
};
</script>

<style scoped>
#logo-sidebar {
  /* ... your existing styles ... */
  transition: width 0.3s ease, transform 0.3s ease; /* Add transition for width and transform */
}
</style>

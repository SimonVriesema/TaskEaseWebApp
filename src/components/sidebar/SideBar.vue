<template>
  <div>
    <!-- Sidebar -->
    <aside
      @mouseenter="toggleSidebar(false)"
      @mouseleave="toggleSidebar(true)"
      id="logo-sidebar"
      class="fixed top-0 left-0 bg-white h-screen transition-all -translate-x-full sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      :style="{ width: sidebarWidth, transform: sidebarTransform }"
      aria-label="Sidebar"
    >
      <div class="h-full m-3 p-3 pt-5 overflow-y-auto">
        <!-- Expanded Sidebar Section -->
        <div class="mb-10">
          <a href="#" class="flex items-center">
            <img :src="imagePath1" class="h-11 w-11" alt="TaskEase Logo" />
            <h1 v-if="!collapsed" class="font-headingStyle text-2xl ml-3 mb-1">
              TaskEase
            </h1>
          </a>
        </div>
        <div
          class="container w-full flex rounded-lg mb-8"
          :class="{
            'p-3 bg-gray-100': !collapsed,
            'py-3': collapsed,
          }"
        >
          <div
            v-if="!collapsed"
            class="w-4/5 p-3 bg-gray-100 rounded-l-lg text-left"
          >
            <h1 class="font-medium">Create</h1>
          </div>
          <div
            class="rounded-r-lg"
            :class="{
              'bg-gray-100': !collapsed,
              'bg-transparent': collapsed,
            }"
          >
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
        <!-- Navigation Links -->
        <ul class="space-y-5 font-medium font-paragraphStyle text-primaryText">
          <sidebar-nav-item
            to="/homepage"
            name="Homepage"
            label="Homepage"
            :collapsed="collapsed"
            :highlight-background="true"
            active-icon-path="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
          />
          <sidebar-nav-item
            to="/projects"
            name="Projects"
            label="Projects"
            :collapsed="collapsed"
            :highlight-background="true"
            active-icon-path="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
          />
        </ul>
        <!-- Logout Button -->
        <div class="absolute bottom-0 left-0 right-0 px-5 pb-4">
          <button
            class="w-full flex p-3 rounded-lg text-primaryText"
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
import SidebarNavItem from "./SidebarNavItem.vue";

export default {
  name: "SideBar",
  // Add any necessary component logic here
  data() {
    return {
      imagePath: require("@/assets/images/logos/full_logo.png"),
      imagePath1: require("@/assets/images/logos/logo_icon.png"),
    };
  },

  components: {
    SidebarNavItem,
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

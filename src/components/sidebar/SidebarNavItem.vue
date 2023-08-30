<template>
  <li>
    <router-link
      :to="to"
      class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      :class="{
        'text-secondary hover:bg-gray-100': isActive && highlightBackground,
        'text-primaryText hover:bg-gray-100': !isActive,
      }"
    >
      <div class="h-7">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-7 h-7"
            :class="{
              animate__bounceIn: isActive,
            }"
          >
            <path
              :d="activeIconPath"
              :fill="isActive ? '#E07A5F' : '#A4A8BA'"
            />
          </svg>
        </div>
      </div>
      <span v-if="!collapsed" class="ml-3">{{ label }}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    to: String,
    name: String,
    label: String,
    collapsed: Boolean,
    highlightBackground: Boolean,
    activeIconPath: String,
    inactiveIconPath: String,
  },
  computed: {
    isActive() {
      return this.$route.name === this.name;
    },
  },
};
</script>

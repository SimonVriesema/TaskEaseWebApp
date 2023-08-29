import { ref, computed } from "vue";

// Use a ref for the collapsed state of the sidebar
export const collapsed = ref(true);

// Function to toggle the collapsed state of the sidebar
export const toggleSidebar = (state) => (collapsed.value = state);

// Define the sidebar width values
export const SIDEBAR_WIDTH = 260;
export const SIDEBAR_WIDTH_COLLAPSED = 95;

// Compute the sidebar width based on the collapsed state
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
);

<template>
  <div class="px-6 py-5">
    <div class="text-left flex justify-between">
      <h1 class="font-headingStyle text-xl">Inbox</h1>
      <a
        v-show="messages.length > 1"
        href="#"
        class="py-1 text-secondary font-paragraphStyle text-sm"
        >View All</a
      >
    </div>
    <div v-if="messages.length > 0" class="text-left">
      <p>
        You have
        <span class="text-secondary font-paragraphStyle text-sm">{{
          messages.length
        }}</span>
        messages
      </p>
    </div>
    <!-- Message List -->
    <div>
      <div
        class="flex justify-center items-center h-60"
        v-if="messages.length < 1"
      >
        <div class="p-2">
          <p class="text-center text-sm text-gray-500 font-paragraphStyle">
            No messages
          </p>
        </div>
      </div>
      <div v-else-if="messages.length > 0" class="mt-3 space-y-3">
        <div
          v-for="message in messages"
          :key="message.name"
          class="bg-gray-50 hover:bg-gray-100 rounded-lg p-1 font-paragraphStyle text-primaryText cursor-pointer"
        >
          <div
            @mouseover="message.hover = true"
            @mouseleave="message.hover = false"
            class="flex items-left"
          >
            <div class="flex justify-center h-full w-1/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7 m-2"
              >
                <path
                  v-show="!message.hover"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
                <path
                  v-show="message.hover"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>
            </div>
            <div class="w-5/6 text-left truncate">
              <h1>{{ message.name }}</h1>
              <p class="text-sm text-gray-500 truncate">
                {{ message.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  components: {},
  data() {
    return {
      imagePath: require("@/assets/images/svg/LayingDoodle.svg"),
      messages: [
        {
          name: "Message 1",
          author: "Jonathan Ive",
          date: "2021-10-01",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          read: false,
          hover: false,
        },
        {
          name: "Message 1",
          author: "Jonathan Ive",
          date: "2021-10-01",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          read: false,
          hover: false,
        },
        {
          name: "Message 1",
          author: "Jonathan Ive",
          date: "2021-10-01",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          read: false,
          hover: false,
        },
      ],
    };
  },
};
</script>

<style scoped></style>

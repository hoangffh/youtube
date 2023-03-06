<template>
  <div class="flex items-center gap-2 overflow-x-auto">
    <div
      class="flex items-center justify-center h-[32px] w-full bg-gray-light hover:bg-gray-200 rounded-lg cursor-pointer"
      v-for="item in listItem"
      :key="item"
    >
      <span class="text-base text-black">{{ item.title }}</span>
    </div>
  </div>
</template>
<script setup>
const listItem = [
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "All",
  },
  {
    title: "wewfwewefwefwef",
  },
  {
    title: "Allasfqweqwefwefewf",
  },
];
</script>

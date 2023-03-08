<template>
  <div class="flex w-full pt-[32px] items-center flex-col px-4">
    <div
      class="flex items-center gap-2 w-full fixed h-[32px] top-[65px] inset-x-0 z-30 translate-x-[225px] overflow-hidden"
    >
      <div
        @click="handlePrev"
        class="w-8 h-8 bg-white flex items-center justify-center rounded-full hover:bg-gray-100"
      >
        <IconNext class="w-4 h-4 rotate-180"></IconNext>
      </div>
      <div
        class="text-center leading-[32px] h-[32px] lg:px-4 px-2 rounded-lg cursor-pointer"
        :class="
          title === item.title
            ? 'bg-black text-white hover:bg-black'
            : 'text-black hover:bg-gray-200 bg-gray-100'
        "
        v-for="item in listItem"
        :key="item"
        @click="handleFilter(item)"
      >
        <span class="text-base">{{ item.title }}</span>
      </div>
      <div
        @click="handleNext"
        class="w-8 h-8 bg-white flex items-center justify-center rounded-full hover:bg-gray-100"
      >
        <IconNext class="w-4 h-4"></IconNext>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { IconNext } from "@/assets/icon";
const listItem = [
  {
    title: "All",
  },
  {
    title: "Violon",
  },
  {
    title: "Mixes",
  },
  {
    title: "Youth music",
  },
  {
    title: "Live",
  },
  {
    title: "Music",
  },
  {
    title: "Football",
  },
  {
    title: "Soccer",
  },
  {
    title: "Anime",
  },
  {
    title: "Film",
  },
  {
    title: "Attack on Titan",
  },
  {
    title: "Fifa",
  },
  {
    title: "Dream",
  },
  {
    title: "Cakes",
  },
  {
    title: "Coockies",
  },
  {
    title: "Apple",
  },
  {
    title: "Laptop",
  },
];
const title = ref();
const handleFilter = (item) => {
  title.value = item.title;
};
const handleNext = () => {
  var index = checkIndex();
  if (index == listItem.length - 1) {
    index = 0;
    title.value = listItem[index].title;
  } else title.value = listItem[index + 1].title;
};
const handlePrev = () => {
  var index = checkIndex();
  if (index == 0) {
    index = listItem.length - 1;
    title.value = listItem[index].title;
  } else title.value = listItem[index - 1].title;
};
const checkIndex = () => {
  const value = listItem.filter((item) => {
    return item.title === title.value;
  });
  var index = listItem.indexOf(value[0]);
  return index;
};
onMounted(() => {
  title.value = listItem[0].title;
});
</script>

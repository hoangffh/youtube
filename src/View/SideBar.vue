<template>
  <div
    class="max-h-[calc(100vh - 56px)] overflow-y-auto px-6 flex flex-col items-center w-[204px]"
  >
    <div class="w-full" v-for="item in listSideBar" :key="item">
      <BaseIItemSIdebar :item="item"></BaseIItemSIdebar>
    </div>
  </div>
</template>
<script setup>
import BaseIItemSIdebar from "@/components/Base/BaseIItemSIdebar.vue";
import { IconHome } from "@/assets/icon/index";
const listSideBar = [
  {
    Icon: IconHome,
    title: "Trang chủ",
  },
  {
    Icon: IconHome,
    title: "Shorts",
  },
  {
    Icon: IconHome,
    title: "Trang chủ",
  },
  {
    Icon: IconHome,
    title: "Trang chủ",
  },
  {
    Icon: IconHome,
    title: "Trang chủ",
  },
  {
    Icon: IconHome,
    title: "Trang chủ",
  },
  {
    Icon: IconHome,
    title: "Trang chủ",
  },
  {
    Icon: IconHome,
    title: "Trang chủ",
  },
  {
    Icon: IconHome,
    title: "Trang chủ",
  },
  {
    Icon: IconHome,
    title: "Trang chủ",
  },
  {
    Icon: IconHome,
    title: "Trang chủ",
  },
  {
    Icon: IconHome,
    title: "Trang chủ",
  },
];

</script>

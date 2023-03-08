<template>
  <div
    class="max-h-[calc(100vh-65px)] overflow-y-scroll flex flex-col items-center w-[224px] pl-2 pr-4 scrollbox"
  >
    <a-tooltip
      placement="bottomRight"
      v-for="item in listSideBar"
      :key="item"
      :title="item.title"
    >
      <div
        class="w-full px-4 hover:rounded-md hover:bg-slate-200 hover:font-bold cursor-pointer"
        :class="
          isMenuNavBarActive === item.link ? 'bg-slate-200 rounded-md ' : ''
        "
        @click="handleToView(item?.link)"
      >
        <BaseIItemSIdebar :item="item"></BaseIItemSIdebar>
      </div>
    </a-tooltip>
    <a-tooltip title="Button">
      <Button>Add</Button>
    </a-tooltip>
    <message></message>
  </div>
</template>
<script setup>
import { Button, message } from "ant-design-vue";
import BaseIItemSIdebar from "@/components/Base/BaseIItemSIdebar.vue";
import IconHome from "@/assets/icon/IconHome.svg";
import router from "@/router";
import { URI } from "@/Container/data";
import { ref } from "vue";
const listSideBar = [
  {
    Icon: IconHome,
    title: "Trang chủ",
    link: URI.home,
  },
  {
    Icon: IconHome,
    title: "Shorts",
    link: URI.shorts,
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
];
const isMenuNavBarActive = ref(null);
const handleToView = (item) => {
  isMenuNavBarActive.value = item;
  router.push({
    path: item,
  });
};
</script>
<style>
.scrollbox::-webkit-scrollbar {
  background-color: transparent;
  width: 0px;
}

.scrollbox:hover::-webkit-scrollbar {
  width: 8px;
}
.scrollbox:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

@media (hover: none) {
  .scrollbox::-webkit-scrollbar {
    width: 8px;
  }
  .scrollbox::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>

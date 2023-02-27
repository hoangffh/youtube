<template>
  <div
    class="fixed top-0 inset-x-0 z-30 transition-position w-full h-[56px] flex items-center px-6 lg:gap-40 gap-6"
  >
    <div class="flex items-center gap-6">
      <IconMenu class="w-6 h-6"></IconMenu>
      <div class="flex items-center relative gap-0.5">
        <IconYoutube class="w-8 h-8"></IconYoutube>
        <span class="font-bold text-[22px] opacity-70">YouTube</span>
        <span
          class="absolute text-[10px] right-0 top-0 translate-x-full -translate-y-1/6 text-black opacity-60"
          >VN</span
        >
      </div>
    </div>
    <BaseInput type="text" placeholder="Search" v-model="search"></BaseInput>
    <div class="flex items-center gap-6">
      <IconMenu class="w-6 h-6"></IconMenu>
      <div class="flex items-center relative gap-0.5">
        <IconYoutube class="w-8 h-8"></IconYoutube>
        <span class="font-bold text-[22px] opacity-70">YouTube</span>
        <span
          class="absolute text-[10px] right-0 top-0 translate-x-full -translate-y-1/6 text-black opacity-60"
          >VN</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { IconMenu, IconYoutube } from "@/assets/icon/index";
import BaseInput from "@/components/Base/BaseInput.vue";
</script>

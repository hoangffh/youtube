<template>
  <div class="w-full h-[56px] grid lg:grid-cols-4 grid-cols-1s content-center">
    <div class="inline-grid grid-cols-6 content-center items-center">
      <IconMenu class="w-6 h-6"></IconMenu>
      <div class="inline-grid grid-cols-2 content-center items-center gap-x-2 relative">
        <IconYoutube class="w-8 h-8"></IconYoutube>
        <span class="font-bold text-2xl opacity-70">YouTube</span>
        <span class="absolute text-[12px] right-0 top-0 text-black">VN</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { IconMenu, IconYoutube } from "@/assets/icon/index";
</script>

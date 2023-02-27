<template>
  <div class="w-full h-[56px] grid lg:grid-cols-3 grid-cols-1s content-center">
    <div class="inline-grid grid-cols-8 content-center items-center">
      <IconMenu class="w-6 h-6"></IconMenu>
      <div class="inline-grid grid-cols-2 content-center items-center gap-4">
        <IconYoutube class="w-8 h-8"></IconYoutube>
        <span>Youtube</span>
      </div>
    </div>
    <div class="inline-grid grid-cols-8 content-center items-center">
      <IconMenu class="w-6 h-6"></IconMenu>
      <div class="inline-grid grid-cols-2 content-center items-center gap-4">
        <IconYoutube class="w-8 h-8"></IconYoutube>
        <span>Youtube</span>
      </div>
    </div>
    <div class="inline-grid grid-cols-8 content-center items-center">
      <IconMenu class="w-6 h-6"></IconMenu>
      <div class="inline-grid grid-cols-2 content-center items-center gap-4">
        <IconYoutube class="w-8 h-8"></IconYoutube>
        <span>Youtube</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { IconMenu, IconYoutube } from "@/assets/icon/index";
</script>

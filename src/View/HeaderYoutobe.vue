<template>
  <div
    class="fixed top-0 inset-x-0 z-30 transition-position w-full h-[56px] flex items-center px-6 justify-between"
  >
    <div class="flex items-center gap-6 w-1/4">
      <IconMenu class="w-6 h-6"></IconMenu>
      <div class="flex items-center relative gap-0.5">
        <IconYoutube class="w-8 h-8"></IconYoutube>
        <span class="font-base text-[20px]">YouTube</span>
        <span
          class="absolute text-[10px] right-0 top-0 translate-x-full -translate-y-1/6 text-black opacity-60"
          >VN</span
        >
      </div>
    </div>
    <div class="flex items-center gap-4 lg:w-[728px]">
      <BaseInput type="text" placeholder="Search" v-model="search"></BaseInput>
      <IconMicro class="w-6 h-6"></IconMicro>
    </div>
    <div class="flex items-center w-1/4 gap-4 justify-end">
      <IconVideo class="w-6 h-6"></IconVideo>
      <IconBell class="w-6 h-6"></IconBell>
      <IconUser class="w-6 h-6"></IconUser>
    </div>
  </div>
</template>
<script setup>
import {
  IconMenu,
  IconYoutube,
  IconMicro,
  IconUser,
  IconVideo,
  IconBell,
} from "@/assets/icon/index";
import BaseInput from "@/components/Base/BaseInput.vue";
</script>
<style scoped>
.font-base {
  font-family: Youtube Bold;
}
</style>

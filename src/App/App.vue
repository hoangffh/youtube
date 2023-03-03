<template>
  <div
    class="box-border w-full h-full m-0 transition-position pt-[65px] bg-white"
  >
    <HeaderYoutobe></HeaderYoutobe>
    <div class="flex w-full">
      <SideBar></SideBar>
      <ContainerYoutube></ContainerYoutube>
    </div>
  </div>
</template>
<script setup>
import HeaderYoutobe from "@/View/HeaderYoutobe.vue";
import SideBar from "@/View/SideBar.vue";
import ContainerYoutube from "@/View/ContainerYoutube.vue";
</script>

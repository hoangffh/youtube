<template>
<div class="w-full h-[40px] flex items-center gap-4">
    <img :src="item.Icon" class="h-6 w-6"/>
    <span class="text-black text-lg
     font-sans">{{  item.title}}</span>
</div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    item:{
        type:Object,
    }
})
</script>
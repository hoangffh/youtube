<template>
  <div
    class="flex items-center justify-evenly w-full h-[42px]  rounded-[32px] box-border border border-solid border-gray-200"
  >
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="inputText"
      class="w-full h-full px-8 rounded-[32px] rounded-tr-none rounded-br-none  box-border border border-solid border-gray-200 focus:border-cyan-400"
    />
    <div
      class="h-full flex items-center justify-center w-[64px] rounded-[32px] rounded-tl-none rounded-bl-none bg-gray-light opacity-60 "
    >
      <IconSearch class="w-5 h-5"></IconSearch>
    </div>
  </div>
</template>
<script setup>
import { IconSearch } from "@/assets/icon/index";
import { defineProps, computed, defineEmits ,watch } from "vue";
const props = defineProps(["type", "placeholder", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const inputText = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
watch(props.modelValue,(value)=>{
  console.log(value);
})
</script>

<template>
  <CreateCategory />
</template>

<script setup lang="ts">
import CreateCategory from "@/features/categories/CreateCategory";
const props = defineProps({
  firstNsame: String,
  firstNameModifiers: { default: () => ({}) },
})

defineOptions({
  inheritAttrs: false
})
</script>

<style scoped>

</style>
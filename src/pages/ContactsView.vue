<template>
  <div class="page">
    <h1 class="title">Контакты</h1>

    <CreatePhones/>
  </div>
</template>

<script setup lang="ts">
import CreatePhones from "@/features/phones/CreatePhones.vue";
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
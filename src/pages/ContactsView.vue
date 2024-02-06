<template>
  <div class="page">
    <h1 class="title">Контакты</h1>

    <CreatePhones style="{background: red}"/>
  </div>
</template>

<script setup lang="ts">
import CreatePhones from "@/features/phones/CreatePhones.vue";
import {reactive, ref} from "vue";
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
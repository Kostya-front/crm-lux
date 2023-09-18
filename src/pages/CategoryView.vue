<template>
  <div class="page">
    <h1 class="title">Категории</h1>
    <CategoryForm/>

    <CategoriesTable/>
  </div>
</template>

<script setup lang="ts">
import CategoriesTable from "@/widgets/CategoriesTable/CategoriesTable";
import CategoryForm from '@/features/categories/CreateCategory'
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
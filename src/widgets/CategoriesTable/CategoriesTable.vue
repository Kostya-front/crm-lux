<template>
  <table v-if="categoriesStore.categories.length" class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Название категории</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(category, index) of categoriesStore.categories" :key="category.title">
      <th scope="row">{{index + 1}}</th>

      <td>{{category.title}}</td>

      <td class="align__right">
        <DeleteCategory :title="category.title"/>
      </td>
    </tr>
    </tbody>
  </table>

  <p v-else>Пока что вы не создали ни одну категорию</p>
</template>

<script setup lang="ts">

import {useCategoriesStore} from "@/features/categories/categoriesStore";
import DeleteCategory from "@/features/categories/DeleteCategory.vue";

const categoriesStore = useCategoriesStore()
</script>

<style scoped>
.align__right {
  text-align: right;
}
</style>
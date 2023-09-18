<template>
  <form
      @submit.prevent="categoriesStore.createCategory()"
      class="form"
  >
    <UiInput v-model="categoriesStore.category.title" placeholder="Введите имя категории"/>
    <UiInput v-model="categoriesStore.category.urlImage" placeholder="Введите url картинки"/>
    <PrimaryButton title="Создать"/>
  </form>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import {useCategoriesStore} from "@/features/categories/categoriesStore";

const categoriesStore = useCategoriesStore()
</script>

<style lang="scss" scoped>
  .form {
    display: grid;
    grid-template-columns: 3fr 3fr 1fr;
    gap: 20px;
  }
</style>
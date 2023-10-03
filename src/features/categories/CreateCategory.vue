<template>
  <form
      data-cy="form"
      @submit.prevent="categoriesStore.createCategory()"
      class="form"
  >
    <UiInput v-model="categoriesStore.category.title" name="title" placeholder="Введите имя категории"/>
    <UiInput v-model="categoriesStore.category.url" name="url" placeholder="Введите url картинки"/>
    <PrimaryButton title="Создать"/>

    <p class="error-message" v-if="categoriesStore.errorMessage">{{categoriesStore.errorMessage}}</p>
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
    position: relative;
  }

  .error-message {
    color: darkred;
    position: absolute;
    top: 110%
  }
</style>
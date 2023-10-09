<template>
  <form
      data-cy="form"
      @submit.prevent="advantagesStore.create()"
      class="form"
  >
    <UiInput v-model="advantagesStore.creatingAdvantage.title" name="title" placeholder="Введите имя категории"/>
    <UiInput v-model="advantagesStore.creatingAdvantage.url" name="url" placeholder="Введите url картинки"/>
    <UiInput v-model="advantagesStore.creatingAdvantage.description" name="description" placeholder="Введите описание преимущества"/>
    <PrimaryButton title="Создать"/>

    <p class="error-message" v-if="advantagesStore.errorMessage">{{advantagesStore.errorMessage}}</p>
  </form>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import {useAdvantagesStore} from "@/features/advantages/advantagesStore";

const advantagesStore = useAdvantagesStore()
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  grid-template-areas:
        'title url button'
        'description description . ';
  gap: 20px;
  position: relative;
  input {
    &:nth-child(1) {
      grid-area: title;
    }

    &:nth-child(2) {
      grid-area: url;
    }

    &:nth-child(3) {
      grid-area: description;
    }
  }

  button {
    grid-area: button;
  }
}

.error-message {
  color: darkred;
  position: absolute;
  top: 110%
}
</style>
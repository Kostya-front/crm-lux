<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="form__image"><img :src="categoryStore.editingCategory.url" alt=""></div>
    <div class="form__inputs">
      <UiInput v-model="categoryStore.editingCategory.title" name="edit-title" placeholder="Введите название категории..."/>
      <UiInput v-model="categoryStore.editingCategory.url" name="edit-url" placeholder="Введите url картинки"/>
      <SuccessButton title="Сохранить"/>
    </div>
  </form>
</template>

<script setup lang="ts">
import UiInput from '@/shared/ui/UiInput'
import SuccessButton from "@/shared/ui/SuccessButton.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import {usePopupStore} from "@/features/popup/popupStore";

interface IProps {
  id: number
}
const props = defineProps<IProps>()
const categoryStore = useCategoriesStore()
const popupStore = usePopupStore()
function onSubmit() {
  categoryStore.editCategory()
  popupStore.togglePopup()
}
</script>

<style lang="scss" scoped>
  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    &__image {
      border: 2px solid;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 1px 1px 10px #000;
    }
    &__inputs {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
</style>
<template>
  <div class="page">
    <h1 class="title">Категории</h1>
    <CategoryForm/>

    <CategoriesTable/>

    <Popup>
      <EditCategory/>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import CategoriesTable from "@/widgets/CategoriesTable/CategoriesTable";
import CategoryForm from '@/features/categories/CreateCategory'
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import {onMounted} from "vue";
import Popup from "@/widgets/Popup/Popup.vue";
import EditCategory from "@/features/categories/EditCategory.vue";
const categoriesStore = useCategoriesStore()

onMounted(() => {
  categoriesStore.getAll()
})
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
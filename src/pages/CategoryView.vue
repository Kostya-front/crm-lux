<template>
  <div class="page">
    <h1 class="title">Категории</h1>
    <CategoryForm/>

    <PreLoader>
      <CategoriesTable class="test"/>
    </PreLoader>

    <Popup>
      <EditCategory/>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import CategoriesTable from "@/widgets/CategoriesTable/CategoriesTable";
import CategoryForm from '@/widgets/CategoryForm/CategoryForm'
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import {onMounted} from "vue";
import Popup from "@/widgets/Popup/Popup.vue";
import EditCategory from "@/features/categories/EditCategory.vue";
import PreLoader from "@/widgets/PreLoader/PreLoader.vue";
import {delay} from "@/shared/helpers";
const categoriesStore = useCategoriesStore()

</script>

<style scoped>
</style>
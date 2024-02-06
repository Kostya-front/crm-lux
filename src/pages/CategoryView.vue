<template>
  <div class="page">
    <h1 class="title">Категории</h1>
    <CategoryForm/>

    <CategoriesTable class="test"/>

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
const categoriesStore = useCategoriesStore()

const emit = defineEmits({
  click: null,
  submit: ({email}) => {
    if(email) {
      return true
    }
    console.log('empty')
    return
  }
})

onMounted(() => {
  categoriesStore.getAll()
})
</script>

<style scoped>
</style>
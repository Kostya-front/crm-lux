<template>
  <DangerButton @click.native="deleteCategory"/>
</template>

<script setup lang="ts">
import DangerButton from "@/shared/ui/DangerButton.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import {defineProps} from "vue";

interface IProps {
  id: number
}
const props = defineProps<IProps>()

const categoriesStore = useCategoriesStore()

function deleteCategory() {
  categoriesStore.deleteCategory(props.id)
}
</script>

<style scoped>

</style>
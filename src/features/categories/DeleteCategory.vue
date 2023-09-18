<template>
  <DangerButton @click.native="deleteCategory"/>
</template>

<script setup lang="ts">
import DangerButton from "@/shared/ui/DangerButton.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import {defineProps} from "vue";

interface IProps {
  title: string
}
const props = defineProps<IProps>()

const categoriesStore = useCategoriesStore()

function deleteCategory() {
  categoriesStore.deleteCategory(props.title)
}
</script>

<style scoped>

</style>
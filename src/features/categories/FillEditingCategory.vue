<template>
  <SuccessButton @click.native="onClickHandler(id)" />
</template>

<script setup lang="ts">
import SuccessButton from "@/shared/ui/SuccessButton"
import {defineProps} from "vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";

interface IProps {
  onClick: () => void
  id: number
}
const props = defineProps<IProps>()

const categoriesStore = useCategoriesStore()

function onClickHandler(id: number) {
  categoriesStore.fillEditForm(id)
  props.onClick()
}
</script>

<style scoped>

</style>
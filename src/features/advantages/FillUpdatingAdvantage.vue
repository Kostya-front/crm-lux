<template>
  <SuccessButton @click.native="onClickHandler(id)" />
</template>

<script setup lang="ts">
import SuccessButton from "@/shared/ui/SuccessButton"
import {defineProps} from "vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import {useAdvantagesStore} from "@/features/advantages/advantagesStore";

interface IProps {
  onClick: () => void
  id: number
}
const props = defineProps<IProps>()

const advantageStore = useAdvantagesStore()

function onClickHandler(id: number) {
  advantageStore.fillEditForm(id)
  props.onClick()
}
</script>

<style scoped>

</style>
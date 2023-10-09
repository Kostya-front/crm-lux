<template>
  <DangerButton @click.native="deleteAdvantage"/>
</template>

<script setup lang="ts">
import DangerButton from "@/shared/ui/DangerButton.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import {defineProps} from "vue";
import {useAdvantagesStore} from "@/features/advantages/advantagesStore";

interface IProps {
  id: number
}
const props = defineProps<IProps>()

const advantageStore = useAdvantagesStore()

function deleteAdvantage() {
  advantageStore.deleteAdvantage(props.id)
}
</script>

<style scoped>

</style>
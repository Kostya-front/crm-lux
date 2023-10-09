<template>
  <input
      @input="($event) => onInput($event.target.value)"
      @focus="setId(id)"
      @blur="editDescription"
      :value="modelValue"
      type="text"
  >
</template>

<script setup lang="ts">
import {useAdvantagesStore} from "@/features/advantages/advantagesStore";
import {onMounted} from "vue";

interface IProps {
  modelValue: string
  id: number
}
const props = defineProps<IProps>()
const emit = defineEmits(['update:modelValue'])

const advantageStore = useAdvantagesStore()

advantageStore.updatingAdvantage.description = props.modelValue

function onInput(text: string) {
  emit('update:modelValue', text)
}

function setId(id: number) {
  advantageStore.fillEditForm(id)
}

function editDescription() {
  advantageStore.editDescription()
}

onMounted(() => {
  advantageStore.updatingAdvantage.description = advantageStore.advantages.find(item => item.id === props.id)!.description
})
</script>

<style scoped>
input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border:none;
}
</style>
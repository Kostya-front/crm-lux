<template>
  <input
      @input="($event) => onInput($event.target.value)"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      class="input"
      type="text"
  >
</template>


<script setup lang="ts">
import {ref} from "vue";

interface IProps {
  placeholder: string
  modelValue: string
  name: string
}

const props = defineProps<IProps>()
const emit = defineEmits(['update:modelValue'])

function onInput(text: string) {
  emit('update:modelValue', text)
}

defineExpose({
  test: 'test',
  click: () => console.log(123),
  func: {a: 123}
})
</script>

<style lang="scss" scoped>
  .input {
    border: 1px solid #04041A;
    padding: 21px 28px;
    border-radius: 31px;
  }
</style>
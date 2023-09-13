<template>
  <button class="button">
    {{title}}
  </button>
</template>

<script setup lang="ts">
interface IProps {
  title: string
}
const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
.button {
  background: #fff;
  color: #030319;
  padding: 10px 39px;
  border-radius: 24px;
  border: none;
  font-size: 24px;
  border: 1px solid #030319;
}
</style>
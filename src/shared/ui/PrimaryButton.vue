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
    background: #030319;
    color: #fff;
    padding: 10px 39px;
    border-radius: 24px;
    border: none;
    font-size: 24px;
  }
</style>
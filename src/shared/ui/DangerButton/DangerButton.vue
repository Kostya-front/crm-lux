<template>
  <button class="button">
    {{title}}
  </button>
</template>

<script setup lang="ts">
interface IProps {
  title?: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: 'X'
})
</script>

<style scoped>
  .button {
    width: 50px;
    height: 50px;
    background: #EE0000;
    border-radius: 12px;
    color: #fff;
    border: none;
  }
</style>
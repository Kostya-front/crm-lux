<template>
  <button :class="{'button-icon': !title}" class="button">{{title}}</button>
</template>

<script setup lang="ts">
interface IProps {
  title?: string
}
const props = withDefaults(defineProps<IProps>(), {
  title: ''
})
</script>

<style scoped>
  .button-icon {
    background-image: url('../../assets/edit.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  .button {
    padding: 0 25px;
    height: 50px;
    border-radius: 12px;
    color: #fff;
    background-color: #1A8509;
    border: none;
  }
</style>
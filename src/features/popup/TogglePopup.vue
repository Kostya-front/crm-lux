<template>
  <div>
    <slot :togglePopup="popupStore.togglePopup"/>
  </div>
</template>

<script setup lang="ts">
import {usePopupStore} from "@/features/popup/popupStore";
import { onBeforeUpdate, onMounted } from "vue";

const popupStore = usePopupStore()

onBeforeUpdate(() => {
  console.log(123)
})
</script>

<style scoped>

</style>
<template>
  <div>
    <slot :togglePopup="popupStore.togglePopup"/>
  </div>
</template>

<script setup lang="ts">
import {usePopupStore} from "@/features/popup/popupStore";

const popupStore = usePopupStore()
</script>

<style scoped>

</style>
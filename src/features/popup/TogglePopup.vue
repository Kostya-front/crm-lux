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

})
</script>

<style scoped>

</style>
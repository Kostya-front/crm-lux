<template>
  <div class="page">
    <h1 class="title">Преимущества</h1>

    <AdvantageForm/>

    <AdvantageTable/>

    <Popup>
      <EditAdvantage/>
    </Popup>
  </div>
</template>

<script setup lang="ts">

import AdvantageForm from "@/widgets/AdvantageForm/AdvantageForm.vue";
import AdvantageTable from "@/widgets/AdvantageTable/AdvantageTable.vue";
import {useAdvantagesStore} from "@/features/advantages/advantagesStore";
import {onMounted} from "vue";
import Popup from "@/widgets/Popup/Popup.vue";
import EditAdvantage from '@/features/advantages/EditAdvantage'

const advantageStore = useAdvantagesStore()

onMounted(() => {
  advantageStore.getAll()
})
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
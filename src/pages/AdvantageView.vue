<template>
  <div class="page">
    <h1 class="title">Преимущества</h1>

    <AdvantageForm/>

    <PreLoader>
      <AdvantageTable/>
    </PreLoader>


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
import EditAdvantage from '@/features/advantages/EditAdvantage.vue'
import PreLoader from "@/widgets/PreLoader/PreLoader.vue";
import {delay} from "@/shared/helpers";

const advantageStore = useAdvantagesStore()

</script>

<style scoped>
</style>
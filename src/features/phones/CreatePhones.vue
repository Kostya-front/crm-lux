<template>
  <form class="form">
    <template v-for="(input, index) of inputs" :key="input.id">
      <UiInput name="phone" v-model="input.text" placeholder="Введите номер телефона"/>

      <PrimaryButton v-if="index === 0" @click.prevent.native="createInput" title="+"/>
      <DangerButton v-else title="X"/>
    </template>

  </form>
</template>

<script setup lang="ts">

import UiInput from '@/shared/ui/UiInput'
import PrimaryButton from "@/shared/ui/PrimaryButton.vue";
import DangerButton from "@/shared/ui/DangerButton.vue";
import {ref} from "vue";


const inputs = ref([
  {id: new Date().getTime(), text: ''}
])

function createInput() {
  inputs.value.push({id: new Date().getTime(), text: ''})
}
</script>

<style scoped>

</style>
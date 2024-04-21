<template>
    <transition-group @submit.prevent="test" tag="form" name="phones" class="form" appear>
      <template v-for="(input, index) of inputs" :key="input.id">
        <UiInput  ref="input" @click="test(index)" v-focus name="phone" v-model="input.text" placeholder="Введите номер телефона"/>

        <PrimaryButton v-if="index === 0" @click.prevent.native="createInput" title="+"/>
        <DangerButton @click.native="deleteInput(input.id)" v-else title="X"/>
      </template>
      <PrimaryButton title="Сохранить"/>
    </transition-group>
</template>

<script setup lang="ts">

import UiInput from '@/shared/ui/UiInput'
import PrimaryButton from "@/shared/ui/PrimaryButton.vue";
import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue";
import {vFocus, vColor} from "@/shared/directives";
import {onBeforeMount, onMounted, ref} from "vue";

defineOptions({
  inheritAttrs: false
})
const inputs = ref([
  {id: new Date().getTime(), text: ''}
])

const input = ref(null)

function createInput() {
  inputs.value.push({id: new Date().getTime(), text: ''})
}

function deleteInput(id: number) {
  inputs.value = inputs.value.filter(input => input.id !== id)
}

function test(index: number) {
  alert(1232)
}
onMounted(() => {

})
</script>

<style scoped>
.form {
  display: grid;
  grid-template-columns: 5fr 1fr;

  gap: 15px;
}

.phones-move, .phones-enter-active, .phones-enter-leave {
  transition: 1s;
}

.phones-enter-from, .phones-leave-to {
  opacity: 0;
}

.phones-enter-to, .phones-leave-from {
  opacity: 1;
}
</style>
<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="form__container">
      <img src="@/assets/logo.svg" alt="">
      <UiInput v-model="authStore.loginForm.email" placeholder="email"/>
      <UiInput v-model="authStore.loginForm.password"  placeholder="password"/>
      <PrimaryButton title="Войти"/>
    </div>
  </form>
</template>

<script setup>

import UiInput from "@/shared/ui/UiInput";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import {useAuthStore} from "@/features/auth/athStore";
import {useRouter} from 'vue-router'
import {useRoute} from "vue-router";

const authStore = useAuthStore()
const router = useRouter()

async function onSubmit() {
  await authStore.login()
  router.push('/')
}

</script>

<style lang="scss" scoped>
.form {
  border-radius: 46px;
  border: 5px solid #04041A;
  padding: 101px 78px 77px 78px;
  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
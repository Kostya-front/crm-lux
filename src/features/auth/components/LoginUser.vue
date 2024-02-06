<template>
    <form @submit.prevent="onSubmit" class="form">
      <div class="form__container">
        <img src="@/assets/logo.svg" alt="">
        <UiInput v-model="authStore.authorizationForm.email" placeholder="email"/>
        <UiInput v-model="authStore.authorizationForm.password" placeholder="password"/>
        <PrimaryButton title="Зарегистрироваться"/>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import UiInput from '@/shared/ui/UiInput'
  import PrimaryButton from '@/shared/ui/PrimaryButton'
  import {useAuthStore} from "@/features/auth/athStore";
  
  const authStore = useAuthStore()
  
  function onSubmit() {
    authStore.register()
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
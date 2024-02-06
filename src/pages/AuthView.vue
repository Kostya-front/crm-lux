<template>
  <component :is="component"/>


  <p v-if="title === 'AuthorizationForm'">Уже имеете аккаунт? Можете <strong @click="setTitle('LoginForm')"> войти</strong></p>
  <p v-else>Ещё не зарегистрированы? Тогда можете <strong @click="setTitle('AuthorizationForm')">зарегистрироваться</strong></p>
</template>

<script setup lang="ts">
import AuthorizationForm from "@/widgets/AuthorizationForm/AuthorizationForm.vue";
import {useAuthStore} from "@/features/auth/athStore";
import LoginForm from '@/widgets/LoginForm/LoginForm.vue'
import {computed, onMounted, ref} from 'vue'
import {useRouter} from "vue-router";
const router = useRouter()
const title = ref('AuthorizationForm')

const forms = ref([
  {title: "AuthorizationForm", component: AuthorizationForm},
  {title: "LoginForm", component: LoginForm},
])

const component = computed(() => {
  const form = forms.value.find(form => form.title === title.value)
  if(form) {
    return form.component
  }
  return AuthorizationForm
})

function setTitle(aTitle: string) {
  title.value = aTitle
  console.log(title.value)
}

console.log(router)
</script>

<style scoped>

</style>
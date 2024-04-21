<template>
  <SecondaryButton @click="onClick" title="Выйти"/>
</template>

<script setup lang="ts">
import SecondaryButton from '@/shared/ui/SuccessButton'
import {useAuthStore} from "@/features/auth/athStore";
import {useRouter} from "vue-router";
const router = useRouter()

const authStore = useAuthStore()

function onClick() {
  authStore.logoutUser()
  router.push('/auth')
}
</script>

<style scoped>

</style>
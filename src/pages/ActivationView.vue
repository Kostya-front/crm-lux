<template>
  <div>{{authStore.message}}</div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {useAuthStore} from "@/features/auth/athStore";
import {onMounted} from "vue";

const route = useRoute()

const authStore = useAuthStore()

onMounted(() => {
  const key = route.params.key
  if(!Array.isArray(key)) {
    authStore.activateUser(key)
  }
})
</script>

<style scoped>

</style>
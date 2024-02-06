<template>
  <div v-if="authStore.isAuth"  class="app">
    <Header/>

    <Aside />

    <main class="main">
      <RouterView/>
    </main>
  </div>

  <div class="app__login" v-else>
    <RouterView></RouterView>
  </div>

</template>

<style lang="scss">
@import "@/shared/css/index.css";

.app {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: max-content 1fr;
  grid-template-areas: 'header header' 'aside main';
  min-height: 100vh;
}

.app__login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Две колонки с одинаковой шириной */
  gap: 30px; /* Расстояние между карточками по вертикали */
}

.card {
  padding: 20px; /* Пример: добавьте необходимые отступы и стили для карточек */
  border: 1px solid #ccc; /* Пример: граница для карточек */
}

/* Сдвиг карточек во второй колонке сверху на 50px */


.page {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.title {
  font-size: 48px;
}

.main {
  padding: 20px;
}
</style>
<script setup lang="ts">
import Header from "@/widgets/Header/Header.vue";
import Aside from "@/widgets/Aside/Aside"
import {useAuthStore} from "@/features/auth/athStore";
import {computed} from "vue";
import {useRoute} from "vue-router";

const authStore = useAuthStore()
const route = useRoute()

const isLogin = computed(() => {
  return route.path === '/auth'
})
</script>
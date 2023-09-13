<template>
  <div class="app">
    <Header/>

    <Aside/>

    <main class="main">
      <router-view/>
    </main>
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

.main {
  padding: 20px;
}
</style>
<script setup lang="ts">
import Header from "@/widgets/Header/Header.vue";
import Aside from "@/widgets/Aside/Aside"
</script>
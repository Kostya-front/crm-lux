<template>
  <header class="header header-main">
    <div class="container d-grid">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="">
      </router-link>

      <SecondaryButton title="Выйти"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import SecondaryButton from "@/shared/ui/SecondaryButton";
import {onMounted, ref} from "vue";
</script>

<style lang="scss" scoped>
  .header {
    background: linear-gradient(94deg, rgba(4,4,26,1) 0%, rgba(21,22,77,1) 100%);
    padding: 20px 0;
    grid-area: header;
  }

  .d-grid {
    display: grid;
    grid-template-columns: 175px max-content;
    justify-content: space-between;
    align-items: center;
  }
</style>
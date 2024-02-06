<template>
  <aside class="aside">
    <nav class="navigation">
      <router-link class="aside__link" to="/categories">Категории</router-link>

      <router-link class="aside__link" to="/advantages">Преимущества</router-link>

      <router-link class="aside__link" to="/contacts">Контакты</router-link>

      <router-link class="aside__link" to="/login">Логин</router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .aside {
    background: linear-gradient(180deg, rgba(4,4,26,1) 0%, rgba(34,35,69,1) 100%);
    grid-area: aside;
    &__link {
      padding: 14px;
      color: #fff;
      font-size: 20px;
      display: block;
      border-bottom: 1px solid gray;
      transition: 1s;
      &:hover {
        background: rgba(39, 39, 124, 0.78);
      }
    }
  }
</style>
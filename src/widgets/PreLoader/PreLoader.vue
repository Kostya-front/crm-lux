<template>
  <Suspense>
    <template #default>
      <transition name="default" appear>
        <slot/>
      </transition>
    </template>


    <template #fallback>
      <transition name="loader" appear>
        <p>Loader...</p>
      </transition>
    </template>

  </Suspense>
</template>

<script setup lang="ts">

</script>

<style scoped>
.loader-enter-active, .loader-leave-active {
  transition: 0.5s;
}

.loader-enter-from, .loader-leave-to {
  opacity: 0;
}

.loader-enter-to, .loader-leave-from{
  opacity: 1;
}


.default-enter-active, .default-leave-active {
  transition: 0.5s;
}

.default-enter-from, .default-leave-to {
  opacity: 0;
}

.default-enter-to, .default-leave-from{
  opacity: 1;
}
</style>

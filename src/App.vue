<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-center text-xl">
    <RouterLink :to="{name: 'home'}"
                class="mr-8">
                Home</RouterLink>
    <RouterLink :to="{name: 'films'}">Films</RouterLink>
  </header>

  <RouterView/>
</template>

<style scoped>

</style>

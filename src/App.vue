<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink :to="{name: 'home'}"
              class="mr-4">
              Home</RouterLink>
  <RouterLink :to="{name: 'films'}">Films</RouterLink>

  <RouterView/>
</template>

<style scoped>

</style>

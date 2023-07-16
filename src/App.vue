<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useFilmStore } from './store/useFilmStore.js'
import { onMounted } from 'vue'

const store = useFilmStore()

// fetch api data onMount of App
onMounted(() => {
  store.getFilms()
})

</script>

<template>
  <!-- the navigation links -->
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

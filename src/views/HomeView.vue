<script setup>
import { useFilmStore } from '../store/useFilmStore.js'
import FilmsSuggestions from '../components/FilmsSuggestions.vue'


const store = useFilmStore()

</script>

<template>
  <h1 class="text-5xl text-neutral-100 text-center
             mx-auto mt-6 mb-12 leading-snug
             font-bold max-w-xl">
             Welcome to Ghibli Flicks</h1>

  <!-- render only if api data has been fully loaded/fetched -->
  <FilmsSuggestions v-if="!store.isLoading" />
</template>

<style scoped>
</style>

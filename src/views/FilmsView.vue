<script setup>
import FilmsList from '../components/FilmsList.vue'
import { useFilmStore } from '../store/useFilmStore.js'

const store = useFilmStore()

</script>

<template>
  <h1 class="text-5xl text-neutral-100 text-center
             mx-auto mt-6 mb-12 leading-snug
             font-bold max-w-xl">
             All Ghibli Movies</h1>
  <FilmsList v-if="!store.isLoading" />
</template>


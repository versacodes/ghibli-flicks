<script setup>
import { useFilmStore } from '../store/useFilmStore.js'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()

const filmStore = useFilmStore()

</script>

<template>
  <div class="shadow-xl shadow-black flex max-w-[40rem] flex-col sm:flex-row
              bg-zinc-200 mb-14
              duration-75
              mx-auto justify-between">
    <img class="w-full" :src="filmStore.films[route.params.id].image" />
    <div class="flex flex-col sm:w-[100%] justify-center bg-zinc-800/75  px-8 py-8">
      <h1 class="tracking-tighter leading-tight
                text-3xl sm:text-5xl font-bold text-neutral-100 ">
                {{ filmStore.films[route.params.id].title }}</h1>
      <p class="text-sm text-neutral-300 leading-loose mt-6">{{ filmStore.films[route.params.id].description }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>

<script setup>
import { useFilmStore } from '../store/useFilmStore.js'

const filmStore = useFilmStore()
filmStore.getFilms()
console.log(filmStore.films)

</script>

<template>
  <h1 class="text-5xl text-neutral-100 text-center
             mx-auto mt-6 mb-12 leading-snug
             font-bold max-w-xl">
             All Ghibli Flicks</h1>

  <section class="flex flex-wrap justify-evenly">       
    <template class="" v-for="film in filmStore.films" :key="film.id">
      <div class="shadow-xl shadow-black flex flex-col cards 
                  w-[16rem] bg-zinc-200 mb-14 relative">
        <img class="" :src="film.image" />
        <div class="absolute flex flex-col pt-4 bottom-0 bg-zinc-800/75 w-full h-[40%] text-center px-4">
          <h1 class="tracking-tighter leading-8
                    text-2xl font-bold text-neutral-100 mt-3">
                    {{ film.title }}</h1>
          <p class="text-md text-neutral-300 mt-auto mb-3">{{ film.release_date }}</p>
        </div>
      </div>
    </template>
  </section>
</template>

<style scoped>
</style>

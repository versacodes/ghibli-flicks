<script setup>
import { useFilmStore } from '../store/useFilmStore.js'

const filmStore = useFilmStore()
filmStore.getFilms()
console.log(filmStore.films)

</script>

<template>
  <section class="flex flex-wrap justify-evenly">       
    <template v-for="film in filmStore.films" :key="film.id">
      <div class="shadow-xl shadow-black flex flex-col 
                  w-[16rem] bg-zinc-200 mb-14 relative hover:scale-105
                  duration-75 cursor-pointer
                  justify-around">
        <img class="" :src="film.image" />
        <div class="absolute flex flex-col justify-center items-center bottom-0 bg-zinc-800/75 w-full h-[35%] text-center px-4">
          <h1 class="tracking-tighter leading-8
                    text-2xl font-bold text-neutral-100">
                    {{ film.title }}</h1>
          <p class="text-md text-neutral-200 mt-2">{{ film.release_date }}</p>
        </div>
      </div>
    </template>
  </section>
</template>

<style scoped>
</style>

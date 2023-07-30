<script setup>
import { useFilmStore } from '../store/useFilmStore.js'
import {useRouter} from 'vue-router'
import { computed } from 'vue'

const filmStore = useFilmStore()
const router = useRouter()

// choose random films based on random indexes
// random from 0-6, 6-12, 12-18, 18-21
// (max - min + 1) + 1
// length of films array is 22 but last index is 21
const randomIndexForFilms = [Math.floor(Math.random()*7), Math.floor((Math.random()*7)+6), Math.floor((Math.random()*7)+12), Math.floor((Math.random()*4)+18)]

</script>

<template>
  <section>
    <h2 class="text-3xl text-center text-white font-bold">Film Suggestions</h2>
    <!-- render films based on random index -->
    <template v-for="val in randomIndexForFilms" :key="filmStore.films[val].id">
        <div class="mt-10 sm:w-[38rem] w-[16rem] mx-auto cursor-pointer 
                    hover:scale-[1.03]"
             @click="router.push(`/films/${val}`)">
            <div class="bg-cover bg-center sm:h-[12rem] h-[9rem] bg-cover"
                 :style="{backgroundImage: 
                        `url(${filmStore.films[val].movie_banner})`}"
            >
            </div>
            <div class="flex justify-between items-center py-4 px-6 bg-zinc-700">
                <h1 class="md:text-xl w-[70%] md:w-full text-sm font-bold text-neutral-100">
                           {{ filmStore.films[val].title }}</h1>
                <p class="text-[0.7rem] w-[50%] md:text-[1rem] text-neutral-200 mt-2">Directed By: {{ filmStore.films[val].director }}</p>
            </div>
        </div>
    </template>
  </section>
</template>

<style scoped>
</style>

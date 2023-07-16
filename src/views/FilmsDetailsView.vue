<script setup>
import FilmsCard from '../components/FilmsCard.vue'
import { useRouter, useRoute } from 'vue-router'
import { useFilmStore } from '../store/useFilmStore.js'

const route = useRoute()
const router = useRouter()
const filmStore = useFilmStore()

</script>

<template>
  <h1 class="text-3xl text-neutral-100 text-center
             mx-auto my-12 leading-snug
              max-w-xl">
             Info About <br><span class="inline-block mt-3 text-5xl font-bold">"{{ filmStore.films[route.params.id].title }}"</span></h1>
 <!-- button for going back to previous page using router.go -->
  <button class="text-md border-neutral-300 border-solid border-2
                text-white p-2 mb-6 mx-auto block"
          @click="router.go(-1)">Go back</button>
          
  <!-- render the film card based on chosen film from /films -->
  <FilmsCard />
</template>


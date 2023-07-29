`<script setup>
import FilmsCard from '../components/FilmsCard.vue'
import { useRouter, useRoute } from 'vue-router'
import { useFilmStore } from '../store/useFilmStore.js'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const filmStore = useFilmStore()
// tailwind style classes for button
const buttonStyle = "text-xs border-neutral-300 border-solid border-2 text-white p-[0.8em] mb-6 block sm:p-4 sm:text-lg w-[30%] sm:w-auto"

const isMin = computed(() => {
	// return false i params.id === 0
	// convert to int since params are strings
	return parseInt(route.params.id) === 0 ? false : true
})
const isMax = computed(() => {
	// minus 1 since array starts with 0 and length starts count in 1
	return parseInt(route.params.id) === filmStore.films.length - 1 ? false : true
})

</script>

<template>
  <h1 class="text-3xl text-neutral-100 text-center
             mx-auto my-12 leading-snug
              max-w-xl">
             Info About <br><span class="inline-block mt-3 text-5xl font-bold">"{{ filmStore.films[route.params.id].title }}"</span></h1>
  <div class="flex justify-between mx-auto max-w-[40rem]">
    <!-- go to previous film by subtracting params.id by 1, params.id is index of film in films array  -->
    <!-- only show button if not at first film -->
    <button :class="buttonStyle"
            @click="router.push(`/films/${parseInt(route.params.id) - 1}`)" v-if="isMin">Go to Previous Film</button>
            
    <!-- button for going back to films page using router.push -->
    <button :class="buttonStyle"
            @click="router.push('/films')">Go back</button>
            
    <!-- go to next film by adding params.id by 1, params.id is index of film in films array  -->
    <!-- only show button if not at last film -->
    <button :class="buttonStyle"
            @click="router.push(`/films/${parseInt(route.params.id) + 1}`)" v-if="isMax">Go to Next Film</button>
  </div>
          
  <!-- render the film card based on chosen film from /films -->
  <FilmsCard />
</template>


<script setup>
import { useFilmStore } from '../store/useFilmStore.js'
import { useRouter, useRoute } from 'vue-router'
import FilmMiniCard from './FilmMiniCard.vue'
import { ref } from 'vue'


const route = useRoute()

const filmStore = useFilmStore()

const film_details = ref([{}])

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

    <div class="flex flex-wrap max-w-[40rem] mx-auto">
        <FilmMiniCard mini-card-title="Directed and Produced By:">
                <p>{{ filmStore.films[route.params.id].director }}<br>{{ filmStore.films[route.params.id].producer }}</p>
        </FilmMiniCard>
        <FilmMiniCard mini-card-title="Japanese Title:">
                <p>{{ filmStore.films[route.params.id].original_title }}<br>{{ filmStore.films[route.params.id].original_title_romanised }}</p>
        </FilmMiniCard>
        <FilmMiniCard mini-card-title="Release Date:">
                <p>{{ filmStore.films[route.params.id].release_date }}</p>
        </FilmMiniCard>
        <FilmMiniCard mini-card-title="Running Time:">
                <p>{{ Math.floor(filmStore.films[route.params.id].running_time / 60) }} hrs {{ filmStore.films[route.params.id].running_time % 60}} mins </p>
        </FilmMiniCard>
    </div>
</template>

<style scoped>
</style>

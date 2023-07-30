<script setup>
import { useFilmStore } from '../store/useFilmStore.js'
import { useRouter, useRoute } from 'vue-router'

defineProps({
  miniCardTitle: String,
})

const route = useRoute()

const filmStore = useFilmStore()

</script>

<template>
  <div class="shadow-xl shadow-black mx-auto flex flex-col justify-around
              bg-zinc-600 w-[16rem] mb-14 p-4 text-white">
    <h3 class="font-bold text-[1.1rem] mb-2">{{ miniCardTitle }}</h3>
    <slot/>
  </div>
</template>

<style scoped>
</style>

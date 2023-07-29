import { defineStore } from 'pinia'

export const useFilmStore = defineStore('films', {
  state: () => ({
    films: "",
    isLoading: true,
  }),
  actions: {
    async getFilms() {
      const res = await fetch("https://ghibliapi.vercel.app/films/")
      const data = await res.json()

      this.films = data
      this.isLoading = false
    }
  },
})

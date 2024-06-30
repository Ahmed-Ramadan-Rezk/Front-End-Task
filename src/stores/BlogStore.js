import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blogStore', {
  state: () => ({
    posts: [],
    loading: false,
    error: null
  }),
  actions: {
    async fill() {
      try {
        this.loading = true
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await response.json()
        this.posts = posts.slice(0, 10)
        this.loading = false
      } catch (err) {
        this.error = err
      }
    }
  },

  getters: {
    count() {
      return this.posts.length
    },

    notEmpty() {
      return this.posts.length > 0
    },

    getError() {
      return this.error !== null ? this.error : null
    }
  }
})

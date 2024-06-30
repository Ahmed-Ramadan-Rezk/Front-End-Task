<script setup>
import { useBlogStore } from '@/stores/BlogStore'

const blogStore = useBlogStore()

await blogStore.fill()
</script>

<template>
  <div class="text-center border-t-4 border-purple">
    <h1 class="text-4xl mb-10 mt-10">Blog Posts ({{ blogStore.count }})</h1>
    <div v-show="blogStore.notEmpty">
      <div
        v-for="post in blogStore.posts"
        :key="post.id"
        class="border border-purple mb-10 py-12 rounded-2xl w-3/4 mx-auto px-4 bg-slate-950"
      >
        <div>
          <h2 class="text-3xl mb-4">{{ post.title }}</h2>
          <p class="text-sm">{{ post.body }}</p>
        </div>
      </div>
    </div>

    <div
      v-show="blogStore.getError"
      class="text-center border border-purple mb-10 py-12 rounded-2xl w-3/4 mx-auto px-4 bg-slate-950"
    >
      <p class="text-2xl mb-4">No posts found !</p>
    </div>
  </div>
</template>

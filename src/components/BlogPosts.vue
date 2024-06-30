<script setup>
import { Suspense } from 'vue'
import BlogPost from '@/components/BlogPost.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <BlogPost />
    </template>

    <template #fallback>
      <div class="">
        <p class="bg-light_purple py-3 px-3 w-36 mx-auto rounded-xl mb-10 mt-10">
          Loading posts...
        </p>
      </div>
    </template>
  </Suspense>
</template>

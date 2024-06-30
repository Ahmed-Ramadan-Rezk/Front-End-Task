<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-between items-center bg-dark_blur py-2 px-32">
    <!-- Nav Logo -->
    <div>
      <RouterLink to="/">
        <img alt="Meta 3 logo" src="@/assets/logo.svg" width="150" height="150" />
      </RouterLink>
    </div>

    <!-- Nav Items -->
    <div>
      <ul class="flex gap-10 font-light items-center">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/blog">Blog</RouterLink></li>
        <li><RouterLink to="/cart">Cart</RouterLink></li>
        <li class="border border-purple px-3 rounded-2xl">
          <RouterLink to="/login">login</RouterLink>
        </li>
        <li class="bg-purple px-3 rounded-2xl">
          <RouterLink to="/logout">Sign Up</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

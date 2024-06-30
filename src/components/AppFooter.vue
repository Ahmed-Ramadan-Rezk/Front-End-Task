<script setup>
import FooterCopyright from '@/components/FooterCopyright.vue'
import FooterListItems from '@/components/FooterListItems.vue'
</script>

<template>
  <footer>
    <div
      class="px-32 pt-10 pb-20 bg-gradient-to-b from-purple to-dark_blur flex justify-between items-start"
    >
      <div class="flex flex-col gap-6">
        <h2 class="font-semibold text-3xl">Join our weekly digest!</h2>
        <p class="font-light">
          Get exclusive promotions & updates straight <br />
          to your inbox.
        </p>
        <form action="">
          <input
            class="bg-dark px-4 py-1 rounded-full mr-4 w-72"
            type="text"
            placeholder="Enter your email..."
          />
          <button class="bg-dark px-4 py-1 rounded-2xl">Subscribe</button>
        </form>
        <button class="bg-purple px-4 py-1 rounded-2xl w-40">Create Free Store</button>
      </div>

      <FooterListItems />
    </div>

    <div class="bg-light_purple h-0.5"></div>

    <FooterCopyright />
  </footer>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header
    class="bg-[url('@/assets/images/background-image.png')] bg-no-repeat bg-center bg-cover h-[949px] relative"
  >
    <NavBar />

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
      <div class="flex flex-col gap-5">
        <h1 class="text-5xl font-bold leading-snug">Your own NFT Market place without Coding</h1>
        <p class="w-4/6 mx-auto">
          The fastest and easiest way to fully unlock the potential <br />
          of your digital assets. Create and run an exclusive marketplace <br />
          for your NFT business today!
        </p>
        <div>
          <form action="">
            <input
              class="bg-dark px-5 py-2 rounded-full mr-2 w-72"
              type="text"
              placeholder="Enter your email..."
            />
            <button class="bg-purple px-4 py-2 rounded-2xl">Start Free</button>
          </form>
        </div>
      </div>
    </div>
    <!-- Over Lay -->
    <div class="absolute w-full h-full bg-gradient-to-b from-transparent to-overlay z-10"></div>
  </header>
</template>

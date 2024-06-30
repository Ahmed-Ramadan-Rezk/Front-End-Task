<script setup>
import IconCollectionArrowLeft from '@/components/icons/IconCollectionArrowLeft.vue'
import IconCollectionArrowRight from '@/components/icons/IconCollectionArrowRight.vue'
</script>

<template>
  <div>
    <div class="px-32 py-16">
      <h2 class="text-4xl font-bold">Collections</h2>
    </div>

    <div class="px-14 relative pb-20">
      <div class="flex justify-between items-center">
        <div class="relative">
          <img alt="Character" src="@/assets/images/xo-girl.png" />
          <div
            class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-collection_blur w-full text-center py-2"
          >
            <p class="font-bold mb-1">XO Girls NFT Collection</p>
            <span>Floor: 0.07 ETH </span>
          </div>
        </div>

        <div class="relative">
          <img alt="Character" src="@/assets/images/game-character.png" />
          <div
            class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-collection_blur w-full text-center py-2"
          >
            <p class="font-bold mb-1">Game character 3d Collection</p>
            <span>Floor: 0.05 ETH </span>
          </div>
        </div>

        <div class="relative">
          <img alt="Character" src="@/assets/images/monkey.png" />
          <div
            class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-collection_blur w-full text-center py-2"
          >
            <p class="font-bold mb-1">Monkey Collections</p>
            <span>Floor : 0.01 ETH </span>
          </div>
        </div>

        <div class="relative">
          <img alt="Character" src="@/assets/images/club.png" />
          <div
            class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-collection_blur w-full text-center py-2"
          >
            <p class="font-bold mb-1">PROJECT NFT cub</p>
            <span>Floor : 0.07 ETH </span>
          </div>
        </div>
      </div>

      <!-- Arrows -->
      <div class="absolute left-6 top-1/2 -translate-y-full">
        <button>
          <IconCollectionArrowLeft />
        </button>
      </div>

      <div class="absolute right-6 top-1/2 -translate-y-full">
        <button>
          <IconCollectionArrowRight />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowCharacter from '@/components/icons/IconArrowCharacter.vue'
import AppDivider from '@/components/AppDivider.vue'
</script>
<template>
  <div class="px-32 py-20">
    <div class="flex justify-between items-center">
      <div>
        <img alt="Character" src="@/assets/images/katty.png" width="561" height="561" />
      </div>
      <div>
        <p class="text-4xl max-w-md leading-snug font-light mb-2">
          “KattyEfa NFT “ The image is a high-quality digital painting with a resolution of
          5000x1250 pixels .
        </p>
        <span class="text-3xl font-bold block mb-10">$1.5 million</span>
        <button>
          <IconArrowCharacter />
        </button>
      </div>
    </div>
  </div>
  <AppDivider />
</template>

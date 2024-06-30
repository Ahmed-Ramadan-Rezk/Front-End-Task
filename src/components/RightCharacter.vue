<script setup>
import IconArrowCharacter from '@/components/icons/IconArrowCharacter.vue'
import AppDivider from '@/components/AppDivider.vue'
</script>
<template>
  <div class="px-32 py-20">
    <div class="flex justify-between items-center">
      <div>
        <p class="text-4xl max-w-md leading-snug font-light mb-2">
          “Moddy Character NFT “ The image is a high-quality digital painting with a resolution of
          3000x2000 pixels and is optimized for the web.
        </p>
        <span class="text-3xl font-bold block mb-10">$101,593</span>
        <button>
          <IconArrowCharacter />
        </button>
      </div>
      <div>
        <img alt="Character" src="@/assets/images/moddy.png" width="561" height="561" />
      </div>
    </div>
  </div>
  <AppDivider />
</template>

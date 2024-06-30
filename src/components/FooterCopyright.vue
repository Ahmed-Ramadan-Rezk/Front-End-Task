<script setup>
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconTelegram from '@/components/icons/IconTelegram.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconYoutube from '@/components/icons/IconYoutube.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
</script>

<template>
  <div class="flex justify-between items-end px-32 py-6">
    <div>
      <p class="text-xs">© Copyright NFTify Network. All Rights Reserved.</p>
    </div>

    <div>
      <p class="text-xl mb-4">The Leading No-code NFT Marketplace Solution</p>
      <ul class="flex justify-between items-center">
        <li class="border border-white rounded-xl px-2 py-2">
          <a href="#">
            <IconTwitter />
          </a>
        </li>
        <li class="border border-white rounded-xl px-2 py-2">
          <a href="#">
            <IconTelegram />
          </a>
        </li>
        <li class="border border-white rounded-xl px-2 py-2">
          <a href="#">
            <IconFacebook />
          </a>
        </li>
        <li class="border border-white rounded-xl px-2 py-2">
          <a href="#">
            <IconLinkedin />
          </a>
        </li>
        <li class="border border-white rounded-xl px-2 py-2">
          <a href="#">
            <IconYoutube />
          </a>
        </li>
        <li class="border border-white rounded-xl px-2 py-2">
          <a href="#">
            <IconInstagram />
          </a>
        </li>
      </ul>
    </div>

    <div>
      <ul class="flex justify-between items-center text-xs gap-4">
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
</template>

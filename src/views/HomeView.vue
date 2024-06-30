<script setup>
import TheHeader from '@/components/TheHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import SwiperCollections from '@/components/SwiperCollections.vue'
import RightCharacter from '@/components/RightCharacter.vue'
import LeftCharacter from '@/components/LeftCharacter.vue'
import LeadingDivider from '@/components/LeadingDivider.vue'
</script>

<template>
  <main>
    <TheHeader />

    <LeadingDivider />

    <RightCharacter />

    <LeftCharacter />

    <SwiperCollections />

    <AppFooter />
  </main>
</template>

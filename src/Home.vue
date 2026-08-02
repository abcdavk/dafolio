<script setup>
import ClientCountInfo from './components/Home/ClientCountInfo.vue'
import ClientRating from './components/Home/ClientRating.vue'
import ClientReviews from './components/Home/ClientReviews.vue'
import FiverrCTA from './components/Home/FiverrCTA.vue'
import HeroSection from './components/Home/HeroSection.vue'
import PricingSection from './components/Home/PricingSection.vue'
</script>

<template>
  <div>
    <HeroSection />

    <h2>What I've done</h2>
    <ClientCountInfo />
    <ClientRating />
    <ClientReviews />
    <PricingSection />
    <FiverrCTA />
  </div>
</template>

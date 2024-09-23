<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | adidas Global Academy` : 'adidas Global Academy'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'adidas Global Academy - Access free online courses to pursue your passions, advance your career and more.' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style>
/* Global styles can be added here if needed */
</style>
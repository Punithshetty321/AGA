<template>
  <div class="vh-100 d-flex flex-column justify-content-center align-items-center">
    <div class="content text-center">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <p>{{ error.message }}</p>
      <button class="btn btn-secondary mt-space-sm" @click="handleError">
        Back to Home
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => {
  // Clear the error and return to the home page
  clearError({ redirect: '/' })
}
</script>

<style scoped>
/* You can add any specific styles here */
</style>
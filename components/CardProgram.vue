<template>
  <div class="card">
    <img :src="course.image" class="card-img-top" :alt="course.title">
    <div class="container">
        <span class="p-space-xxs bg-white card-duration">
          <img
            src="~/assets/images/clock.svg"
            width="16"
            height="16"
            alt="clock-svg"
            class="mr-space-xxs"
          />
          {{}}2-3 hours</span
        >
      </div>
    <div class="card-body">
      <h5 class="card-title">{{ course.title }}</h5>
      <p class="card-text">{{ course.text }}</p>
      <p class="card-text"><small class="text-muted">{{ course.duration }}</small></p>
    </div>
    
  </div>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.card-duration {
  left: 0;
  bottom: 20px;
  position: relative;
}
.card {
  height: auto;
}
.disable-hover {
  &:hover {
    text-decoration: none !important;
    cursor: default;
  }
}
</style>

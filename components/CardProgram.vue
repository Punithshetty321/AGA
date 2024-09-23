<template>
  <div class="card">
    <img :src="course.image" class="card-img-top" :alt="course.title">
    <div class="card-body">
      <h5 class="card-title">{{ course.title }}</h5>
      <p class="card-text">{{ course.text }}</p>
      <p class="card-text"><small class="text-muted">Duration: {{ course.duration }}</small></p>
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
  bottom: 0;
  margin-left: 15px;
  position: absolute;
}
.card-img-top {
  height: 240px;
  object-fit: cover;
}
.disable-hover {
  &:hover {
    text-decoration: none !important;
    cursor: default;
  }
}
</style>

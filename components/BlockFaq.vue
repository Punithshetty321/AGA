<template>
  <div class="accordion faq-container border-primary" role="tablist">
    <a
      href="javascript:void(0)"
      class="text-primary d-flex justify-content-between w-100 text-title font-weight-bold space-xl"
      @click="toggleFaq"
    >
      <div class="title">{{ question }}</div>
      <div class="icon">
        <span v-if="isOpen">
          <font-awesome-icon :icon="['fas', 'chevron-up']" style="width: 20px" />
        </span>
        <span v-else>
          <font-awesome-icon :icon="['fas', 'chevron-down']" style="width: 20px" />
        </span>
      </div>
    </a>
    <div v-if="isOpen" class="faq-content">
      <p class="mt-space-xs" v-html="answer"></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  question: {
    type: String,
    default: "Accordion 1"
  },
  answer: {
    type: String,
    default: "Text text text text text text text"
  },
  id: {
    type: Number,
    required: true
  }
})

const isOpen = ref(false)

function toggleFaq() {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
.faq-container {
  border: 1px solid #ddd;
  margin-bottom: 1rem;
  padding: 1rem;
}
.faq-content {
  padding-top: 1rem;
}
</style>

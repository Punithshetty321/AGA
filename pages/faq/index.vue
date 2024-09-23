<template>
  <main v-if="pageData">
    <section
      id="hero"
      class="hero-container"
      :style="{ backgroundImage: `url('~/assets/images/faq-hero.png')` }"
    >
      <div class="hero-content text-center">
        <h1
          tabindex="-1"
          class="page-title text-white text-uppercase font-adinueue font-weight-bolder"
          v-html="pageData.sectionHero.title"
        ></h1>
      </div>
    </section>
    <!-- faq -->
    <section id="faq" class="mt-space-xxl">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <template v-for="(faq, i) in pageData.faqs" :key="i">
              <BlockFaq
                :id="i"
                class="py-space-sm"
                :class="[
                  i !== pageData.faqs.length - 1 ? 'border-top' : 'border-top border-bottom'
                ]"
                :question="faq.question"
                :answer="faq.answer"
              />
            </template>
          </div>
        </div>
      </div>
    </section>
  </main>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { useAsyncData, useRuntimeConfig, useRoute } from 'nuxt/app'
import { useHead } from '@unhead/vue'
import BlockFaq from "~/components/BlockFaq.vue"

const { data: pageData } = await useAsyncData('faq', () => queryContent('/en/faq').findOne())

if (pageData.value) {
  useHead({
    title: pageData.value.pageTitle,
    meta: [
      {
        name: "description",
        content: pageData.value.pageDescription
      }
    ],
    link: [
      {
        rel: "canonical",
        href: `${useRuntimeConfig().public.siteUrl}${useRoute().path}`
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.hero-container {
  height: 300px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.433);
    z-index: 0;
  }
  .page-title {
    position: relative;
    z-index: 1;
  }
}
</style>

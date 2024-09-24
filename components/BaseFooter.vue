<template>
  <footer class="py-lg-space-xxxl py-space-xl">
    <div class="footer-container px-0 px-lg-xs">
      <div class="d-flex flex-wrap justify-content-center align-items-center">
        <h2
          class="section-title mr-md-space-lg ml-md-space-lg ml-lg-0 text-center spacing-md"
          v-html="'TAKE YOUR FIRST STEP <span class=\'activated-underline\'>NOW</span>'"
        ></h2>
        <div class="mt-lg-0 mt-space-sm">
          <a
            :href="ssoId"
            class="btn btn-adidas--primary bg-primary d-flex"
            tabindex="0"
            target="_blank"
            @click="triggerADA"
          >
            <span>ACCESS ADIDAS GLOBAL ACADEMY</span>
            <span class=" ml-space-xxs">
              <svg id="arrow-right-long" viewBox="0 0 24 24" width="25">
                <title>arrow-right-long</title>
                <path
                  d="M17.59 7l5 5-5 5M0 12h22"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div class="footer-disclaimer col-lg-8 text-center mx-auto mt-space-lg">
        <p class="text-tiny spacing-md">
          By signing into adidas Global Academy, I authorize representatives of Arizona State University and adidas to contact me with program and account updates using the contact information I have provided. Note for adidas employees, the information provided to employees as a part of official adidas training supersedes and takes priority over information—including conflicting or discrepant information—presented on adidas Global Academy. <a class='text-underline ' target='_blank' href='/docs/terms-conditions.pdf'>Terms & Conditions.</a> View our <a class='text-underline spacing-md' href='https://www.asu.edu/privacy/?_ga=2.55759339.1311039929.1590048512-1224851148.1588596004' target='_blank'>Privacy Policy.</a> Screen reader support enabled.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'
import { useAnalytics } from '@/composables/useAnalytics'

const config = useRuntimeConfig()
const { trackLinkEvent } = useAnalytics()

const ssoId = computed(() => config.public.NUXT_BASE_SSO_ID)

function triggerADA() {
  trackLinkEvent(
    "external link",
    "main content",
    "take your first step now",
    "access adidas global academy"
  )
}
</script>

<style lang="scss" scoped>
.footer-container{
  margin-top: 200px;
  margin-bottom: 100px;
}
.icon-primary {
  color: white;
  flex-shrink: 0;
  transition: color 0.7s cubic-bezier(0.3, 0, 0, 1);
  display: inline-block;
  height: 24px;
  vertical-align: text-top;
  width: 24px;
}
.btn-adidas--primary {
  display: flex;
  color: white;
  align-items: center;
  border-radius: 0;
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 50px;
  position: relative;
  transform: translate(-3px, -3px);
  @media (min-width: 992px) {
    font-size: 18px;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    transition: all 0.7s cubic-bezier(0.3, 0, 0, 1);
  }
  &:before {
    border-bottom: 1px solid var(--primary);
    border-left: 1px solid var(--primary);
    bottom: -5px;
    height: 5px;
    left: 5px;
    width: 100%;
  }
  &:after {
    border-right: 1px solid var(--primary);
    border-top: 1px solid var(--primary);
    height: 100%;
    right: -5px;
    top: 5px;
    width: 5px;
  }
  &:hover {
    color: #767677;
    .icon-primary {
      color: #767677;
    }
    }
  &:active {
    transform: translate(0, 0);
  }
  }
  .btn-adidas--primary{
    margin-left: 30px;
  }
  
</style>
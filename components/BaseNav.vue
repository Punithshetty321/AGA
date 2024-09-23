<template>
  <nav class="navbar navbar-expand-lg bg-white px-0 py-lg-0">
    <div class="container">
      <a href="/" class="navbar-brand px-space-xs" @click.prevent="triggerHomeButton">
        <img src="~/assets/images/siteLogo.png" alt="ASU adidas partnership" class="logo-image" />
        <span class="logo-text font-din-pro font-weight-bold ml-space-xxs">ADIDAS GLOBAL ACADEMY</span>
      </a>
      <button class="navbar-toggler" type="button" @click="isNavOpen = !isNavOpen">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse navbar-collapse', { 'show': isNavOpen }]" id="navbarNav">
        <ul class="navbar-nav ml-auto align-lg-items-center mt-lg-0 mt-space-sm px-space-xs">
          <li v-for="(link, i) in navLinks" :key="i" class="nav-item mr-space-xs d-flex align-items-center nav-link-height nav-link-hover">
            <a :href="link.url" class="nav-link d-flex justify-content-between header-link pb-lg-0" @click.prevent="triggerNavItem($event, link.name, link.url)">
              <span class="text">{{ link.name }}</span>
            </a>
          </li>
          <li class="nav-item my-lg-0 my-space-sm nav-link-height d-flex align-items-center">
            <a :href="ssoId" target="_blank" class="nav-link btn btn-lg-table btn-block button-ghost header-link text-uppercase d-flex align-items-center justify-content-center text-center" @click="triggerSignIn">
              <span class="cta-label" style="padding-top: 5px">Sign in with adidas sso</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'
import { useRouter } from 'vue-router'
import { useAnalytics } from '@/composables/useAnalytics'

const config = useRuntimeConfig()
const router = useRouter()
const { trackLinkEvent, trackCollapseEvent } = useAnalytics()

const ssoId = computed(() => config.public.NUXT_BASE_SSO_ID)
const isNavOpen = ref(false)

const navLinks = [
  { name: "ABOUT", url: "/#about" },
  { name: "COURSES", url: "/#courses" },
  { name: "FAQ", url: "/faq/" }
]

function triggerHomeButton() {
  trackLinkEvent("internal link", "navbar", "main navbar", "co brand adidas asu logo")
}

function triggerNavItem(event, name, url) {
  event.preventDefault()
  if (url.charAt(0) === "#") {
    const ref = document.querySelector(url)
    ref.scrollIntoView({ behavior: "smooth", block: "start" })
  } else {
    router.push(url)
  }
  trackLinkEvent("internal link", "navbar", "main navbar", name.toLowerCase())
}

function triggerSignIn() {
  trackLinkEvent("external link", "navbar", "main navbar", "sign in with adidas sso")
}
</script>

<style lang="scss" scoped>
// ... (keep the existing styles)
.header-link {
  font-weight: 700;
  width: 100%;
  @media (min-width: 992px) {
    font-weight: 700;
    width: auto;
  }
}
.nav-link-hover {
  @media (min-width: 992px) {
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid black;
    }
  }
}
.nav-link-height {
  @media (min-width: 992px) {
    height: 88px;
  }
}
#navbar-toggle-collapse {
  border-top: 1px solid #dee2e6;
  @media (min-width: 992px) {
    border: 0;
    height: 88px;
  }
}
.logo-text {
  font-size: 14px;
  @media (min-width: 992px) {
    font-size: 18px;
  }
}
.logo-image {
  width: 70px;
  @media (min-width: 992px) {
    width: 153px;
  }
}
.button-ghost {
  border: 1px solid #d3d7da;
  border-radius: 0;
  &:focus {
    outline: 0 !important;
    box-shadow: 0 0 0 0.1rem #005fcc !important;
  }
}
.button-ghost {
  padding-top: 4px;
  padding-bottom: 4px;
  .cta-label {
    padding-right: 32px;
  }
  &:hover {
    border: 1px solid black;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: 16px;
    .cta-label {
      padding-right: 16px !important;
    }
  }
}
.navbar-toggler {
  box-shadow: none;
  border: none;
  border-color: transparent;
  &:focus {
    outline: none;
  }
  .hamburger {
    .line {
      width: 30px;
      height: 2px;
      background-color: black;
      display: block;
      margin: 5px auto;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .is-active {
    .line {
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      &:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    }
  }
}
</style>
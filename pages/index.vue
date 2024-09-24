<template>
  <main>
    <!-- section hero -->
    <section
      id="hero"
      class="hero-container"
    >
      <div class="hero-content text-center">
        <h1
          class="page-title text-white text-uppercase font-adinueue font-weight-bolder"
          tabindex="-1"
          v-html="'Limitless learning.<br>Constant growth.'"
        ></h1>
      </div>
    </section>

    <!-- section about -->
    <section id="about" class=" py-lg-space-xxxl py-space-xl">
      <div class="container">
        <div class="row align-items-center px-lg-space-sm">
          <div class="col-md-7">
            <header class="col-lg-10 px-0">
              <h2 class="section-title" tabindex="-1">ACCESS YOUR UNTAPPED POTENTIAL</h2>
            </header>
            <div class="col-lg-10 px-0">
              <div class="about-lead mt-space-xs text-medium">
                <p tabindex="-1">Adidas and Arizona State University are committed to creating a better future through ongoing discovery and exploration of uncharted territories with collaborative research projects, world-class education opportunities and sport both on and off the field.</p>
              </div>
              <div class="about-invitaion mt-space-md">
                <h3 tabindex="-1" class="text-title font-weight-bold">
                  You're invited to join us:
                </h3>
                <ul class="invitation-list pl-space-xxs mt-space-xs text-medium">
                  <li tabindex="-1">Create your future.</li>
                  <li tabindex="-1">Explore your passions.</li>
                  <li tabindex="-1">Stretch yourself.</li>
                </ul>
              </div>
              <div class="about-footer text-medium">
                <p tabindex="-1">We're excited to include you in our next development - adidas Global Academy, powered by ASU.</p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="col-lg-12 mx-auto">
              <img
                src="/assets/images/about-asset.png"
                alt="adidas global academy about us"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!---section testimonial-->
    <section id="testimonial">
      <div class=" testimonial container text-center pt-space-md pt-lg-space-xl pb-space-lg pb-lg-space-xxl">
        <img src="/assets/images/quote.svg" />
        <h1 class="px-lg-space-xxl pt-space-xs pt-lg-space-md pb-space-md test-quote">
          This course taught me a lot; it was great. It was a learning experience to see different views on how to handle situations.
        </h1>
        <div
          class="bg-maroon justify-content-center mx-auto"
          style="width: 75px; height: 4px"
        ></div>
        <h3 class="pt-space-md font-weight-bold test-author">
          Mark Nakamura
        </h3>
        <p class="test-author">
          Los Altos Girls Basketball Coach
        </p>
      </div>
    </section>

    <!-- section courses -->
    <section id="courses" class="py-lg-space-xxl py-space-xl bg-theme-grey-1 position-relative">
      <div class="container position-relative">
        <div class="courses-header text-center">
          <h2 class="section-title">ACCEPT THE CHALLENGE</h2>
          <div class="courses-lead col-lg-6 mx-auto mt-lg-space-sm mt-space-xs">
            <p class="text-medium">Discover what's next on your journey. Explore our online course offerings below to see how you can pursue your passions and advance your career.</p>
          </div>
        </div>
        <div class="block-courses mt-lg-space-xl">
          <div>
            <!-- mobile -->
            <div class="pt-lg-space-xl pt-space-lg">
              <div class="container position-relative">
                <div class="row flex-nowrap overflow-auto">
                  <div v-for="(course, i) in courses" :key="i" class="col-10 col-md-4 px-space-xxs">
                    <CardProgram :course="course" class="border-0"></CardProgram>
                  </div>
                </div>
                <div v-if="courses.length > 1" class="scroll-more mt-space-xs d-md-none">
                  <p class="font-weight-bold">
                    Scroll for more<span class="ml-space-xxs">
                      <svg id="arrow-right-long" viewBox="0 0 24 24" width="16">
                        <title>arrow-right-long</title>
                        <path
                          d="M17.59 7l5 5-5 5M0 12h22"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        ></path></svg
                    ></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/courses-grids.svg"
          alt="courses grid"
          class="position-absolute image-dot-grid d-none d-lg-block"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import CardProgram from '../components/CardProgram.vue'

useHead({
  title: 'adidas Global Academy',
  meta: [
    { name: 'description', content: 'Access free online courses with adidas Global Academy to pursue your passions, advance your career and more. Explore adidas Global Academy, powered by ASU.' }
  ]
})

const courses = ref([
  {
    image: "https://courses.adidasglobalacademy.com/asset-v1:ASU+LC01+2021_1+type@asset+block@Legacy_Logo.png",
    duration: "1-3 hours",
    title: "HOW TO MAKE YOUR POINT IN 1 MINUTE OR LESS",
    text: "Understand the importance of good public speaking skills and learn a three-step process on how to structure your own pitch."
  }
])

const triggerNavClick = (action) => {
  // Implement tracking logic here
}

const triggerOwlDots = () => {
  // Implement tracking logic here
}
</script>

<style lang="scss" scoped>
.block-courses {
  z-index: 1;
  position: relative;
}
.hero-container {
  height: 400px;
  @media (min-width: 992px) {
    height: 550px;
    margin-bottom: 120px;
  }
  position: relative;
  background-image: url('~/assets/images/home-hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  

  .page-title {
    position: relative;
    z-index: 1;
  }
}

.image-dot-grid {
  right: 0;
  z-index: 0;
  bottom: -7.2rem;
}
.testimonial{
  margin-bottom: 125px;
  margin-top: 125px;
}
.block-courses{
  margin-top: 125px;
}

</style>
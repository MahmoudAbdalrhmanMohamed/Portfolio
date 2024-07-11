<template>
  <section
    id="home"
    class="dark:bg-slate-900 pt-8 pb-16 bg-gray-200 heroSection gap-16 px-16 w-screen flex flex-col justify-center"
  >
    <div class="flex flex-col md:gap-x-48 md:flex-row items-center justify-between">
      <transition appear @before-enter="beforeEnter">
        <div class="flex flex-col gap-4 order-2 md:order-1">
          <h1 class="text-4xl font-semibold frontend">{{ $t('homeSection.heading') }}</h1>
          <p class="text-gray-600 dark:text-gray-200">
            {{ $t('homeSection.paragraph') }}
          </p>
          <iconComponent :mode="mode"/>
        </div>
      </transition>
      <transition appear name="left">
        <img
          src="@/assets/images/image.webp"
          style="animation: imageAnimation 8s alternate ease-in-out infinite"
          alt="Portfolio Image"
          id="imageId"
          class="bg-transparent order-1 md:order-2 rounded-full w-48 border-2 border-slate-600 dark:border-gray-300 dark:bg-slate-700"
        />
      </transition>
    </div>
    <transition appear @before-enter="beforeEnterSkills">
      <div class="flex flex-col items-center justify-center gap-4">
        <p class="frontend font-bold text-4xl capitalize">{{ $t('homeSection.skills') }}</p>
        <div class="flex gap-4 flex-wrap justify-start items-start">
          <img src="@/assets/images/html.svg" class="stack-skills" alt="skill img" />
          <img src="@/assets/images/css.svg" class="stack-skills" alt="skill img" />
          <img src="@/assets/images/js.svg" class="stack-skills" alt="skill img" />
          <img src="@/assets/images/vue.svg" class="stack-skills" alt="skill img" />
          <img src="@/assets/images/vitest.svg" class="stack-skills" alt="skill img" />
          <img src="@/assets/images/pinia.svg" class="stack-skills" alt="skill img" />
          <img src="@/assets/images/vite.svg" title="budle" class="stack-skills" alt="skill img" />
          <img src="@/assets/images/gsap.svg" class="stack-skills" alt="skill img" />
          <img
            src="@/assets/images/tailwindcss.svg"
            title="Tailindcss Styling Framework"
            class="stack-skills"
          />
          <img
            v-if="mode === 'light'"
            src="@/assets/images/progressiveWebApps.svg"
            title="Progressive Web Apps for offline mode"
            class="stack-skills"
            alt="skill img"
          />
          <img
            v-else
            src="@/assets/images/progressiveWebApps_white.svg"
            title="Progressive Web Apps for offline mode"
            class="stack-skills"
            alt="skill img"
          />
          <img
            v-if="mode === 'light'"
            src="@/assets/images/internationalization.svg"
            title="Internationalization for translating to multi languages"
            class="stack-skills"
          />
          <img
            v-else
            src="@/assets/images/internationalization_white.svg"
            title="Internationalization for translating to multi languages"
            class="stack-skills"
            alt="skill img"
          />
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import gsap from 'gsap'
import iconComponent from './iconsComponent.vue'
export default {
  props: ['mode'],
  components: {
    iconComponent
  },
  methods: {
    beforeEnter(el) {
      gsap.from(el, {
        x: -100
      })
    },
    beforeEnterSkills(el) {
      gsap.from(el, {
        y: 100
      })
    }
  }
}
</script>
<style>
.left-enter-from {
  transform: translateX(40px);
}
.left-enter-to {
  transform: translateX(0);
}
.left-enter-active {
  transition: 1s;
}
</style>

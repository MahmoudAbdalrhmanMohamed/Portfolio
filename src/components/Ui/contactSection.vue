<template>
  <section id="contact" class="contact flex flex-col px-16 gap-5">
    <h5 class="text-blue-500 font-bold text-2xl uppercase">{{ $t('header.contact') }}</h5>
    <h6 class="text-4xl font-bold capitalize">{{ $t('contactSection.paragraph') }} 👇</h6>
    <div class="flex flex-col md:flex-row gap-5">
      <i
        class="fa-regular fa-envelope text-blue-500 font-semibold rounded-full border-2 dark:border-slate-700 dark:shadow-slate-700 shadow-lg border-white text-2xl w-12 h-12 grid place-items-center"
      ></i>
      <div class="flex flex-col">
        <p class="font-bold text-lg">Mail</p>
        <a href="mailto:mahmoudabdalrahman59200@gmail.com" class="text-gray-400">
          mahmoudabdalrahman59200@gmail.com
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('#contact', {
    x:-150,
    scrollTrigger: {
      trigger: '#contact',
      start: 'top center',
      end: 'bottom center',
      scrub: true
    }
  })
})
</script>

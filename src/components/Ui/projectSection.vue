<template>
  <section
    class="projectSection bg-gray-200 px-16 my-16 w-screen dark:bg-slate-900 h-96 flex items-center justify-center"
  >
    <div>
      <p id="project" class="text-3xl md:text-6xl py-8 capitalize">{{ $t('project.new') }} .. 🤠</p>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from("#project", {
      rotateY:90,
      scrollTrigger: {
        trigger: '#project',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    })
 

})
</script>

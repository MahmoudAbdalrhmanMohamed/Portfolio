<template>
  <section
    id="about"
    class="aboutMe flex items-start justify-start flex-col lg:flex-row px-16 gap-16"
  >
    <img id="img" :src="url2" class="aspect-video shadow-2xl max-h-80 rounded-lg" alt="" />

    <div id="content" class="flex flex-col gap-4 m-auto text-wrap">
      <h3 class="text-2xl text-blue-500 font-semibold uppercase">{{ $t('aboutMe.heading') }}</h3>
      <h4 class="text-5xl capitalize">{{ $t('aboutMe.semiHeading') }}</h4>
      <pre class="text-gray-400 text-wrap capitalize"
        >{{ $t('aboutMe.paragraph') }}
        </pre
      >
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const url2 = 'https://i.imghippo.com/files/BasOF1720528738.jpg'

gsap.registerPlugin(ScrollTrigger)

const animation = function animationfun(selector,x){
gsap.from(selector, {
    opacity:0,
    duration:5,
    x,
    scrollTrigger: {
      trigger: '#img',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    }
  })
}

onMounted(() => {
  animation("#img",-150);
  animation("#content",150);

})
</script>

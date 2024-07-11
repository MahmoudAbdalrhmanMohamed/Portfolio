<template>
  <transition name="fade" appear>
    <header
      ref="headerRef"
      class="top-0 z-50 sticky w-full gap-4 dark:bg-slate-900/[0.1] dark:border-slate-500 flex justify-start items-center px-2 py-3 md:py-0 rounded-b-xl backdrop-blur-xl bg-transparent border-b-2 shadow-lg bg-gradient-to-r from-black/[0.2] to-white/[0.3]"
    >
      <div class="logo ml-1 mr-4 hidden md:block" ref="logoRef">
        <img src="./assets/images/logo.png" class="w-24" alt="logo img" />
      </div>
        <nav
          ref="navBar"
          class="hidden basis-10/12 text-2xl md:flex flex-col md:flex-row md:text-xl items-center gap-8 justify-start"
        >
          <a aria-label="link tag" name="link" class="routerlinkclass" href="#home">{{ $t('header.home') }}</a>
          <a aria-label="link tag" name="link" class="routerlinkclass" href="#about">{{ $t('header.about') }}</a>
          <a aria-label="link tag" name="link" class="routerlinkclass" href="#project">{{ $t('header.projects') }}</a>
          <a aria-label="link tag" name="link" class="routerlinkclass" href="#contact">{{ $t('header.contact') }}</a>
        </nav>
      
      <div class="close_btn hidden basis-2/12 self-start" ref="close">
        <i class="fa-solid fa-xmark text-4xl cursor-pointer" @click="closeNavBar"></i>
      </div>

      <div class="toggle_nav flex flex-row md:hidden basis-10/12" ref="toggle">
        <i @click="navBarToggle" class="fa-solid fa-list text-4xl cursor-pointer"></i>
      </div>

      <div class="basis-1/12" ref="langRef">
        <div @click.prevent="toggleLangFun" class="capitalize cursor-pointer text-xl">
          {{ currentLocal }}
        </div>
      </div>

      <div class="toggle_mode basis-1/12 cursor-pointer" @click="toggleModeFun" ref="mode">
        <img src="@/assets/images/sun.svg" class="w-8" alt="sun img" v-if="!toggleLightIcon">
        <img src="@/assets/images/moon.svg" class="w-8" alt="sun img" v-else>
        
      </div>
    </header>
  </transition>
  <main class="gap-8 flex flex-col justify-start items-start">
    <homeSection :mode="mode" />

    <aboutSection />

    <projectSection />

    <contactSection :mode="mode"/>

    <footerSection :mode="mode" />
  </main>
</template>

<script>
import homeSection from '@/components/Ui/homeSection.vue'
import aboutSection from '@/components/Ui/aboutSection.vue'
import projectSection from '@/components/Ui/projectSection.vue'
import contactSection from '@/components/Ui/contactSection.vue'
import footerSection from '@/components/Ui/footerSection.vue'

export default {
  data() {
    return {
      mode: '',
      lang: '',
      navShow: true
    }
  },
  components: {
    homeSection,
    aboutSection,
    projectSection,
    contactSection,
    footerSection
  },

  computed: {
    toggleLightIcon() {
      return this.mode === 'light'
    },
    currentLocal() {
      return this.lang === 'en' ? 'english' : 'frensh'
    }
  },

  methods: {
    closeNavBar() {
      this.$refs.navBar.classList.add('hidden')
      this.$refs.navBar.classList.remove('h-screen')
      this.$refs.close.classList.add('hidden')
      this.$refs.toggle.classList.remove('hidden')
      this.$refs.mode.classList.remove('hidden')
      this.$refs.langRef.classList.remove('hidden')
      this.$refs.headerRef.classList.remove('w-4/6')
    },
    navBarToggle() {
      this.$refs.navBar.classList.remove('hidden')
      this.$refs.navBar.classList.add('h-screen')
      this.$refs.close.classList.remove('hidden')
      this.$refs.toggle.classList.add('hidden')
      this.$refs.mode.classList.add('hidden')
      this.$refs.langRef.classList.add('hidden')
      this.$refs.headerRef.classList.add('w-4/6')
    },
    checkModeFun() {
      if (
        !localStorage.getItem('mode') &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        this.mode = 'dark'
        localStorage.setItem('mode', this.mode)
      } else if (localStorage.getItem('mode') === 'dark') {
        this.mode = 'dark'
      } else {
        this.mode = 'light'
        localStorage.setItem('mode', this.mode)
        document.querySelector('html').classList.remove('dark')
      }
    },
    checkLangFun() {
      if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en')
        this.lang = 'en'
        this.$i18n.locale = this.lang
      } else if (localStorage.getItem('language') === 'en') {
        this.lang = 'en'
        this.$i18n.locale = this.lang
      } else {
        this.lang = 'fr'
        this.$i18n.locale = this.lang
      }
    },
    toggleModeFun() {
      if (localStorage.getItem('mode') === 'dark') {
        localStorage.setItem('mode', 'light')
        this.mode = 'light'
        document.querySelector('html').classList.remove('dark')
      } else {
        localStorage.setItem('mode', 'dark')
        this.mode = 'dark'
        document.querySelector('html').classList.add('dark')
      }
    },
    toggleLangFun() {
      if (localStorage.getItem('language') === 'en') {
        this.lang = 'fr'
        this.$i18n.locale = this.lang
        localStorage.setItem('language', this.lang)
      } else {
        this.lang = 'en'
        this.$i18n.locale = this.lang
        localStorage.setItem('language', this.lang)
      }
    }
  },
  mounted() {
    this.checkModeFun()
    this.checkLangFun()
  }
}
</script>

<style>
.fade-enter-from,.fade-leave-to{
transform: translateY(-100px);
}
.fade-enter-to,.fade-leave-from{
transform: translateY(0);
}
.fade-enter-active,.fade-leave-active{
transition: 1s;
}
</style>
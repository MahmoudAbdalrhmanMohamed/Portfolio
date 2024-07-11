<template>
  <section
    class="footer dark:text-gray-300 py-16 bg-gray-200 mt-16 px-16 flex flex-col items-center justify-center w-screen dark:bg-slate-900"
  >
    <article class="text-3xl capitalize">{{ $t('footer.copyRigth') }}</article>
    <article>
      <iconComponent :mode="mode" />
    </article>
  </section>
</template>
<script>
import iconComponent from './iconsComponent.vue'
export default {
  props: ['mode'],
  components: {
    iconComponent
  }
}
</script>

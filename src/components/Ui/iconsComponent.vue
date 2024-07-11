<template>
  <div class="flex">
    <a
      aria-label="link tag"
      name="link"
      href="https://www.linkedin.com/in/mahmoud-abdalrahman-2baa81197/"
      class="text-4xl group"
      target="_blank"
    >
      <img
        class="w-8"
        v-if="mode === 'dark'"
        src="@/assets/images/linkedin-white.svg"
        alt="linkedin"
      />
      <img class="w-8" v-else src="@/assets/images/linkedin.svg" alt="linkedin" />
    </a>
    <a
      aria-label="link tag"
      name="link"
      href="https://github.com/MahmoudAbdalrhmanMohamed"
      class="text-4xl mx-4 group"
      target="_blank"
    >
      <img class="w-8" v-if="mode === 'dark'" src="@/assets/images/github-white.svg" alt="github" />
      <img class="w-8" v-else src="@/assets/images/github.svg" alt="github" />
    </a>
  </div>
</template>
<script>
export default{
    props:['mode']
}
</script>
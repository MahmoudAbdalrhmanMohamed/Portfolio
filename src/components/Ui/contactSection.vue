<template>
  <section id="contact" class="contact flex flex-col px-16 gap-5">
    <p class="text-blue-700 font-bold text-lg md:text-2xl uppercase">
      {{ $t('header.contact') }}
    </p>
    <p class="text-xl md:text-4xl font-bold capitalize">
      {{ $t('contactSection.paragraph') }} 👇
    </p>
    <div class="flex flex-col md:flex-row gap-5">
      <i
        class="fa-regular fa-envelope text-blue-700 font-semibold rounded-full border-2 dark:border-slate-700 dark:shadow-slate-700 shadow-lg border-white text-2xl w-12 h-12 grid place-items-center"
      ></i>
      <div class="flex flex-col">
        <p class="font-bold text-lg">Mail</p>
        <a aria-label="link tag" name="link"
          href="mailto:mahmoudabdalrahman59200@gmail.com"
          class="break-all text-gray-600 font-bold"
        >
          mahmoudabdalrahman59200@gmail.com
        </a>
      </div>
    </div>
  </section>
</template>

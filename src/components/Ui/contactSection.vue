<template>
  <section id="contact" class="contact flex flex-col px-16 gap-5">
    <p class="text-blue-700 font-bold text-lg md:text-2xl uppercase dark:text-blue-400">
      {{ $t('header.contact') }}
    </p>
    <p class="text-xl md:text-4xl font-bold capitalize">{{ $t('contactSection.paragraph') }} 👇</p>
    <div class="flex flex-col md:flex-row gap-5">
      <img
        src="@/assets/images/mail.svg"
        class="w-8 border-1 shadow-md dark:shadow-slate-700  dark:border-salte-700 rounded-full"
        alt="mail img"
      />

      <div class="flex flex-col">
        <p class="font-bold text-lg">Mail</p>
        <a
          aria-label="link tag"
          name="link"
          href="mailto:mahmoudabdalrahman59200@gmail.com"
          class="break-all text-gray-600 font-bold dark:text-gray-200"
        >
          mahmoudabdalrahman59200@gmail.com
        </a>
      </div>
    </div>
  </section>
</template>

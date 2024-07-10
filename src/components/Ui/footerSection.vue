<template>
  <section
    class="footer dark:text-gray-300 py-16 bg-gray-200 mt-16 px-16 flex flex-col items-center justify-center w-screen dark:bg-slate-900"
  >
    <article class="text-3xl capitalize">{{ $t('footer.copyRigth') }}</article>
    <article>
      <div>
        <a aria-label="link tag" name="link"
          href="https://www.linkedin.com/in/mahmoud-abdalrahman-2baa81197/"
          class="text-4xl group"
          target="_blank"
        >
          <i
            class="fa-brands fa-linkedin hover:text-blue-600 hover:scale-125 transition duration-300"
          ></i>
        </a>
        <a aria-label="link tag" name="link"
          href="https://github.com/MahmoudAbdalrhmanMohamed"
          class="text-4xl mx-4 group"
          target="_blank"
        >
          <i
            class="fa-brands fa-github hover:text-blue-600 hover:scale-125 transition duration-300"
          ></i>
        </a>
      </div>
    </article>
  </section>
</template>

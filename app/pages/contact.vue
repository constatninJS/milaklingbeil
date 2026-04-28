<script setup lang="ts">
import { container } from '#build/ui';

</script>

<template>
  <div class="pt-6 pb-4 px-3">
    <div class="text-black uppercase text-3xl sm:text-5xl lg:text-8xl block">
      MK-PORTFOLIO
    </div>
    <NuxtLink to="/"
      class="text-black px-21.5 uppercase hover:text-red-600 text-lg md:text-2xl lg:text-3xl tracking-wide whitespace-nowrap leading-none block">
      Mila Mai Blum Klingbeil
    </NuxtLink>
  </div>

  <header class="bg-white h-14 flex items-center justify-center px-4 md:px-6">
    <nav class="hidden md:flex gap-4 lg:gap-8">
      <NuxtLink to="/contact"
        class="text-black font-bold uppercase text-lg lg:text-3xl tracking-wide hover:text-red-600">
        contact
      </NuxtLink>
    </nav>

    <!-- Hamburger Menu tbd-->
    <button class="md:hidden ml-auto text-black">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </header>
  <div class="h-px bg-black"></div>

  <div class="flex p-2 pb-5  mt-10 justify-center text-black min-h-screen text-center">
  <div class="uppercase text-xl md:text-2xl space-y-2">
    <p>Mila Mai Blum Klingbeil</p>
    <p>Bachelor of Arts at HTW Berlin</p>
    <p>4th semester and ongoing</p>
    <p class="mt-10">For further inquiries please reach out to</p>
    <a href="mailto:info@milaklingbeil.de" class="underline font-bold hover:text-red-600">
      info@milaklingbeil.de
    </a>
  </div>
</div>
</template>
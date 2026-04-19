<script setup lang="ts">
import { container } from '#build/ui';

</script>

<template>
    <!--Header-->
  <header class="bg-white h-14 flex items-center px-4 md:px-6">
    <NuxtLink to="/" class="text-black uppercase text-lg md:text-2xl lg:text-3xl tracking-wide whitespace-nowrap">
      Mila Mai Blum Klingbeil
    </NuxtLink>

    <!-- NavBar-->
    <nav class="hidden md:flex gap-4 lg:gap-8 ml-8 lg:ml-50">
      <NuxtLink to="/works" class="text-black uppercase text-lg lg:text-3xl tracking-wide hover:text-red-600">
        works
      </NuxtLink>
      <NuxtLink to="/contact" class="text-black uppercase text-lg lg:text-3xl tracking-wide hover:text-red-600">
        contact
      </NuxtLink>
    </nav>

    <!-- Hamburger Menu tbd-->
    <button class="md:hidden ml-auto text-black">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </header>
  <div class="h-px bg-black"></div>

  <div class="flex items-center justify-center text-black min-h-screen text-center">
  <div>
    <p class="uppercase mb-4 text-3xl md:text-3xl">
      For further inquiries please reach out to
    </p>
    <a href="mailto:info@milaklingbeil.de" class="underline uppercase hover:text-red-600 text-xl md:text-3xl">
      info@milaklingbeil.de
    </a>
  </div>
</div>
</template>
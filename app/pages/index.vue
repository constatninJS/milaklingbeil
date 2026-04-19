<script>
import { works } from '~/data/works'
</script>


<template>
  <!-- Hero Title -->
  <div class="pt-5 pb-5 px-3">
    <div class="text-black uppercase text-4xl sm:text-6xl lg:text-9xl">
      MK-PORTFOLIO-2026
    </div>
  </div>

  <!--Header-->
  <header class="bg-white h-14 flex items-center px-2 md:px-3">
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
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </header>
  <div class="h-px bg-black"></div>

  <!-- Intro -->
  <div class="pt-5 pb-5 px-3 md:px-6">
    <div class="text-black uppercase text-justify text-xl md:text-2xl lg:text-4xl">
      <div>
        >> Berlin-based Communication Design student.
        Moving between photography, animation, graphic and exhibition design, across both digital and physical spaces.
        My work focuses on projects where image, motion and space come together, and where ideas develop through both
        experimentation and structure. I work with contrast, combining clear and rough elements, with a focus on mood,
        composition and detail.
        Open for collaborations, projects or conversations. Feel free to
        <NuxtLink to="/contact" class="hover:text-red-600"> get in touch.</NuxtLink>
        << <div class="text-black uppercase text-xl md:text-2xl lg:text-4xl leading-tight mt-20">
          latest work
      </div>
    </div>

    <div class="grid grid-cols-4 gap-4 mt-1">
      <NuxtLink to="/works">
        <img src="/works/tob_no_bg2.png" class="w-full h-auto object-contain" />
      </NuxtLink>
      <NuxtLink to="/works">
        <img src="/works/tob_no_bg1.png" class="w-full h-auto object-contain" />
      </NuxtLink>
      <NuxtLink to="/works">
        <img src="/works/tob_no_bg3.png" class="w-full h-auto object-contain" />
      </NuxtLink>
      <NuxtLink to="/works">
        <img src="/works/tob_no_bg4.png" class="w-full h-auto object-contain" />
      </NuxtLink>
    </div>
  </div>
  </div>
</template>
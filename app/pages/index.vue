<script setup>
import { ref, computed } from 'vue'
import { works } from '~/data/works'

const hoveredWork = ref(null)
const selectedWork = ref(null)
const zoomedMedia = ref(null)
const zoomedIsVideo = ref(false)
const mediaList = ref([])
const mediaIndex = ref(0)
const sortKey = ref(null)
const sortDir = ref(1)

function toggleWork(work) {
  selectedWork.value = selectedWork.value?.id === work.id ? null : work
}

function isVideo(src) {
  return src?.endsWith('.mp4') || src?.endsWith('.mov')
}

function openMedia(src, index, images) {
  mediaList.value = images
  mediaIndex.value = index
  zoomedMedia.value = src
  zoomedIsVideo.value = isVideo(src)
}

function prevMedia() {
  if (mediaIndex.value > 0) {
    mediaIndex.value--
    zoomedMedia.value = mediaList.value[mediaIndex.value]
    zoomedIsVideo.value = isVideo(zoomedMedia.value)
  }
}

function nextMedia() {
  if (mediaIndex.value < mediaList.value.length - 1) {
    mediaIndex.value++
    zoomedMedia.value = mediaList.value[mediaIndex.value]
    zoomedIsVideo.value = isVideo(zoomedMedia.value)
  }
}

function toggleSort(key) {
  if (sortKey.value === key) {
    sortDir.value *= -1
  } else {
    sortKey.value = key
    sortDir.value = 1
  }
}

const sortedWorks = computed(() => {
  if (!sortKey.value) return works
  return [...works].sort((a, b) => {
    const aVal = a[sortKey.value]
    const bVal = b[sortKey.value]
    if (aVal < bVal) return -1 * sortDir.value
    if (aVal > bVal) return 1 * sortDir.value
    return 0
  })
})

function rowIsActive(work) {
  if (selectedWork.value) return selectedWork.value.id === work.id
  if (hoveredWork.value) return hoveredWork.value.id === work.id
  return true
}
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

  <header class="bg-white h-14 flex items-center justify-end px-4 md:px-6">
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

  <!-- Intro -->
  <div class="pt-10 pb-25 px-3 md:px-6">
    <div class="text-black uppercase text-left text-xl md:text-2xl lg:text-4xl">
      >> Berlin-based Communication Design student.
      Moving between photography, animation, graphic and exhibition design, across both digital and physical spaces.
      My work focuses on projects where image, motion and space come together, and where ideas develop through both
      experimentation and structure. I work with contrast, combining clear and rough elements, with a focus on mood,
      composition and detail.
      Open for collaborations, projects or conversations. Feel free to
      <NuxtLink to="/contact" class="hover:text-red-600 font-bold"> get in touch.</NuxtLink>
      << </div>
    </div>


    <!-- Tabelle -->
    <div class="px-21.5 pb-5 py-5 text-lg md:text-xl lg:text-2xl">
      <!-- Tabelle Header -->
      <div class="grid grid-cols-3 w-full pb-1 mb-1 text-sm uppercase text-black">
        <span class="flex items-center gap-1">
          Title
          <button class="hover:text-red-600 transition-colors"
            :class="sortKey === 'title' ? 'text-red-600' : 'text-black/40'" @click="toggleSort('title')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
              <path fill-rule="evenodd"
                d="M13.78 10.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V5.75a.75.75 0 0 1 1.5 0v5.69l.97-.97a.75.75 0 0 1 1.06 0ZM2.22 5.53a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v5.69a.75.75 0 0 1-1.5 0V4.56l-.97.97a.75.75 0 0 1-1.06 0Z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </span>
        <span>
          <span class="whitespace-nowrap">Category</span>
        </span>
        <span class="text-right flex items-center justify-end gap-1">
          Year
          <button class="hover:text-red-600 transition-colors"
            :class="sortKey === 'year' ? 'text-red-600' : 'text-black/40'" @click="toggleSort('year')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
              <path fill-rule="evenodd"
                d="M13.78 10.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V5.75a.75.75 0 0 1 1.5 0v5.69l.97-.97a.75.75 0 0 1 1.06 0ZM2.22 5.53a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v5.69a.75.75 0 0 1-1.5 0V4.56l-.97.97a.75.75 0 0 1-1.06 0Z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </span>
      </div>

      <!-- Rows -->
      <template v-for="work in sortedWorks" :key="work.id">
        <div class="grid grid-cols-3 w-full pb-1 mb-1 uppercase py-2 cursor-pointer transition-colors duration-200"
          :class="rowIsActive(work) ? 'text-black' : 'text-black/25'" @mouseenter="hoveredWork = work"
          @mouseleave="hoveredWork = null" @click="toggleWork(work)">
          <span class="whitespace-nowrap truncate pr-2">{{ work.title }}</span>
          <span class="whitespace-nowrap truncate">{{ work.category }}</span>
          <span class="text-right whitespace-nowrap">{{ work.year }}</span>
        </div>

        <!-- Accordion-Bereich -->
        <Transition name="accordion">
          <div v-if="selectedWork?.id === work.id" class="mb-4 overflow-hidden">

            <!-- Mobile Layout -->
            <div class="flex flex-col gap-4 py-4 md:hidden">
              <div class="flex flex-col gap-2 text-sm uppercase text-black">
                <p class="text-base text-black uppercase underline">{{ work.title }}</p>
                <p class="text-justify normal-case text-xs">{{ work.description }}</p>
                <div class="mt-2 flex flex-col gap-1 text-black/60 text-xs">
                  <span>{{ work.category }}</span>
                  <span>{{ work.year }} @ Mila Klingbeil</span>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <template v-for="(src, i) in work.images" :key="i">
                  <video v-if="isVideo(src)" :src="src" loop controls class="w-full h-32 object-contain cursor-pointer"
                    @click.stop="openMedia(src, i, work.images)" />
                  <img v-else :src="src" class="w-full h-32 object-contain cursor-pointer"
                    @click.stop="openMedia(src, i, work.images)" />
                </template>
              </div>
            </div>

            <!-- Desktop Layout -->
            <div class="hidden md:flex gap-6 py-6">
              <div class="w-64 shrink-0 flex flex-col gap-4 text-sm uppercase text-black">
                <p class="text-left uppercase">{{ work.description }}</p>
                <div class="mt-4 flex flex-col gap-1 text-black/60">
                  <span>{{ work.category }}</span>
                  <span>{{ work.year }} @ Mila Klingbeil</span>
                </div>
              </div>
              <div class="flex-1 grid grid-cols-3 gap-3">
                <template v-for="(src, i) in work.images" :key="i">
                  <video v-if="isVideo(src)" :src="src" loop class="w-full h-40 object-contain cursor-pointer"
                    @click.stop="openMedia(src, i, work.images)" />
                  <img v-else :src="src" class="w-full h-40 object-contain cursor-pointer"
                    @click.stop="openMedia(src, i, work.images)" />
                </template>
              </div>
            </div>
          </div>
        </Transition>
      </template>
    </div>

    <!-- Fixed centered media overlay (Tabellen-Hover) -->
    <div v-if="hoveredWork && !selectedWork"
      class="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <video v-if="isVideo(hoveredWork.img)" :src="hoveredWork.img" autoplay loop
        class="max-w-xl max-h-[70vh] object-contain" />
      <NuxtImg v-else :src="hoveredWork.img" :alt="hoveredWork.title" class="max-w-xl max-h-[70vh] object-contain" />
    </div>

    <!-- Lightbox -->
    <Transition name="fade">
      <div v-if="zoomedMedia" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 cursor-zoom-out"
        @click="zoomedMedia = null">

        <!-- Navigation Arrows-->
        <div class="relative flex items-center justify-center" @click.stop>
          <button v-if="mediaIndex > 0" @click.stop="prevMedia"
            class="absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer select-none pr-2">
            <
          </button>

          <video v-if="zoomedIsVideo" :src="zoomedMedia" autoplay loop
            class="max-w-[90vw] max-h-[90vh] object-contain" />
          <img v-else :src="zoomedMedia" class="max-w-[90vw] max-h-[90vh] object-contain" />

          <button v-if="mediaIndex < mediaList.length - 1" @click.stop="nextMedia"
            class="absolute right-0 translate-x-full top-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer select-none pl-2">
            >
          </button>
        </div>
      </div>
    </Transition>
</template>


<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.7s ease, opacity 0.7s ease;
  max-height: 1000px;
  opacity: 1;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
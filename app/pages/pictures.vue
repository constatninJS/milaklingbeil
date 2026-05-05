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
  <!-- Rows -->
  <template v-for="work in sortedWorks" :key="work.id">
    <NuxtImg v-if="!isVideo(work.img)" :src="work.img" preload hidden fit="inside" quality="80" width="600" height="600" />
    <template v-for="(src, i) in work.images" :key="i">
      <NuxtImg v-if="!isVideo(src)" :src="src" :quality="80" fit="inside" width="100" height="100"/>
      <NuxtImg v-if="!isVideo(src)" :src="src" :quality="90" fit="inside" width="1200" height="1200"/>
    </template>
  </template>
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
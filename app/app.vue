<script setup>
useHead({
  title: 'Mila Klingbeil',
  meta: [
    { name: 'description', content: 'I love you <3' }
  ]
})
</script>

<template>
  <div class="overflow-y-scroll h-screen">
    <UMain>
      <NuxtPage />
    </UMain>
    <footer class="bg-white px-6 py-4">
      <div class="flex items-center gap-2">
        <NuxtImg src="works/mK_logo.jpg" class="w-8 h-7 object-contain" />
        <span class="text-sm text-black">MILA KLINGBEIL © {{ new Date().getFullYear() }}</span>
      </div>
    </footer>
  </div>
</template>

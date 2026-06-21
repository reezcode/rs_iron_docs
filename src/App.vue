<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen font-sans text-gray-800 bg-white dark:bg-slate-900 dark:text-slate-100 selection:bg-rs-blue selection:text-white transition-colors duration-300">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

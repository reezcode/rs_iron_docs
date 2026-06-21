<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <nav class="fixed top-0 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-gray-100 dark:border-slate-800 z-50 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-2 font-bold text-xl text-rs-blue dark:text-blue-400 hover:opacity-80 transition-opacity">
        <div class="w-6 h-6 rounded bg-rs-blue dark:bg-blue-500 flex items-center justify-center text-white text-xs">Rs</div>
        Iron
      </router-link>
      <div class="flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-slate-400">
        <router-link :to="{ path: '/', hash: '#features' }" class="hover:text-rs-blue dark:hover:text-blue-400 transition-colors">Features</router-link>
        <router-link :to="{ path: '/', hash: '#comparisons' }" class="hover:text-rs-blue dark:hover:text-blue-400 transition-colors">Comparisons</router-link>
        <router-link :to="{ path: '/', hash: '#bloc' }" class="hover:text-rs-blue dark:hover:text-blue-400 transition-colors">RsIron + BLoC</router-link>
        <router-link to="/docs" class="hover:text-rs-blue dark:hover:text-blue-400 transition-colors" active-class="text-rs-blue dark:text-blue-400 font-semibold">Docs</router-link>
        <a href="https://github.com/reezcode/rs_iron" target="_blank" class="hover:text-rs-blue dark:hover:text-blue-400 transition-colors">GitHub</a>
        
        <!-- Dark Mode Toggle -->
        <button @click="toggleDark()" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-rs-blue text-gray-400 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white" aria-label="Toggle dark mode">
          <Moon v-if="!isDark" class="w-5 h-5" />
          <Sun v-else class="w-5 h-5 text-yellow-400" />
        </button>
      </div>
    </div>
  </nav>
</template>

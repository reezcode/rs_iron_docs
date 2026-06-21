<script setup lang="ts">
import { ref, computed } from 'vue'
import { docSections } from '../config/docs'

const activeSection = ref(docSections[0].id)

// Group sections by category
const gettingStartedSections = computed(() => 
  docSections.filter(s => s.category === 'Getting Started')
)
const apiReferenceSections = computed(() => 
  docSections.filter(s => s.category === 'API Reference')
)
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 pt-24 pb-16">
    <!-- Sidebar -->
    <aside class="w-full md:w-64 flex-shrink-0">
      <div class="sticky top-32">
        <h3 class="font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">Getting Started</h3>
        <ul class="space-y-3 border-l border-gray-200 dark:border-slate-800">
          <li v-for="section in gettingStartedSections" :key="section.id">
            <a 
              :href="'#' + section.id" 
              @click="activeSection = section.id"
              class="block pl-4 py-1 text-sm transition-all duration-200"
              :class="activeSection === section.id ? 'text-rs-blue dark:text-blue-400 border-l-2 border-rs-blue dark:border-blue-400 -ml-[1px] font-medium' : 'text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white border-l-2 border-transparent -ml-[1px]'"
            >
              {{ section.sidebarTitle }}
            </a>
          </li>
        </ul>

        <h3 class="font-semibold text-gray-900 dark:text-white mb-4 mt-8 tracking-tight">API Reference</h3>
        <ul class="space-y-3 border-l border-gray-200 dark:border-slate-800">
          <li v-for="section in apiReferenceSections" :key="section.id">
            <a 
              :href="'#' + section.id" 
              @click="activeSection = section.id"
              class="block pl-4 py-1 text-sm transition-all duration-200"
              :class="activeSection === section.id ? 'text-rs-blue dark:text-blue-400 border-l-2 border-rs-blue dark:border-blue-400 -ml-[1px] font-medium' : 'text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white border-l-2 border-transparent -ml-[1px]'"
            >
              {{ section.sidebarTitle }}
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 max-w-3xl prose prose-slate dark:prose-invert max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-a:text-rs-blue dark:prose-a:text-blue-400 prose-pre:bg-[#0d1117] dark:prose-pre:bg-slate-950 prose-pre:border prose-pre:border-[#1e2329] dark:prose-pre:border-slate-800 prose-pre:shadow-xl">
      <div 
        v-for="section in docSections" 
        :key="section.id" 
        :id="section.id" 
        class="mb-20 scroll-mt-32"
      >
        <template v-for="(block, index) in section.blocks" :key="index">
          <h1 v-if="block.type === 'h1'" class="text-4xl text-gray-900 dark:text-white mb-4">{{ block.content }}</h1>
          <h2 v-else-if="block.type === 'h2'" class="text-3xl text-gray-900 dark:text-white mb-6 mt-12">{{ block.content }}</h2>
          <h3 v-else-if="block.type === 'h3'" class="text-2xl text-gray-900 dark:text-white mt-12 mb-6">{{ block.content }}</h3>
          
          <p v-else-if="block.type === 'p-lead'" class="text-lg text-gray-600 dark:text-slate-300 mb-8 leading-relaxed" v-html="block.content"></p>
          <p v-else-if="block.type === 'p'" class="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed" v-html="block.content"></p>
          
          <ul v-else-if="block.type === 'list'" class="list-disc pl-5 space-y-4 text-gray-600 dark:text-slate-300">
            <li v-for="(item, i) in block.items" :key="i" v-html="item"></li>
          </ul>

          <div v-else-if="block.type === 'api-list'" class="space-y-8">
            <div v-for="(item, i) in block.items" :key="i">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2"><code v-html="item.name"></code></h4>
              <p class="text-gray-600 dark:text-slate-300" v-html="item.description"></p>
            </div>
          </div>
          
          <div v-else-if="block.type === 'code'">
            <div v-if="block.isWindow" class="bg-[#0d1117] dark:bg-slate-950 rounded-2xl p-6 font-mono text-sm shadow-xl overflow-x-auto border border-[#1e2329] dark:border-slate-800 mb-8">
              <div class="flex gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <highlightjs :language="block.language" :code="block.content" class="!bg-transparent !p-0 !m-0" />
            </div>
            <div v-else class="bg-gray-50 dark:bg-slate-900/50 rounded-2xl p-5 font-mono text-sm text-gray-800 dark:text-slate-200 mb-8 border border-gray-100 dark:border-slate-800 shadow-sm">
              <highlightjs :language="block.language" :code="block.content" class="!bg-transparent !p-0 !m-0" />
            </div>
          </div>
        </template>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Scoped styles are largely unneeded with the Tailwind Typography plugin */
</style>

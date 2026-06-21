<script setup lang="ts">
import { PlayCircle, ShieldCheck, Zap, Layers } from 'lucide-vue-next'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      
      <!-- Aceternity-style Animated Grid Background -->
      <div class="absolute inset-0 z-0 bg-grid-pattern animate-pan-grid pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"></div>
      
      <!-- Content -->
      <header class="relative z-10 pt-40 pb-20 px-6 max-w-4xl mx-auto text-center" v-motion-fade-visible-once>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rs-blue/10 dark:bg-blue-500/10 text-rs-blue dark:text-blue-400 text-xs font-semibold mb-6">
          <span>v0.0.1</span>
          <span class="w-1 h-1 rounded-full bg-rs-blue dark:bg-blue-400"></span>
          <span>Spring-like DI for Dart</span>
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
          Dependency Injection, <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-rs-blue to-rs-iron dark:from-blue-400 dark:to-slate-400">Reinforced.</span>
        </h1>
        <p class="text-xl text-gray-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
          Code-generation first DI framework for Dart and Flutter. 
          Zero mirrors, pure compile-time safety, and decoupled from the widget tree.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link to="/docs" class="bg-rs-blue text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-rs-blue/20 hover:bg-rs-blue/90 dark:hover:bg-blue-600 transition-all flex items-center gap-2">
            <PlayCircle class="w-5 h-5" /> Get Started
          </router-link>
          <div class="px-6 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 font-mono text-sm text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700 transition-colors duration-300">
            flutter pub add rs_iron
          </div>
        </div>
      </header>
    </section>

    <!-- Comparisons Section -->
    <section id="comparisons" class="py-24 px-6 bg-gray-50/50 dark:bg-slate-800/30 transition-colors duration-300">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" v-motion-slide-visible-once-bottom>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Why RsIron?</h2>
          <p class="text-gray-500 dark:text-slate-400 transition-colors">How it compares to existing Dart ecosystem standards.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- vs get_it -->
          <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors duration-300 hover:shadow-md" v-motion-slide-visible-once-bottom :delay="100">
            <div class="w-12 h-12 bg-rs-blue/10 dark:bg-blue-500/10 text-rs-blue dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <Zap class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold mb-3 dark:text-white transition-colors">vs get_it</h3>
            <p class="text-gray-500 dark:text-slate-400 mb-4 leading-relaxed transition-colors">
              <strong>get_it</strong> is great, but requires manual registration boilerplate (unless paired with <code>injectable</code>). 
              <strong>rs_iron</strong> provides Spring-Boot like annotations natively.
            </p>
            <div class="bg-gray-50 dark:bg-slate-900/50 p-4 rounded-xl font-mono text-sm border border-gray-100 dark:border-slate-700 text-gray-600 dark:text-slate-300 transition-colors">
              <span class="text-rs-blue dark:text-blue-400">@Service()</span><br/>
              <span class="text-purple-500 dark:text-purple-400">class</span> UserService {<br/>
              &nbsp;&nbsp;<span class="text-purple-500 dark:text-purple-400">final</span> UserRepository repo;<br/>
              &nbsp;&nbsp;UserService(<span class="text-purple-500 dark:text-purple-400">this</span>.repo); <span class="text-gray-400 dark:text-slate-500">// Auto-resolved!</span><br/>
              }
            </div>
          </div>

          <!-- vs provider -->
          <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors duration-300 hover:shadow-md" v-motion-slide-visible-once-bottom :delay="200">
            <div class="w-12 h-12 bg-rs-iron/10 dark:bg-slate-600/20 text-rs-iron dark:text-slate-400 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold mb-3 dark:text-white transition-colors">vs Provider</h3>
            <p class="text-gray-500 dark:text-slate-400 mb-4 leading-relaxed transition-colors">
              <strong>Provider</strong> couples your dependency injection to the UI widget tree. 
              <strong>rs_iron</strong> completely decouples DI from the UI. Access dependencies in pure Dart, Isolates, or background handlers without needing a <code>BuildContext</code>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- rs_iron + BLoC Section -->
    <section id="bloc" class="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div v-motion-slide-visible-once-left>
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 transition-colors">
              <Layers class="w-6 h-6" />
            </div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">The Perfect Match for BLoC</h2>
            <div class="space-y-6 text-gray-500 dark:text-slate-400 leading-relaxed text-lg transition-colors">
              <p>
                <strong>The Problem:</strong> When using <code>flutter_bloc</code>, developers often rely on <code>RepositoryProvider</code> and <code>BlocProvider</code> nested deep in the UI. This forces your data layer to be tightly coupled to the widget tree and reliant on <code>BuildContext</code>. Resolving them is an O(N) lookup.
              </p>
              <p>
                <strong>The Solution:</strong> With <strong class="text-rs-blue dark:text-blue-400">rs_iron</strong>, dependencies are accessible everywhere. You no longer need <code>BlocProvider</code> to inject dependencies down the widget tree because you can call them directly and globally without depending on context.
              </p>
              <p>
                Your Blocs and Repositories remain pure Dart classes, testable and completely independent from Flutter's UI tree.
              </p>
            </div>
          </div>
          
          <div class="bg-[#0d1117] dark:bg-slate-950 rounded-3xl p-6 text-sm font-mono shadow-2xl overflow-x-auto border border-[#1e2329] dark:border-slate-800 transition-colors" v-motion-slide-visible-once-right>
            <div class="flex gap-2 mb-4">
              <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <pre class="text-gray-300"><code><span class="text-gray-500">// 1. Services and Blocs injected automatically</span>
<span class="text-[#79c0ff]">@Controller()</span>
<span class="text-[#ff7b72]">class</span> <span class="text-[#d2a8ff]">UserBloc</span> <span class="text-[#ff7b72]">extends</span> <span class="text-[#d2a8ff]">Bloc</span> {
  <span class="text-[#ff7b72]">final</span> <span class="text-[#d2a8ff]">UserRepository</span> repo; <span class="text-gray-500">// Handled by rs_iron</span>
  
  UserBloc(<span class="text-[#ff7b72]">this</span>.repo) : <span class="text-[#ff7b72]">super</span>(InitialState());
}

<span class="text-gray-500">// 2. Access your Bloc anywhere, effortlessly</span>
<span class="text-[#ff7b72]">class</span> <span class="text-[#d2a8ff]">UserView</span> <span class="text-[#ff7b72]">extends</span> <span class="text-[#d2a8ff]">StatelessWidget</span> <span class="text-[#ff7b72]">with</span> <span class="text-[#79c0ff]">IronCore</span>, <span class="text-[#79c0ff]">IronMixin</span> {
  <span class="text-[#79c0ff]">@override</span>
  <span class="text-[#d2a8ff]">Widget</span> build(<span class="text-[#d2a8ff]">BuildContext</span> context) {
    <span class="text-gray-500">// No BuildContext or BlocProvider lookups needed!</span>
    <span class="text-gray-500">// Access `userBloc` directly as a property via IronMixin</span>
    
    <span class="text-[#ff7b72]">return</span> <span class="text-[#79c0ff]">BlocBuilder</span>&lt;<span class="text-[#d2a8ff]">UserBloc</span>, <span class="text-[#d2a8ff]">UserState</span>&gt;(
      bloc: userBloc,
      builder: (context, state) =&gt; <span class="text-[#79c0ff]">Text</span>(state.name),
    );
  }
}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-50 dark:bg-slate-900 py-12 px-6 border-t border-gray-100 dark:border-slate-800 text-center text-gray-400 dark:text-slate-500 text-sm transition-colors duration-300">
      <p>&copy; 2026 RsIron. Dependency Injection for Modern Dart. <br>Made with ❤️ by <a class="hover:text-rs-blue dark:hover:text-blue-400 transition-colors" href="https://github.com/reezcode">Reezcode</a></p>
    </footer>
  </div>
</template>

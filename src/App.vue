<script setup>
import PlayerSearch from './components/PlayerSearch.vue'
import PlayerStats from './components/PlayerStats.vue'
import { usePlayerStore } from './stores/usePlayerStore'

const playerStore = usePlayerStore()
</script>

<template>
  <div class="min-h-screen bg-[#0f111a] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#0f111a] to-black text-slate-100 ...">
    
    <header class="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 class="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Clash Royale Analyzer
        </h1>
        <div class="flex items-center gap-2 text-sm text-slate-400 font-medium">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Proxy Status: <span class="text-emerald-400">Connected</span>
        </div>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      <section>
        <PlayerSearch />
      </section>

      <section v-if="playerStore.playerData">
        <PlayerStats />
      </section>

      <section v-else-if="!playerStore.isLoading" class="min-h-[300px] border-2 border-slate-800 border-dashed rounded-2xl flex flex-col items-center justify-center text-slate-500 text-center p-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p class="text-lg font-medium">No Player Loaded</p>
        <p class="text-sm max-w-xs">Enter a player tag above to analyze profile statistics and deck synergy.</p>
      </section>

      <section v-if="playerStore.isLoading" class="flex justify-center py-12">
        <div class="inline-flex items-center gap-3 px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
          <div class="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span class="text-sm font-medium text-slate-300">Fetching player data...</span>
        </div>
      </section>
      
    </main>

    <footer class="max-w-5xl mx-auto px-4 py-8 border-t border-slate-800 text-center">
      <p class="text-xs text-slate-600">
        Data provided by the Official Clash Royale API via RoyaleAPI Proxy. 
        This project is for portfolio purposes.
      </p>
    </footer>
  </div>
</template>
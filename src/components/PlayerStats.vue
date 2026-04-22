<script setup>
import { computed } from 'vue'
import { usePlayerStore } from '../stores/usePlayerStore'
import DeckGrid from './DeckGrid.vue'
import MatchHistory from './MatchHistory.vue'

// DEBUG: Check your browser console (F12) to see which one says "undefined"
console.log('DeckGrid check:', DeckGrid)
console.log('MatchHistory check:', MatchHistory)

const playerStore = usePlayerStore()

const winRate = computed(() => {
  const data = playerStore.playerData
  if (!data || !data.battleCount) return 0
  return ((data.wins / data.battleCount) * 100).toFixed(1)
})
</script>

<template>
  <div v-if="playerStore.playerData" class="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div class="relative overflow-hidden bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
      <div class="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <h2 class="text-4xl font-black text-white tracking-tight uppercase italic">
              {{ playerStore.playerData.name }}
            </h2>
            <span v-if="playerStore.playerData.role" class="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              {{ playerStore.playerData.role }}
            </span>
          </div>
          <p class="text-blue-400 font-mono font-bold tracking-widest text-sm opacity-80">{{ playerStore.playerData.tag }}</p>
        </div>

        <div class="flex items-center gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-700/50">
          <div class="text-right">
            <p class="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Current Trophies</p>
            <p class="text-4xl font-black bg-gradient-to-b from-yellow-200 to-yellow-600 bg-clip-text text-transparent italic">
              {{ playerStore.playerData.trophies }}
            </p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2H6a1 1 0 0 0-1 1v1h-1a2 2 0 0 0-2 2v3c0 1.65 1.35 3 3 3h1v1.17c0 1.95 1.17 3.71 3 4.45V20H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-2v-2.38c1.83-.74 3-2.5 3-4.45V10h1c1.65 0 3-1.35 3-3V4a2 2 0 0 0-2-2h-1V3a1 1 0 0 0-1-1zM5 10H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h1v5zm15-1c0 .55-.45 1-1 1h-1V5h1c.55 0 1 .45 1 1v3z"/>
          </svg>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <div class="p-4 bg-slate-900/50 rounded-2xl border border-slate-700/30 hover:border-emerald-500/30 transition-colors group">
          <p class="text-[10px] font-bold text-slate-500 uppercase mb-1 group-hover:text-emerald-400 transition-colors">Total Wins</p>
          <p class="text-2xl font-black text-white">{{ playerStore.playerData.wins }}</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-2xl border border-slate-700/30 hover:border-red-500/30 transition-colors group">
          <p class="text-[10px] font-bold text-slate-500 uppercase mb-1 group-hover:text-red-400 transition-colors">Losses</p>
          <p class="text-2xl font-black text-white">{{ playerStore.playerData.losses }}</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-2xl border border-slate-700/30">
          <p class="text-[10px] font-bold text-slate-500 uppercase mb-1">Total Battles</p>
          <p class="text-2xl font-black text-white">{{ playerStore.playerData.battleCount }}</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-2xl border border-slate-700/30">
          <p class="text-[10px] font-bold text-slate-500 uppercase mb-1">3-Crown Wins</p>
          <p class="text-2xl font-black text-blue-400">{{ playerStore.playerData.threeCrownWins }}</p>
        </div>
      </div>

      <div class="mt-10">
        <div class="flex justify-between items-end mb-2">
          <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Overall Performance</span>
          <span class="text-sm font-black italic text-emerald-400">{{ winRate }}% Win Rate</span>
        </div>
        <div class="h-2 w-full bg-slate-950 rounded-full border border-slate-700/50 overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-blue-600 via-emerald-500 to-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all duration-1000 ease-out"
            :style="{ width: winRate + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <DeckGrid />
    <MatchHistory />
  </div>
</template>
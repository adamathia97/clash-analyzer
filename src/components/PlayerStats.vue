<script setup>
import { usePlayerStore } from '../stores/usePlayerStore'
const playerStore = usePlayerStore()
</script>

<template>
  <div v-if="playerStore.playerData" class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-3xl font-bold text-white">{{ playerStore.playerData.name }}</h2>
        <p class="text-slate-400 font-mono">{{ playerStore.playerData.tag }}</p>
      </div>
      <div class="text-right">
        <p class="text-sm text-slate-400 uppercase tracking-wider font-semibold">Trophies</p>
        <p class="text-4xl font-black text-yellow-500">{{ playerStore.playerData.trophies }}</p>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
        <p class="text-xs text-slate-500 uppercase">Wins</p>
        <p class="text-xl font-bold text-emerald-400">{{ playerStore.playerData.wins }}</p>
      </div>
      <div class="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
        <p class="text-xs text-slate-500 uppercase">Losses</p>
        <p class="text-xl font-bold text-red-400">{{ playerStore.playerData.losses }}</p>
      </div>
      <div class="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
        <p class="text-xs text-slate-500 uppercase">Battle Count</p>
        <p class="text-xl font-bold text-blue-400">{{ playerStore.playerData.battleCount }}</p>
      </div>
      <div class="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
        <p class="text-xs text-slate-500 uppercase">Win Rate</p>
        <p class="text-xl font-bold text-white">
          {{ ((playerStore.playerData.wins / playerStore.playerData.battleCount) * 100).toFixed(1) }}%
        </p>
      </div>
    </div>
  </div>
</template>
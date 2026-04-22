<script setup>
import { usePlayerStore } from '../stores/usePlayerStore'
const playerStore = usePlayerStore()
</script>

<template>
  <div v-if="playerStore.playerData?.currentDeck" class="space-y-4">
    <h3 class="text-lg font-semibold text-slate-300 px-1">Current Battle Deck</h3>
    <div class="grid grid-cols-4 md:grid-cols-8 gap-3">
      <div 
        v-for="card in playerStore.playerData.currentDeck" 
        :key="card.id"
        class="group relative aspect-[3/4] bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300"
      >
        <img :src="card.iconUrls.medium" :alt="card.name" class="w-full h-full object-contain p-1" />
        
        <div class="absolute top-1 right-1 bg-fuchsia-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
          {{ card.elixirCost || '?' }}
        </div>
        
        <div class="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity p-1 text-center">
          <p class="text-[10px] font-bold text-white leading-tight">{{ card.name }}</p>
          <p class="text-[8px] text-slate-400">Lvl {{ card.level + (14 - card.maxLevel) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
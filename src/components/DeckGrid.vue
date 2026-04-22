<script setup>
import { usePlayerStore } from '../stores/usePlayerStore'
const playerStore = usePlayerStore()
</script>

<template>
  <div v-if="playerStore.playerData?.currentDeck" class="bg-slate-800/20 border border-slate-700/30 rounded-3xl p-8 backdrop-blur-sm">
    <div class="flex items-center justify-between mb-6 px-2">
      <h3 class="text-xl font-black text-slate-200 uppercase italic">Active Battle Deck</h3>
      <div class="flex gap-2">
        <div v-for="i in 3" :key="i" class="w-1 h-1 rounded-full bg-slate-600"></div>
      </div>
    </div>
    
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
      <div 
        v-for="card in playerStore.playerData.currentDeck" 
        :key="card.id"
        class="group relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-700/50 hover:border-blue-500 hover:scale-110 hover:-rotate-2 transition-all duration-300 shadow-xl cursor-help"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-900"></div>
        
        <img 
          :src="card.iconUrls.medium" 
          :alt="card.name" 
          class="absolute inset-0 w-full h-full object-contain p-2 z-10" 
        />
        
        <div class="absolute top-2 right-2 z-20 h-6 w-6 bg-fuchsia-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
          <span class="text-[10px] font-black text-white">{{ card.elixirCost }}</span>
        </div>
        
        <div class="absolute bottom-0 inset-x-0 h-6 bg-black/60 backdrop-blur-sm z-20 flex items-center justify-center">
          <span class="text-[8px] font-black text-white uppercase tracking-tighter">
            Level {{ card.level + (14 - card.maxLevel) }}
          </span>
        </div>

        <div class="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 z-30 transition-opacity flex flex-col items-center justify-center p-2 text-center">
          <p class="text-[10px] font-black text-white leading-tight uppercase mb-1">{{ card.name }}</p>
          <div class="w-8 h-0.5 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>
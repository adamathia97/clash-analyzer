<script setup>
import { usePlayerStore } from '../stores/usePlayerStore'
const playerStore = usePlayerStore()

const isWin = (battle) => {
  const playerCrowns = battle.team[0].crowns
  const opponentCrowns = battle.opponent[0].crowns
  return playerCrowns > opponentCrowns
}
</script>

<template>
  <div v-if="playerStore.recentBattles.length" class="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
    <h3 class="text-xl font-black text-slate-200 uppercase italic px-2">Recent Battle Log</h3>
    
    <div class="grid gap-3">
      <div 
        v-for="(battle, index) in playerStore.recentBattles.slice(0, 5)" 
        :key="index"
        :class="[
          'bg-slate-800/40 backdrop-blur-sm border-l-4 rounded-xl p-4 flex items-center justify-between transition-all hover:bg-slate-800/60',
          isWin(battle) ? 'border-emerald-500' : 'border-red-500'
        ]"
      >
        <div class="flex flex-col">
          <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">{{ battle.type }}</span>
          <span :class="['text-lg font-black italic uppercase', isWin(battle) ? 'text-emerald-400' : 'text-red-400']">
            {{ isWin(battle) ? 'Victory' : 'Defeat' }}
          </span>
        </div>

        <div class="flex items-center gap-4">
          <div class="text-center">
            <p class="text-2xl font-black text-white">{{ battle.team[0].crowns }}</p>
            <p class="text-[8px] text-slate-500 uppercase">Crowns</p>
          </div>
          <div class="h-8 w-px bg-slate-700"></div>
          <div class="text-center">
            <p class="text-2xl font-black text-slate-400">{{ battle.opponent[0].crowns }}</p>
            <p class="text-[8px] text-slate-500 uppercase">Opponent</p>
          </div>
        </div>

        <div class="text-right">
          <p class="text-sm font-bold text-slate-200">{{ battle.opponent[0].name }}</p>
          <p class="text-[10px] text-blue-400 font-mono">{{ battle.opponent[0].tag }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
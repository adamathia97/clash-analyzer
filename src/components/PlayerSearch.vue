<script setup>
import { ref } from 'vue'
import { usePlayerStore } from '../stores/usePlayerStore'
import { getPlayerProfile } from '../services/clashApi'

const playerStore = usePlayerStore()
const searchInput = ref('')

const handleSearch = async () => {
  if (!searchInput.value.trim()) return
  
  // Force uppercase and remove hashtags/spaces
  const cleanTag = searchInput.value.toUpperCase().replace(/#/g, '').trim()
  console.log("Attempting to fetch tag:", cleanTag)
  
  playerStore.isLoading = true
  playerStore.error = null
  
  try {
    const response = await getPlayerProfile(cleanTag)
    playerStore.playerData = response.data
  } catch (err) {
    playerStore.error = 'Player not found. Use a valid tag like V2VUYQQ2C.'
  } finally {
    playerStore.isLoading = false
  }
}
</script>

<template>
  <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-6 shadow-lg">
    <h2 class="text-lg font-semibold mb-4">Analyze Player Profile</h2>
    
    <form @submit.prevent="handleSearch" class="flex gap-3">
      <div class="relative flex-1">
        <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 font-bold">#</span>
        <input 
          v-model="searchInput"
          type="text" 
          placeholder="Enter Player Tag (e.g., 2V8G9V0)" 
          class="w-full bg-slate-900 border border-slate-600 rounded-lg py-3 pl-8 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all uppercase"
        />
      </div>
      <button 
        type="submit"
        class="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 disabled:opacity-50"
        :disabled="playerStore.isLoading"
      >
        <span>Analyze</span>
      </button>
    </form>

    <div v-if="playerStore.error" class="mt-4 text-red-400 text-sm">
      {{ playerStore.error }}
    </div>
  </div>
</template>
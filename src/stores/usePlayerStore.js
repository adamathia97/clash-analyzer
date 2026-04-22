import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlayerStore = defineStore('player', () => {
  // --- State ---
  const playerTag = ref('')
  const playerData = ref(null)
  const recentBattles = ref([]) // Only one declaration here
  const isLoading = ref(false)
  const error = ref(null)

  // --- Actions ---
  function setPlayerTag(tag) {
    playerTag.value = tag.startsWith('#') ? tag : `#${tag}`
  }

  function setRecentBattles(battles) {
    recentBattles.value = battles
  }

  function clearPlayer() {
    playerTag.value = ''
    playerData.value = null
    recentBattles.value = []
    error.value = null
  }

  return {
    playerTag,
    playerData,
    recentBattles,
    isLoading,
    error,
    setPlayerTag,
    setRecentBattles,
    clearPlayer
  }
})
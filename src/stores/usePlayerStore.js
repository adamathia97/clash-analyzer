import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlayerStore = defineStore('player', () => {
  // State
  const playerTag = ref('')
  const playerData = ref(null)
  const recentBattles = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  // Actions
  function setPlayerTag(tag) {
    // Basic validation to ensure it starts with '#'
    playerTag.value = tag.startsWith('#') ? tag : `#${tag}`
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
    clearPlayer
  }
})
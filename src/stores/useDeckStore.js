import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDeckStore = defineStore('deck', () => {
  // State
  const selectedCards = ref([])
  const synergyScore = ref(0)
  const isAnalyzing = ref(false)

  // Getters
  const deckIsFull = computed(() => selectedCards.value.length === 8)
  
  const averageElixir = computed(() => {
    if (selectedCards.value.length === 0) return 0
    const total = selectedCards.value.reduce((sum, card) => sum + card.elixirCost, 0)
    return (total / selectedCards.value.length).toFixed(1)
  })

  // Actions
  function addCard(card) {
    if (!deckIsFull.value && !selectedCards.value.find(c => c.id === card.id)) {
      selectedCards.value.push(card)
    }
  }

  function removeCard(cardId) {
    selectedCards.value = selectedCards.value.filter(c => c.id !== cardId)
  }

  function clearDeck() {
    selectedCards.value = []
    synergyScore.value = 0
  }

  return { 
    selectedCards, 
    synergyScore, 
    isAnalyzing, 
    deckIsFull, 
    averageElixir, 
    addCard, 
    removeCard, 
    clearDeck 
  }
})
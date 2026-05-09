import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  function addItem(product) {
    items.value.push({ ...product, quantity: 1 })
  }

  function removeItem(productId) {
    items.value = items.value.filter((item) => item.id !== productId)
  }

  return { items, addItem, removeItem }
})

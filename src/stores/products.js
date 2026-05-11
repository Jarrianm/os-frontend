import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])

  async function fetchProducts() {
    const res = await api.get('products')
    products.value = res.data
    console.log(products.value)
  }

  async function updateQuantity(productId, quantity) {
    const product = products.value.find((p) => p.id === productId)
    product.quantity = quantity
    await api.patch(`products/${productId}`, { quantity })
  }
  return { products, fetchProducts, updateQuantity }
})

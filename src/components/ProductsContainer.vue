<script setup>
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()
const { products } = storeToRefs(store)

store.fetchProducts()
</script>

<template>
  <div class="container">
    <div class="row row-cols-2">
      <div v-for="product in products" :key="product.id" class="">
        <img :src="product.images[0]" alt="loading logo" />
      </div>
    </div>
  </div>
</template>

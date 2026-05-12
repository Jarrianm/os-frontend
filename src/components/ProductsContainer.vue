<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'
import ProductCard from '@/components/ProductCard.vue'

const props = defineProps({
  category: {
    type: String,
    default: null,
  },
})

const store = useProductsStore()
const { products } = storeToRefs(store)

store.fetchProducts()

const filteredProducts = computed(() =>
  props.category
    ? products.value.filter((p) => p.category.name === props.category)
    : products.value,
)
</script>

<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

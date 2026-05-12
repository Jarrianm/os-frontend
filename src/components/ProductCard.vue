<script setup>
import { ref } from 'vue'
import ProductModal from '@/components/ProductModal.vue'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const open = ref(false)
const toggleModal = () => {
  open.value = !open.value
}
</script>

<template>
  <div class="col">
    <div class="card border-0" data-bs-theme="dark" @click="toggleModal">
      <img :src="product.images[0]" class="card-img-top" :alt="product.title" />
      <div class="card-body d-flex justify-content-between align-items-center">
        <h5 class="card-title mb-0">{{ product.title }}</h5>
        <h4 class="mb-0">${{ product.price }}</h4>
      </div>
    </div>
  </div>
  <ProductModal :product="product" :open="open" @close="toggleModal" />
</template>

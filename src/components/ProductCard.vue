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
    <div class="card" data-bs-theme="dark" @click="toggleModal">
      <img :src="product.images[0]" class="card-img-top" :alt="product.title" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
      </div>
    </div>
  </div>
  <ProductModal :product="product" :open="open" @close="toggleModal" />
</template>

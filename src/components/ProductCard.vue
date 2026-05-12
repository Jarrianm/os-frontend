<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="col">
    <div class="card">
      <img :src="product.images[0]" class="card-img-top" :alt="product.title" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

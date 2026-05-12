<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
  open: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div v-if="open" class="modal-backdrop show" @click="emit('close')"></div>
  <Transition name="fade">
    <div v-if="open" class="modal show d-block" data-bs-theme="dark">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ product.title }}</h5>
            <button type="button" class="btn-close" @click="emit('close')"></button>
          </div>
          <div class="modal-body">
            <img :src="product.images[0]" class="img-fluid" :alt="product.title" />
          </div>
          <div class="modal-footer border-0 d-flex gap-2">
            <button
              v-for="size in product.sizes"
              :key="size.size"
              type="button"
              class="btn btn-outline-light flex-fill"
            >
              {{ size.size }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

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
  <Teleport to="body">
    <div v-if="open" class="modal-backdrop show" @click="emit('close')"></div>
    <Transition name="fade">
      <div v-if="open" class="modal show d-block" data-bs-theme="dark">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ product.title }}</h5>
              <button type="button" class="btn-close" @click="emit('close')"></button>
            </div>
            <div id="carouselExampleFade" class="modal-body carousel slide carousel-fade">
              <div class="carousel-inner">
                <div
                  v-for="(image, index) in product.images"
                  :key="index"
                  class="carousel-item"
                  :class="{ active: index === 0 }"
                >
                  <img :src="image" class="img-fluid d-block w-100" :alt="product.title" />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div v-if="product.sizes.length > 0">
              <div class="modal-footer border-0 d-flex gap-2">
                <button
                  v-for="size in product.sizes"
                  :key="size.size"
                  type="button"
                  class="btn btn-outline-light flex-fill"
                >
                  {{ size.size }}
                </button>
                <h4>${{ product.price }}</h4>
              </div>
            </div>
            <div
              v-else
              class="modal-footer border-0 d-flex justify-content-center align-items-center position-relative"
            >
              <button type="button" class="btn btn-outline-secondary btn-lg">+</button>
              <h4 class="mb-0 position-absolute end-0 me-3">${{ product.price }}</h4>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
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

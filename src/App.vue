<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/clothes">Clothes</RouterLink>
        <RouterLink to="/shoes">Shoes</RouterLink>
        <RouterLink to="/others">Others</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

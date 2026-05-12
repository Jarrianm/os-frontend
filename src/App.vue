<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">OS</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
            <div class="navbar-nav">
              <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
              <RouterLink class="nav-link" to="/clothes">Clothes</RouterLink>
              <RouterLink class="nav-link" to="/shoes">Shoes</RouterLink>
              <RouterLink class="nav-link" to="/furniture">Furniture</RouterLink>
              <RouterLink class="nav-link" to="/electronics">Electronics</RouterLink>

              <RouterLink class="nav-link" to="/misc">Misc</RouterLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

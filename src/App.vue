<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container">
        <RouterLink to="/" class="navbar-brand px-2">
          <img src="@/assets/images/McGill_Baja_Logo.svg" alt="McGill Baja Logo" width="150" />
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1">
              <li class="nav-item">
                <RouterLink to="/" class="nav-link px-md-3 active" aria-current="page">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/" class="nav-link px-md-3">Not Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/about" class="nav-link px-md-3">About</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import "@/assets/styles/global.scss";

// Header

#offcanvasNavbar .nav-item a {
  color: $primary;
  text-transform: uppercase;
  font-style: italic;
}

.navbar-toggler, .btn-close {
  color: $primary;
  border: 0 !important;
  outline: 0 !important;

  &:focus {
    box-shadow: none;
  }
}

</style>

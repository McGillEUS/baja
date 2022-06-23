<script setup>
import { RouterLink, RouterView } from "vue-router";

// Import Bootstrap

// import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';

const onNavigate = () => {
  const offcanvasNavbar = Offcanvas.getInstance('#offcanvas-navbar');
  if (offcanvasNavbar !== null && offcanvasNavbar !== undefined) offcanvasNavbar.hide();
}
</script>

<template>
  <header>
    <nav id="header-navbar" class="navbar navbar-expand-lg navbar-dark fixed-top bg-transparent">
      <div class="container">
        <RouterLink to="/" class="navbar-brand px-2">
          <img src="@/assets/images/McGill_Baja_Logo.svg" alt="McGill Baja Logo" width="150" />
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-navbar" aria-controls="offcanvas-navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas-navbar" aria-labelledby="offcanvas-navbar-label">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvas-navbar-label">Menu</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1">
              <!-- Links for views defined in router > index.js -->
              <li class="nav-item">
                <RouterLink to="/" class="nav-link px-md-3" active-class="active" @click="onNavigate">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/gallery" class="nav-link px-md-3" active-class="active" @click="onNavigate">Gallery</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/sponsors" class="nav-link px-md-3" active-class="active" @click="onNavigate">Sponsors</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/team" class="nav-link px-md-3" active-class="active" @click="onNavigate">Our Team</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/contact" class="nav-link px-md-3" active-class="active" @click="onNavigate">Contact</RouterLink>
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

#header-navbar {
  position: fixed;

  .navbar-nav .nav-item a {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--bs-nav-link-color);

    &:hover {
      padding-bottom: calc(1rem - 2px);
      border-bottom: 3px solid $primary;
      transition: padding 0.3s, border-width 0.3s;
    }
  }
}
  
#offcanvas-navbar .nav-item a {
  text-transform: uppercase;
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

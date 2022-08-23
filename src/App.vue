<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import HomeView from "./views/HomeView.vue";
import GalleryView from "./views/GalleryView.vue";
import TeamView from "./views/TeamView.vue";

// Import Bootstrap

// import 'bootstrap/js/dist/alert';
import "bootstrap/js/dist/button";
// import 'bootstrap/js/dist/carousel';
import "bootstrap/js/dist/collapse";
// import 'bootstrap/js/dist/dropdown';
import "bootstrap/js/dist/modal";
import Offcanvas from "bootstrap/js/dist/offcanvas";
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';

import "bootstrap-icons/font/bootstrap-icons.css";

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));

const handleScroll = () => {
  let headerNav = document.getElementById("header-navbar");
  // If doc was scrolled down (using 10px for buffer), then change navbar
  if (document.documentElement.scrollTop > 10) headerNav.classList.add("scrolled");
  else headerNav.classList.remove("scrolled");
};

const currView = ref('home');
const currAnchor = ref('');

const onNavigate = (location) => {
  const offcanvasNavbar = Offcanvas.getInstance("#offcanvas-navbar");
  if (offcanvasNavbar !== null && offcanvasNavbar !== undefined) offcanvasNavbar.hide();

  const locationParts =  location.split('#');
  const sameView = currView.value === locationParts[0];
  currView.value = locationParts[0];
  currAnchor.value = locationParts.length === 2 ? locationParts[1] : '';

  if (sameView && currAnchor.value !== "") document.getElementById(currAnchor.value).scrollIntoView();;
};
</script>

<template>
  <header>
    <nav id="header-navbar" class="navbar navbar-expand-lg navbar-dark fixed-top">
      <button class="navbar-toggler menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-navbar" aria-controls="offcanvas-navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvas-navbar">
        <div class="offcanvas-header">
          <button type="button" class="btn-close btn-close-white mx-auto mt-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center flex-grow-1">
            <li class="nav-item">
              <span class="nav-link px-md-3" @click="onNavigate('home#home')">Home</span>
            </li>
            <li class="nav-item">
              <span class="nav-link px-md-3" @click="onNavigate('home#sponsors')">Sponsors</span>
            </li>
            <li class="nav-item">
              <span class="nav-link px-md-3" @click="onNavigate('home#contact')">Contact</span>
            </li>
            <li class="nav-item">
              <span class="nav-link px-md-3" @click="onNavigate('gallery#gallery')">Gallery</span>
            </li>
            <li class="nav-item">
              <span class="nav-link px-md-3" @click="onNavigate('team#team')">Our Team</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <HomeView v-if="currView === 'home'" :anchor="currAnchor" @navigate="(location) => onNavigate(location)" />
  <GalleryView v-if="currView === 'gallery'" :anchor="currAnchor" @navigate="(location) => onNavigate(location)" />
  <TeamView v-if="currView === 'team'" :anchor="currAnchor" @navigate="(location) => onNavigate(location)" />
</template>

<style lang="scss">
@import "./assets/styles/global.scss";
@import "./assets/styles/menu.scss";
</style>

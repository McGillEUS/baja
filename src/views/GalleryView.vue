<script setup>
import View360 from '../components/View360.vue';
</script>

<template>
  <main id="gallery">
    <div class="min-vh-100 d-flex justify-content-center align-items-center">
      <h1 class="d-inline-block text-primary display-1">Gallery coming soon</h1>
    </div>

    <div class="text-center">
      <h2 class="display-3">360 View</h2>
      <div class="title-separator mt-3 mb-5 mx-auto"></div>
      <p class="fs-5 px-4">Click and drag to rotate the car</p>
      <view360 :numImages="27" path="/src/assets/images/gallery/360-view/" />
    </div>
  </main>
</template>

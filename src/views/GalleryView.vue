<script setup>
import View360 from "../components/View360.vue";
import CompareImages from "../components/CompareImages.vue";
</script>

<template>
  <main id="gallery">
    <div class="min-vh-100 d-flex justify-content-center align-items-center">
      <h1 class="d-inline-block text-primary display-1">Gallery coming soon</h1>
    </div>

    <div class="text-center py-5">
      <h2 class="display-3">360 View</h2>
      <div class="title-separator mt-3 mb-5 mx-auto"></div>
      <p class="fs-5 px-4">Click and drag to rotate the car</p>
      <view360 :numImages="27" path="/src/assets/images/gallery/360-view/" />
    </div>

    <div class="text-center py-5">
      <h2 class="display-3">Comparison View</h2>
      <div class="title-separator mt-3 mb-5 mx-auto"></div>
      <p class="fs-5 px-4">Click and drag to compare our car to our CAD</p>
      <compare-images
        path1="/src/assets/images/gallery/Front.png"
        path2="/src/assets/images/gallery/Front-cad.png"
      />
    </div>
  </main>
</template>

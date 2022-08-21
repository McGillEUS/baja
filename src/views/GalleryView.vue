<script setup>
import View360 from "../components/View360.vue";
import CompareImages from "../components/CompareImages.vue";
import TypingText from '../components/TypingText.vue';
</script>

<template>
  <main id="gallery">
    <section id="gallery-landing-section" class="min-vh-100 full-height-image">
      <div class="full-height-overlay">
        <div class="full-height-content landing-content" style="top: 35%">
          <h1 class="display-1">McGill Baja Racing</h1>
          <p class="fs-5 pt-3">
            <typing-text text="Check out our cars" />
          </p>
        </div>
        <RouterLink to="/#baja-short-desc" class="nav-link scroll-down"
          ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
        ></RouterLink>
      </div>
    </section>

    <section id="people" class="py-3 py-lg-5">
    <div class="text-center py-5">
      <h2 class="display-3">360 View</h2>
      <div class="title-separator mt-3 mb-5 mx-auto"></div>
      <p class="fs-5 px-4">Click and drag to rotate the car</p>
      <view360 :numImages="27" :firstImage="24" path="/src/assets/images/gallery/360-view/" imgType="png" />
    </div>

    <div class="text-center py-5">
      <h2 class="display-3">Comparison View</h2>
      <div class="title-separator mt-3 mb-5 mx-auto"></div>
      <p class="fs-5 px-4 pb-5">Click and drag to compare our car to our CAD</p>
      <compare-images
        path1="/src/assets/images/gallery/Front.png"
        path2="/src/assets/images/gallery/Front-cad.png"
      />
    </div>

    <div class="text-center py-5">
      <h2 class="display-3">Highlights</h2>
      <div class="title-separator mt-3 mb-5 mx-auto"></div>
    </div>

    <div class="container-xl row pb-5 mx-auto justify-content-center align-items-center">
      <div class="col-12 p-3">
        <img class="img-fluid" src="/src/assets/images/gallery/general/1.jpg" alt="">
      </div>
      <div class="col-md-6 p-3">
        <img class="img-fluid" src="/src/assets/images/gallery/general/2.jpg" alt="">
      </div>
      <div class="col-md-6 p-3">
        <img class="img-fluid" src="/src/assets/images/gallery/general/7.jpg" alt="">
      </div>
      <div class="col-12 p-3">
        <img class="img-fluid" src="/src/assets/images/gallery/general/3.jpg" alt="">
      </div>
      <div class="col-12 p-3">
        <img class="img-fluid" src="/src/assets/images/gallery/general/4.jpg" alt="">
      </div>
      <div class="col-12 p-3">
        <img class="img-fluid" src="/src/assets/images/gallery/general/5.jpg" alt="">
      </div>
      <div class="col-12 p-3">
        <img class="img-fluid" src="/src/assets/images/gallery/general/6.jpg" alt="">
      </div>
    </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
#gallery-landing-section {
  background-image: url("./src/assets/images/gallery-landing.jpg");
  background-attachment: fixed;
}
</style>
<script setup>
import View360 from "../components/View360.vue";
import CompareImages from "../components/CompareImages.vue";
import TypingText from "../components/TypingText.vue";
import { onMounted } from "vue";
import { anchorLink } from "../assets/utils";

import landingBG from "../assets/images/gallery-landing.jpg";
import ImageCompressor from "../components/ImageCompressor.vue";

const props = defineProps({ anchor: String });
defineEmits(["navigate"]);

onMounted(() => {
  if (props.anchor !== "") anchorLink(props.anchor);

  // Resize images after page loads
  setTimeout(() => {
    const galleryImages = document.querySelectorAll('#general-images img');
    for (let i = 0; i < galleryImages.length; i++) {
      if (galleryImages[i].naturalHeight > galleryImages[i].naturalWidth) {
        galleryImages[i].parentElement.classList.replace('col-12', 'col-md-6');
      }
    }
  }, 1000);
});
</script>

<template>
  <main id="gallery">
    <section
      id="gallery-landing-section"
      class="min-vh-100 full-height-image"
      :style="{ backgroundImage: 'url(' + landingBG + ')', backgroundAttachment: 'fixed' }"
    >
      <div class="full-height-overlay">
        <div class="full-height-content landing-content" style="top: 35%">
          <h1 class="display-1">Gallery</h1>
          <p class="fs-5 pt-3">
            <typing-text text="A BTS look at Baja" />
          </p>
        </div>
        <span class="nav-link scroll-down" @click="anchorLink('gallery-images')"
          ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
        ></span>
      </div>
    </section>

    <section id="gallery-images" class="py-3 py-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">360 View</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <p class="fs-5 px-4">Click and drag to rotate the car</p>
        <view360 :numImages="27" :firstImage="24" path="images/gallery/360-view/" imgType="png" />
      </div>

      <div class="text-center py-5">
        <h2 class="display-3">Comparison View</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <p class="fs-5 px-4 pb-5">Click and drag to compare our car to our CAD</p>
        <compare-images
          path1="images/gallery/Front.png"
          path2="images/gallery/Front-cad.png"
        />
      </div>

      <div class="text-center py-5">
        <h2 class="display-3">Highlights</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
      </div>

      <div id="general-images" class="container-xl row pb-5 mx-auto justify-content-center align-items-center">
        <div class="col-12 p-3" v-for="img in 25" :key="img">
          <img class="img-fluid" :src="`images/gallery/general/${img}.jpg`" alt="" />
        </div>
      </div>
    </section>
  </main>
</template>

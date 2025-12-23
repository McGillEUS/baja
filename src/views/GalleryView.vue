<script setup>
import View360 from "../components/View360.vue";
import CompareImages from "../components/CompareImages.vue";
import TypingText from "../components/TypingText.vue";
import { ref, onMounted } from "vue";
import { anchorLink } from "../assets/utils";

import landingBG from "../assets/images/gallery-landing.jpg";
import {compressImage} from "../utils/ImageCompressor.js";
import '../assets/styles/gallery.scss'

const props = defineProps({ anchor: String });
defineEmits(["navigate"]);

const compr_gen_images = ref([]);
const compr_col1_images = ref([]);
const compr_col2_images = ref([]);

onMounted(async() => {
  if (props.anchor !== "") anchorLink(props.anchor);

  //compress all images
  const gen = [];
  for (let i = 1; i <= 25; i++){
    const url = `/images/gallery/general/${i}.jpg`;
    const compr_url = await compressImage(url);
    gen.push(compr_url);
  }
  compr_gen_images.value = gen;

  const col1 = [];

  for (let i = 1; i <= 1; i++){
    const url = `/images/gallery/comparison-view/column-1-pics/${i}.jpg`;
    const compr_url = await compressImage(url);
    col1.push(compr_url);
  }
  compr_col1_images.value = col1;

  const col2 = [];

  for (let i = 1; i <= 2; i++){
    const url = `/images/gallery/comparison-view/column-2-pics/${i}.jpg`;
    const compr_url = await compressImage(url);
    col2.push(compr_url);
  }
  compr_col2_images.value = col2;


  // resize images after page loads
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
  <div class="gallery-page">
    <main id="gallery" class="gallery-wrapper">
      <div class="gallery-wrapper">
        <section
        id="gallery-landing-section"
        class="min-vh-100 full-height-image"
        :style="{ backgroundImage: 'url(' + landingBG + ')', backgroundAttachment: 'fixed' }"
        >
        <div class="full-height-overlay">
          <div class="title " style="top: 35%">
            <h1 class="display-1">Gallery</h1>
            <h1 class="display-1 pt-3">
              <typing-text text="A BTS look at Baja" />
            </h1>
          </div>
          <span class="nav-link scroll-down" @click="anchorLink('gallery-images')"
            ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
          ></span>
        </div>
        </section>
        <div class="vertical-line"></div>
      </div>

      <div class="subtitle py-5">
        <h2 class="display-3">Comparison View</h2>
        <p class="fs-5 pb-5">Click and drag to compare our car to our CAD</p>
        <div class="side-by-side">
          <div class="column-1">
            <compare-images
            path1="images/gallery/Front.png"
            path2="images/gallery/Front-cad.png"
            />
            <img 
              v-for="(img, index) in compr_col1_images" :key="index" 
              class="img-fluid" :src="img"
            />
          </div>

          <div class="column-2">
            <img 
              v-for="(img, index) in compr_col2_images" :key="index" 
              class="img-fluid" :src="img"
            />
          </div>

        </div>
      </div>

      <section id="gallery-images" class="py-3 py-lg-5">
      <div class="horizontal-line mt-3 mb-5 "></div>
      <div class="py-5">
        <h2 class="subtitle display-3">360 View</h2>
        <p class="subtitle fs-5 px-0">Click and drag to rotate the car</p>
        <div class="center">
          <view360 :numImages="27" :firstImage="24" path="images/gallery/360-view/" imgType="png" />
        </div>
      </div>

      <div class="text-center py-5">
        <h2 class="display-3">Highlights</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
      </div>

      <div id="general-images" class="container-xl row pb-5 mx-auto justify-content-center align-items-center">
        <div class="col-12 p-3" v-for="(img, index) in compr_gen_images" :key="index">
          <img class="img-fluid" :src="img"/>
        </div>
      </div>
      </section>
    </main>
  </div>
</template>

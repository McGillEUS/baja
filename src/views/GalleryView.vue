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
const mb_header = ref([]);
const column1_images = ref([]);
const column2_images = ref([]);
const column3_images = ref([]);

onMounted(async () => {
  if (props.anchor !== "") anchorLink(props.anchor);

  const loadSet = (basePath, count) =>
    Promise.all(
      Array.from({ length: count }, (_, i) =>
        compressImage(`${basePath}/${i + 1}.jpg`)
      )
    );

  const [
    gen,
    col1,
    col2,
    header,
    column1,
    column2,
    column3
  ] = await Promise.all([
    loadSet('/images/gallery/general', 25),
    loadSet('/images/gallery/comparison-view/column-1-pics', 2),
    loadSet('/images/gallery/comparison-view/column-2-pics', 2),
    compressImage('/images/gallery/MB-header.jpg'),
    loadSet('/images/gallery/general/column-1-pics', 10),
    loadSet('/images/gallery/general/column-2-pics', 10),
    loadSet('/images/gallery/general/column-3-pics', 9),
  ]);

  compr_gen_images.value = gen;
  compr_col1_images.value = col1;
  compr_col2_images.value = col2;
  mb_header.value = [header];
  column1_images.value = column1;
  column2_images.value = column2;
  column3_images.value = column3;

  setTimeout(() => {
    document.querySelectorAll('#general-images img').forEach(img => {
      if (img.naturalHeight > img.naturalWidth) {
        img.parentElement.classList.replace('col-12', 'col-md-6');
      }
    });
  }, 1000);
});

</script>

<template>
  <div class="gallery-page ">
    <main id="gallery" class="gallery-wrapper">
      <div class="gallery-wrapper">
        <section
        id="gallery-landing-section"
        class="min-vh-100 full-height-image"
        :style="{ backgroundImage: 'url(' + landingBG + ')',
        backgroundAttachment: 'fixed' }"
        >
          <div class="full-height-overlay">
            <div class="full-height-content landing-content">
              <h1 class="display-1">Gallery</h1>
              <p class="fs-5 pt-3">
                <typing-text text="A BTS look at Baja" />
              </p>
            </div>
            <span class="nav-link scroll-down" @click="anchorLink('members')"
              ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
            ></span>
          </div>
        </section>
        <div class="vertical-line"></div>
      </div>

      <div class="py-5">
        <div class="subtitle">
          <h2 class="display-3">Comparison View</h2>
          <p class="fs-5 pb-5">Click and drag to compare our car to our CAD</p>
        </div>

        <div class="center">
          <compare-images
            path1="images/gallery/Front.png"
            path2="images/gallery/Front-cad.png"
          />
        </div>

        <div class="side-by-side">
          <div class="comp-column-1">
            <img 
              v-for="(img, index) in compr_col1_images" :key="index" 
              class="img-fluid" :src="img"
            />
          </div>

          <div class="comp-column-2">
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

      <div class="subtitle py-5">
        <h2 class="display-3">MB25</h2>
        <h2 class="display-3">Murphy</h2>
      </div>

      <div class="side-by-side">
        <div class="col-1">
          <div class="box">
            <img v-if="mb_header" :src="mb_header" />
          </div>
        </div>
        <div class="paragraph">
          <p>Murphy is our newest car design, developed during the 2024–2025 season. 
            It earned its name after all the unexpected twists and challenges we faced 
            at the Maryland competition in June 2025, a true nod to Murphy’s Law. 
            Despite a chaotic and demanding week, the car carried us through and became 
            part of some unforgettable team memories. Murphy truly proved its strength 
            later that year at Oktobajafest in October, where we proudly secured 2nd place 
            in both the SNT and Endurance events.</p>
        </div>
      </div>

      <div id="general-images" class="columns-wrapper">
        <div class="column-1">
          <img 
            v-for="(img, index) in column1_images" :key="index" 
            class="img-fluid" :src="img"
          />
        </div>
        <div class="column-2">
          <img 
            v-for="(img, index) in column2_images" :key="index" 
            class="img-fluid" :src="img"
          />
        </div>

        <div class="column-3">
          <img 
            v-for="(img, index) in column3_images" :key="index" 
            class="img-fluid" :src="img"
          />
        </div>

      </div>
      </section>
    </main>
  </div>
</template>

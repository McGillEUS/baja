<script setup>
import View360 from "../components/View360.vue";
import CompareImages from "../components/CompareImages.vue";
import TypingText from "../components/TypingText.vue";
import { ref, onMounted } from "vue";
import { anchorLink } from "../assets/utils";

import landingBG from "../assets/images/gallery-landing.jpg";
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

onMounted(() => {
  if (props.anchor !== "") anchorLink(props.anchor);

  const loadSet = (basePath, count) =>
    Array.from({ length: count }, (_, i) => `${basePath}/${i + 1}.jpg`);

  // general gallery
  compr_gen_images.value = loadSet(
    '/images/gallery/general',
    25
  );

  // comparison images
  compr_col1_images.value = loadSet(
    '/images/gallery/comparison-view/column-1-pics',
    2
  );

  compr_col2_images.value = loadSet(
    '/images/gallery/comparison-view/column-2-pics',
    2
  );

  // car image
  mb_header.value = ['/images/gallery/MB-header.jpg'];

  column1_images.value = loadSet(
    '/images/gallery/general/column-1-pics',
    9
  );

  column2_images.value = loadSet(
    '/images/gallery/general/column-2-pics',
    10
  );

  column3_images.value = loadSet(
    '/images/gallery/general/column-3-pics',
    9
  );

  setTimeout(() => {
    document.querySelectorAll('#general-images img').forEach(img => {
      if (img.naturalHeight > img.naturalWidth) {
        img.parentElement.classList.replace('col-12', 'col-md-6');
      }
    });
  }, 500);
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
        <h2 class="display-3">MB26</h2>
        <h2 class="display-3">Nicky</h2>
      </div>

      <div class="side-by-side">
        <div class="col-1">
          <div class="box">
            <img v-if="mb_header" :src="mb_header" />
          </div>
        </div>
        <div class="paragraph">
          <p>
            Nicky is our newest car, built during the 2025–2026 season. 
            It earned its name after an intense race against the clock, 
            with the car coming together in just a few days and the team working until 7 AM on
             the morning of our New York competition in June, finishing just in the nick of time.
              Despite the rushed start, Nicky made it onto the track and kicked off a season full of
               challenges, repairs, and improvements. After a summer of hard work, the team headed to
                Ohio in September, where Nicky proudly secured 19th place overall. From its last-minute
                 assembly to its final race of the season, Nicky gave us plenty of moments to remember.
          </p>
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

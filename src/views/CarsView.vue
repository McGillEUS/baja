<script setup>
import TypingText from "../components/TypingText.vue";
import { computed, watch, onMounted } from "vue";
import { anchorLink } from "../assets/utils";
import { galleries } from "../assets/automation/car_galleries.json";
import "../assets/styles/gallery.scss";

const props = defineProps({ year: String });
defineEmits(["navigate"]);

const car = computed(() => galleries.find((g) => g.year === props.year));
const base = computed(() => `images/cars_archive/${props.year}`);

const loadSet = (path, count) =>
  Array.from({ length: count }, (_, i) => `${base.value}/${path}/${i + 1}.jpg`);

const landing = computed(() => car.value?.landing ?? `images/cars/${props.year}.jpg`);
const header = computed(() => `${base.value}/MB-header.jpg`);

const columns = computed(() =>
  (car.value?.columns ?? []).map((count, i) =>
    loadSet(`general/column-${i + 1}-pics`, count)
  )
);

const scrollTop = () => window.scrollTo(0, 0);
onMounted(scrollTop);
watch(() => props.year, scrollTop);
</script>

<template>
    <div v-if="car" class="gallery-page car-gallery" :key="car.year">    
        <main :id="'car-gallery-' + car.year" class="gallery-wrapper">
        <section
          id="gallery-landing-section"
          class="min-vh-100 full-height-image"
          :style="{
            backgroundImage: 'url(' + landing + ')',
            backgroundAttachment: 'fixed',
          }"
        >
          <div class="full-height-overlay">
            <div class="full-height-content landing-content">
              <h1 class="display-1">{{ car.name || car.year }}</h1>
              <p class="fs-5 pt-3">
                <typing-text
                  :text="car.season ? `${car.year} · ${car.season}` : car.year"
                />
              </p>
            </div>
            <span
              class="nav-link scroll-down"
              @click="anchorLink('car-gallery-images')"
              ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
            ></span>
          </div>
        </section>

      <section id="car-gallery-images" class="py-3 py-lg-5">
        <div class="subtitle py-5">
          <h2 class="display-3">{{ car.year }}</h2>
          <h2 v-if="car.name" class="display-3">{{ car.name }}</h2>
        </div>

        <div class="side-by-side">
          <div class="col-1">
            <div class="box">
              <img :src="header" :alt="car.name || car.year" />
            </div>
          </div>
          <div class="paragraph">
            <p>{{ car.description }}</p>
          </div>
        </div>

        <div id="general-images" class="columns-wrapper">
          <div v-for="(col, i) in columns" :key="i" :class="'column-' + (i + 1)">
            <img v-for="(img, j) in col" :key="j" class="img-fluid" :src="img" />
          </div>
        </div>
      </section>
        </main>
    </div>

  <div v-else class="gallery-page min-vh-100 d-flex align-items-center justify-content-center">
    <p class="fs-4">No gallery found for {{ year }}.</p>
  </div>
</template>
<style lang="scss">

.gallery-page.car-gallery {
  overflow: hidden; // fallback for older browsers
  overflow: clip;
}
</style>
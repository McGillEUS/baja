<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { cars } from "../assets/automation/cars.json";
import { galleries } from "../assets/automation/car_galleries.json";

const emit = defineEmits(["navigate"]);

const archived = new Set(galleries.map((g) => g.year));
const hasGallery = (year) => archived.has(year);

const open = ref(false);
const activeYear = ref(cars.length ? cars[0].year : "");
const activeCar = computed(() => cars.find((c) => c.year === activeYear.value));

const root = ref(null);

// hover mode only when the screen is wide enough + is on Desktop
const hoverMode = ref(false);
let mq = null;
const updateMode = () => {
  hoverMode.value = mq.matches;
  open.value = false;
};
onMounted(() => {
  mq = window.matchMedia("(min-width: 992px) and (hover: hover)");
  updateMode();
  mq.addEventListener("change", updateMode);
});
onBeforeUnmount(() => mq && mq.removeEventListener("change", updateMode));

// warm the browser cache so the preview doesn't flash when moving down the list
let preloaded = false;
const preload = () => {
  if (preloaded) return;
  preloaded = true;
  cars.forEach((c) => {
    new Image().src = previewSrc(c.year);
  });
};

const previewSrc = (year) => `images/cars/${year}.jpg`;

const onEnter = () => {
  if (hoverMode.value) {
    open.value = true;
    preload();
  }
};
const onLeave = () => {
  if (hoverMode.value) open.value = false;
};
const onFocusIn = () => {
  if (hoverMode.value) open.value = true;
};
const onFocusOut = (e) => {
  if (hoverMode.value && !root.value.contains(e.relatedTarget)) open.value = false;
};
const toggle = () => {
  if (!hoverMode.value) open.value = !open.value;
  else open.value = true;
};

const goTo = (car) => {
  if (!hasGallery(car.year)) return;
  open.value = false;
  if (document.activeElement) document.activeElement.blur();
  emit("navigate", `car-${car.year}`);
};
</script>

<template>
  <li
    ref="root"
    class="nav-item cars-menu"
    :class="{ open }"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <span
      class="nav-link px-md-3"
      role="button"
      tabindex="0"
      aria-haspopup="true"
      :aria-expanded="open"
      @click="toggle"
      @keydown.enter.prevent="toggle"
      @keydown.space.prevent="toggle"
      @keydown.esc="open = false"
      >Our Cars</span
    >

    <div class="cars-panel" role="menu">
      <div class="cars-description">
        <p>These are the cars created by the team over the years</p>
      </div>

      <ul class="cars-list">
        <li v-for="car in cars" :key="car.year">
          <button
            type="button"
            role="menuitem"
            class="cars-item"
            :class="{
              active: car.year === activeYear,
              'no-gallery': !hasGallery(car.year),
            }"
            :aria-disabled="!hasGallery(car.year)"
            @mouseenter="activeYear = car.year"
            @focus="activeYear = car.year"
            @click="goTo(car)"
          >
            {{ car.year }}
          </button>
        </li>
      </ul>

      <div class="cars-preview" v-if="activeCar">
        <img :src="previewSrc(activeCar.year)" :alt="activeCar.year" />
        <div class="cars-preview-name">
          {{ activeCar.name || activeCar.year }}
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss">
.cars-menu {
  position: static;

  .cars-panel {
    display: none;
    text-align: left;
    text-transform: none;
    font-size: 1rem;
    color: #fff;
    background: $bgColorDark;
  }

  &.open .cars-panel {
    display: grid;
  }

  .cars-description {
    background: #8c8c8c;
    padding: 2rem;
    display: flex;
    align-items: center;

    p {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }

  .cars-list {
    overflow-y: auto;
    padding: 1.5rem 0;
    background: $bgColorDark;
    scrollbar-width: thin;
    scrollbar-color: #555 transparent;

    li {
      list-style: none;
    }
  }

  .cars-item {
    display: block;
    width: 100%;
    padding: 0.35rem 1.25rem;
    border: 0;
    background: transparent;
    color: #fff;
    text-align: left;
    font: inherit;
    cursor: pointer;
    transition: background-color 0.15s;

    &.active {
      background: $primary;
    }

    &.no-gallery {
      cursor: default;
      color: rgba(#fff, 0.55);
    }

    &:focus-visible {
      outline: 2px solid #fff;
      outline-offset: -2px;
    }
  }

  .cars-preview {
    display: none;
    position: relative;
    overflow: hidden;
    background: #000;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .cars-preview-name {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.9rem 2.5rem;
    font-size: 1.8rem;
    background: rgba(0, 0, 0, 0.6); 
  }

  .cars-panel {
    margin-top: 0.75rem;
    grid-template-columns: 1fr;
  }
  .cars-description {
    display: none;
  }
  .cars-list {
    max-height: 45vh;
    padding: 0.5rem 0;
  }
  .cars-item {
    text-align: center;
    font-size: 1.1rem;
  }
}

@media (min-width: 992px) {
  .cars-menu {
    .cars-panel {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: min(100vw, 100vw);
      height: 30rem;
      margin-top: 0;
      grid-template-columns: 20rem 9rem 1fr;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
    }

    .cars-description {
      display: flex;
    }

    .cars-list {
      max-height: none;
      padding: 1.5rem 0;
    }

    .cars-item {
      text-align: left;
      font-size: 1rem;
    }

    .cars-preview {
      display: block;
    }
  }
}
</style>
<script setup>
import { onMounted, ref } from "vue";
import { getCoord } from "../assets/utils";

defineProps({ path1: String, path2: String });

const imgToCompare = ref(null);
const dragging = ref(false);
const topOffset = ref(50);
const leftOffset = ref(50);

onMounted(() => {
  window.addEventListener("touchend", () => (dragging.value = false));
  window.addEventListener("mouseup", () => (dragging.value = false));
});

function slideMove(e) {
  if (!dragging.value) return false;

  let offsetX = (getCoord(e) - imgToCompare.value.getBoundingClientRect().left) / imgToCompare.value.offsetWidth;
  if (offsetX < 0) offsetX = 0;
  else if (offsetX > 1) offsetX = 1;
  leftOffset.value = offsetX * 100;

  let offsetY = (getCoord(e, false) - imgToCompare.value.getBoundingClientRect().top) / imgToCompare.value.offsetHeight;
  if (offsetY < 0) offsetY = 0;
  else if (offsetY > 1) offsetY = 1;
  topOffset.value = offsetY * 100;
}
</script>

<template>
  <div class="d-inline-block position-relative mw-100" @touchmove="slideMove($event)" @mousemove="slideMove($event)">
    <img :src="path1" class="img-fluid" :style="{ clipPath: `inset(0 ${100 - leftOffset}% 0 0)` }" />
    <img
      ref="imgToCompare"
      :src="path2"
      class="img-fluid position-absolute"
      :style="{ clipPath: `inset(0 0 0 ${leftOffset}%)`, top: 0, left: 0 }"
    />
    <div
      class="img-comp-slider"
      :style="{ top: `calc(${topOffset}% - 1.5rem)`, left: `calc(${leftOffset}% - 1.5rem)` }"
      @touchstart.prevent="dragging = true"
      @mousedown.prevent="dragging = true"
    ></div>
  </div>
</template>

<style lang="scss">
.img-comp-slider {
  cursor: ew-resize;
  position: absolute;
  z-index: 100;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: $primary;
  opacity: 0.75;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.2s;
  }
}
</style>

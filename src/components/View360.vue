<script setup>
import { ref } from "vue";

const props = defineProps({
  numImages: Number,
  path: String,
});

const ROTATIONS = 2;
const currImg = ref(1);
const dragStartX = ref(0);
const imgFocused = ref(false);

function nextImg() {
  currImg.value = currImg.value < props.numImages ? ++currImg.value : 1;
}

function prevImg() {
  currImg.value = currImg.value > 1 ? --currImg.value : props.numImages;
}

function getCoord(e) {
  if (e.type == 'touchstart' || e.type == 'touchmove') {
    let eTouch = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
    let touch = eTouch.touches[0] || eTouch.changedTouches[0];
    return touch.pageX;
  } else return e.clientX;
}

function viewDragStart(e) {
  dragStartX.value = getCoord(e);
  imgFocused.value = true;
}

function viewDrag(e) {
  // Setup so user would do 360 twice across full screen
  let diff = getCoord(e) - dragStartX.value;
  let rotationFraction = innerWidth / (ROTATIONS * props.numImages)
  if (imgFocused.value && Math.abs(diff) > rotationFraction) {
    if (diff > 0) {
      prevImg();
      dragStartX.value += rotationFraction;
    } else {
      nextImg();
      dragStartX.value -= rotationFraction;
    }
  }
}
</script>

<template>
  <div>
    <div class="d-flex align-items-center justify-content-center position-relative">
      <template v-for="n in props.numImages" :key="n">
        <img v-show="n === currImg" :src="path + n + '.png'" alt="360 car view" class="img-fluid" />
      </template>
      <div
        class="view360"
        @touchstart="viewDragStart($event)"
        @touchmove="viewDrag($event)"
        @touchend="imgFocused = false"
        @mousedown="viewDragStart($event)"
        @mousemove="viewDrag($event)"
        @mouseup="imgFocused = false"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
.view360 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: grab;
}
</style>

<script setup>
import { ref } from "vue";

const props = defineProps({
  numImages: Number,
  path: String,
});

const currImg = ref(1);
const dragStartX = ref(0);
const imgFocused = ref(false);

function nextImg() {
  currImg.value = currImg.value < props.numImages ? ++currImg.value : 1;
}

function prevImg() {
  currImg.value = currImg.value > 1 ? --currImg.value : props.numImages;
}

function viewDragStart(e) {
  dragStartX.value = e.clientX;
  imgFocused.value = true;
}

function viewDrag(e) {
  // Setup so user would do 360 twice across full screen
  if (imgFocused.value && Math.abs(e.clientX - dragStartX.value) > innerWidth / (2 * props.numImages)) {
    if (e.clientX - dragStartX.value > 0) {
      prevImg();
      dragStartX.value += innerWidth / (2 * props.numImages);
    } else {
      nextImg();
      dragStartX.value -= innerWidth / (2 * props.numImages);
    }
  }
}
</script>

<template>
  <div>
    <div class="d-flex align-items-center justify-content-center position-relative">
      <!-- <template v-for="n in props.numImages" :key="n">
        <img v-show="n == currImg.value" :src="path + n + '.png'" alt="360 car view" class="d-block img-fluid" />
      </template> -->
      <img :src="path + currImg + '.png'" alt="360 car view" class="d-block img-fluid" />
      <div
        class="view360"
        draggable="true"
        @drop.prevent
        @dragstart.prevent
        @dragover.prevent
        @mousedown="viewDragStart($event)"
        @mousemove="viewDrag($event)"
        @mouseup="imgFocused = false"
        @touchstart="viewDragStart($event)"
        @touchmove="viewDrag($event)"
        @touchend="imgFocused = false"
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

<script setup>
import { ref } from "vue";

const props = defineProps({
  numImages: Number,
  path: String,
});

const currImg = ref(1);
const dragStartX = ref(0);

function nextImg() {
  currImg.value = currImg.value < props.numImages ? ++currImg.value : 1;
}

function prevImg() {
  currImg.value = currImg.value > 1 ? --currImg.value : props.numImages;
}

function viewDragStart(e) {
  dragStartX.value = e.clientX;
}

function viewDrag(e) {
  // Setup so user would do 360 twice across full screen
  if (Math.abs(e.clientX - dragStartX.value) > innerWidth / (2 * props.numImages)) {
    if (e.clientX - dragStartX.value > 0) prevImg();
    else nextImg();
    dragStartX.value = e.clientX;
  }
}
</script>

<template>
  <div>
    <div class="d-flex align-items-center justify-content-center position-relative">
      <img :src="path + currImg + '.png'" alt="360 car view" class="d-block img-fluid" />
      <div
        class="view360"
        draggable="true"
        @drop.prevent
        @dragstart="viewDragStart($event)"
        @dragover.prevent="viewDrag($event)"
      ></div>
    </div>
    <button @click="prevImg">Prev</button>
    <button @click="nextImg">Next</button>
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

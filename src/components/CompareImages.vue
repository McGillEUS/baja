<script setup>
import { onMounted, ref } from "vue";
import { getCoord } from "../assets/utils";

const props = defineProps({
  path1: String,
  path2: String,
  imgWidth: Number,
  imgHeight: Number,
});

const imgCompOverlay = ref(null);
const imgCompSlider = ref(null);
const dragging = ref(false);

onMounted(() => {
  imgCompOverlay.value.style.width = props.imgWidth / 2 + "px";
  
  imgCompSlider.value.style.top = props.imgHeight / 2 - imgCompSlider.value.offsetHeight / 2 + "px";
  imgCompSlider.value.style.left = props.imgWidth / 2 - imgCompSlider.value.offsetWidth / 2 + "px";
  
  window.addEventListener("touchend", () => dragging.value = false);
  window.addEventListener("mouseup", () => dragging.value = false);
});

function slideMove(e) {
  if (!dragging.value) return false;

  let posX = getCoord(e) - imgCompOverlay.value.getBoundingClientRect().left;
  if (posX < 0) posX = 0;
  else if (posX > props.imgWidth) posX = props.imgWidth;

  let posY = getCoord(e, false) - imgCompOverlay.value.getBoundingClientRect().top;
  if (posY < 0) posY = 0;
  else if (posY > props.imgWidth) posY = props.imgWidth;
  
  imgCompOverlay.value.style.width = posX + "px";
  imgCompSlider.value.style.top = posY - imgCompSlider.value.offsetHeight / 2 + "px";
  imgCompSlider.value.style.left = imgCompOverlay.value.offsetWidth - imgCompSlider.value.offsetWidth / 2 + "px";
}
</script>

<template>
  <div
    class="position-relative d-inline-block mx-auto"
    :style="{ height: imgHeight + 'px', width: imgWidth + 'px' }"
    @touchmove="slideMove($event)"
    @mousemove="slideMove($event)"
  >
    <div class="position-absolute overflow-hidden">
      <img :src="path1" :width="imgWidth" :height="imgHeight" />
    </div>
    <div
      ref="imgCompSlider"
      class="img-comp-slider"
      @touchstart.prevent="dragging = true"
      @mousedown.prevent="dragging = true"
    ></div>
    <div ref="imgCompOverlay" class="position-absolute overflow-hidden">
      <img :src="path2" :width="imgWidth" :height="imgHeight" />
    </div>
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

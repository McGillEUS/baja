<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  text: String,
});

const currText = ref("");
const targetText = ref(null);

onMounted(() => {
  const animateText = () => {
    if (currText.value.length < props.text.length) {
      currText.value += props.text.charAt(currText.value.length);
      setTimeout(animateText, 75);
    } else if (targetText.value !== null) targetText.value.classList.add("done-typing");
  };

  setTimeout(animateText(), 1000);
});
</script>

<template>
  <span ref="targetText" class="typing-text">{{ currText }}</span>
</template>

<style lang="scss">
.typing-text::after {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 2px;
  background-color: $primary;
  vertical-align: bottom;
}

.typing-text.done-typing::after {
  animation: blinkingLine 0.3s ease-in-out 0.5s 3 alternate;
  background-color: transparent;
}

@keyframes blinkingLine {
  from {
    background-color: $primary;
  }
  to {
    background-color: transparent;
  }
}
</style>

<script setup>
import Test from '@/components/Test.vue'
</script>

<template>
  <main>
    <section id="landing-section" class="full-height">
      <div>
        <h1 class="display-1">McGill Baja Racing</h1>
        <p class="lead">Take the dirt road home</p>
      </div>
    </section>

    <Test />
  </main>
</template>

<style lang="scss">
#landing-section {
  background-image: url("@/assets/images/placeholders/pexels-pixabay-94272.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  > div {
    text-align: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    > p {
      font-family: $font-family-title;
    }
  }
}
</style>

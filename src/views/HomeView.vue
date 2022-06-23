<script setup>
import Test from '@/components/Test.vue'
</script>

<template>
  <main>
    <section id="landing-section" class="full-height full-height-image">
      <div class="full-height-overlay">
        <div class="full-height-content-center">
          <h1 class="display-1">McGill Baja Racing</h1>
          <p class="lead">Take the dirt road home</p>
        </div>
      </div>
    </section>

    <Test />
  </main>
</template>

<style lang="scss">
#landing-section {
  background-image: url("@/assets/images/placeholders/pexels-pixabay-94272.jpg");
}
</style>

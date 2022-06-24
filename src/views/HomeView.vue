<script setup>
import Test from '@/components/Test.vue'
</script>

<template>
  <main>
    <section id="landing-section" class="full-height full-height-image">
      <div class="full-height-overlay">
        <div class="full-height-content-center">
          <h1 class="display-1">McGill Baja Racing</h1>
          <p class="fs-5 pt-3">Take the dirt road home</p>
        </div>
      </div>
    </section>

    <section class="full-height container-fluid row">
      <div class="col-md-6">
        Test
      </div>
      <div class="col-md-6">
        <RouterLink to="/#test">Test</RouterLink>
      </div>
    </section>

    <section class="full-height container-fluid row">
      <div class="col-md-6">
        <p id="test">I'm the test</p>
      </div>
      <div class="col-md-6">
        Ok
      </div>
    </section>

    <Test />
  </main>
</template>

<style lang="scss">
#landing-section {
  background-image: url("@/assets/images/placeholders/landing-bg.jpg");
}
</style>

<script setup>
import { people } from '@/assets/automation/people.json'
</script>

<template>
  <main id="team">
    <section id="team-landing-section" class="full-height full-height-image">
      <div class="full-height-overlay">
        <div class="full-height-content landing-content">
          <h1 class="display-1">McGill Baja Racing</h1>
          <p class="fs-5 pt-3">Welcome to the team!</p>
        </div>
        <RouterLink to="/team#people" class="nav-link scroll-down"
          ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
        ></RouterLink>
      </div>
    </section>

    <section id="people" class="full-height">
      {{people}}
    </section>
  </main>
</template>

<style lang="scss">
#team-landing-section {
  background-image: url("@/assets/images/placeholders/landing-bg2.jpg");
}
</style>
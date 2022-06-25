<script setup>
import Test from "@/components/Test.vue";
</script>

<template>
  <main>
    <section id="landing-section" class="full-height full-height-image">
      <div class="full-height-overlay">
        <div class="full-height-content landing-content">
          <h1 class="display-1">McGill Baja Racing</h1>
          <p class="fs-5 pt-3">Take the dirt road home</p>
        </div>
      </div>
    </section>

    <section id="baja-short-desc" class="full-height container-fluid row">
      <div class="col-md-6 full-height-image"></div>
      <div class="col-md-6 position-relative">
        <div class="full-height-content offset-content">
          <h2 class="display-3">What we do</h2>
          <div class="title-separator mt-3 mb-5"></div>
          <p class="fs-5">
            Every year, the McGill Baja Racing Team builds a new single-seat off-road vehicle and brings it across North
            America to compete with other universities from around the world. Working through the entire design cycle
            together, we develop real-world skills, equipping us to be the next generation of great engineers.
          </p>
        </div>
      </div>
    </section>

    <section id="team-short-desc" class="full-height container-fluid row">
      <div class="col-md-6 position-relative">
        <div class="full-height-content offset-content">
          <h2 class="display-3">Our team</h2>
          <div class="title-separator mt-3 mb-5"></div>
          <p class="fs-5">
            We are a group of over 50 McGill University students of various academic levels working together to design
            and manufacture an off-road prototype vehicle. While the team consists mostly of engineering students, we
            have members from all faculties on campus.
          </p>
          <RouterLink to="/team" class="btn btn-primary mt-3">Check us out</RouterLink>
        </div>
      </div>
      <div class="col-md-6 full-height-image"></div>
    </section>

    <Test />

    <section id="contact">Contact maybe?</section>
  </main>
</template>

<style lang="scss">
#landing-section {
  background-image: url("@/assets/images/placeholders/landing-bg.jpg");
}

#baja-short-desc .full-height-image {
  background-image: url("@/assets/images/placeholders/smaller-bg.jpg");
}

#team-short-desc .full-height-image {
  background-image: url("@/assets/images/placeholders/smaller-bg3.jpg");
}
</style>

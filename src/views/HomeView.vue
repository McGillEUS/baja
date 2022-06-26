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
          <p class="fs-5 justified-p">
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
          <p class="fs-5 justified-p">
            We are a group of over 50 McGill University students of various academic levels working together to design
            and manufacture an off-road prototype vehicle. While the team consists mostly of engineering students, we
            have members from all faculties on campus.
          </p>
          <RouterLink to="/team" class="btn btn-primary mt-3">Check us out</RouterLink>
        </div>
      </div>
      <div class="col-md-6 full-height-image"></div>
    </section>

    <section class="full-height container-fluid pt-3 pt-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">2022 Competitions</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <div class="container">
          <p class="fs-5 justified-p px-4">
            Simulating real-world engineering design projects and their related challenges, teams are challenged to
            design and build a prototype for a reliable, maintainable, ergonomic, and economic production vehicle that
            serves a recreational user market. The students must function as a team to design, engineer, build, test,
            promote, and compete with a vehicle within the limits of the rules.
          </p>
        </div>
      </div>

      <div class="row pt-3 pt-lg-5">
        <div id="comp-map1" class="col-md-6 col-lg-3 comp-map full-height-image">
          <div class="map-content">
            <h3>Épreuve du Nord</h3>
            <p class="text-primary">FEB 3 - 4</p>
            <p>Quebec City, Quebec, Canada</p>
          </div>
        </div>
        <div id="comp-map2" class="col-md-6 col-lg-3 comp-map full-height-image">
          <div class="map-content">
            <h3>Baja SAE Tennessee</h3>
            <p class="text-primary">MAY 12 - 15</p>
            <p>Cookeville, Tennessee, USA</p>
          </div>
        </div>
        <div id="comp-map3" class="col-md-6 col-lg-3 comp-map full-height-image">
          <div class="map-content">
            <h3>Baja SAE Rochester</h3>
            <p class="text-primary">JUNE 2 - 5</p>
            <p>Rochester, New York, USA</p>
          </div>
        </div>
        <div id="comp-map4" class="col-md-6 col-lg-3 comp-map full-height-image">
          <div class="map-content">
            <h3>Baja SAE Arizona</h3>
            <p class="text-primary">SEP 29 - OCT 2</p>
            <p>Green Valley, Arizona, USA</p>
          </div>
        </div>
      </div>
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

.comp-map {
  height: 400px;

  .map-content {
    text-align: center;
    padding-top: 20%;
  }
}

#comp-map1 {
  background-image: url("@/assets/images/maps/quebec-city-QC.png");
}

#comp-map2 {
  background-image: url("@/assets/images/maps/cookeville-TN.png");
}

#comp-map3 {
  background-image: url("@/assets/images/maps/rochester-NY.png");
}

#comp-map4 {
  background-image: url("@/assets/images/maps/green-valley-AZ.png");
}
</style>

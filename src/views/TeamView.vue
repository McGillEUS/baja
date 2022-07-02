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

    <section id="people" class="container-xl py-3 py-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">Team of {{ new Date().getFullYear() }}</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <div class="container">
          <p class="fs-5 px-4">
            Meet the creators of this year's car
          </p>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 pt-3">
        <div class="col person p-3" v-for="person in people">
          <div class="h-100 text-center px-3 pt-5 pb-3 mx-auto">
            <div class="person-img w-100">
              <img :src="'src/assets/images/people/' + person.name.split(' ')[0] + '.jpg'" :alt="person.name" />
            </div>
            <div class="pt-3">
              <h5 class="py-3">{{person.name}}</h5>
              <p>{{person.role}}</p>
              <p>{{person.department}}, {{person.year}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
#team-landing-section {
  background-image: url("@/assets/images/placeholders/landing-bg2.jpg");
}

.person-img {
  height: 200px;
  
  img {
    height: 100%;
    width: auto;
    max-width: 200px;
  }
}

#people .person > div {
  max-width: 400px;
  background-color: $bgColorDark;
  border-bottom: 2px solid $primary;
}
</style>
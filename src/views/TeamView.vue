<script setup>
import { people } from '../assets/automation/people.json';
import { cars } from '../assets/automation/cars.json';
import TypingText from '../components/TypingText.vue';
import { onMounted } from "vue";
import { anchorLink } from "../assets/utils";

const props = defineProps({ anchor: String });
defineEmits(['navigate']);

onMounted(() => {
  if (props.anchor !== '') anchorLink(props.anchor);
});
</script>

<template>
  <main id="team">
    <section id="team-landing-section" class="min-vh-100 full-height-image">
      <div class="full-height-overlay">
        <div class="full-height-content landing-content">
          <h1 class="display-1">McGill Baja Racing</h1>
          <p class="fs-5 pt-3">
            <typing-text text="Welcome to the team!" />
          </p>
        </div>
        <span class="nav-link scroll-down" @click="anchorLink('people')"
          ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
        ></span>
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
            <div class="person-img w-100 d-flex justify-content-center align-items-center">
              <img :src="'src/assets/images/people/' + person.name.split(' ')[0] + '.jpg'" :alt="'I\'m ' + person.name + ' and I don\'t have a picture :('" />
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

    <section id="cars" class="container-xl py-3 py-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">Our Cars</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <div class="container">
          <p class="fs-5 px-4">
            These are the cars created by the team over the years
          </p>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 pt-3">
        <div class="col car p-3" v-for="car in cars">
          <div class="h-100 text-center px-4 pt-4 pb-3 mx-auto">
            <div class="car-img w-100 d-flex d-flex align-items-center align-items-center">
              <img :src="'src/assets/images/cars/' + car.year + '.jpg'" :alt="car.year" />
            </div>
            <div class="pt-3">
              <h5 class="py-3">{{car.year}}</h5>
              <p>{{car.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
#team-landing-section {
  background-image: url("./src/assets/images/team-photo.jpg");
  background-attachment: fixed;
}

#people .person > div, #cars .car > div {
  position: relative;
  max-width: 400px;
  background-color: $bgColorDark;
  border-bottom: 2px solid $primary;
  border-top: 2px solid transparent;
  transition: border-top 0.1s ease;

}

#people .person > div {

  &::before, &::after {
    position: absolute;
    content: '';
    bottom: 0;
    height: 0;
    width: 2px;
    background-color: $primary;
    transition: height 0.2s ease 0.1s;
  }
  
  &::before { left: 0; }
  &::after { right: 0; }
  
  &:hover {
    border-top-color: $primary;
    transition: border-top 0.1s ease 0.2s;
    
    &::before, &::after {
      height: 100%;
      transition: height 0.2s ease;
    }
  }
}

.person-img {
  height: 200px;
  
  img {
    height: auto;
    max-height: 100%;
    width: auto;
    max-width: 200px;
    font-style: italic;
  }
}

.car-img {
  height: 250px;

  img {
    height: auto;
    max-height: 100%;
    width: auto;
    max-width: 100%;
  }
}
</style>
<script setup>
import { members } from "../assets/automation/members.json";
import { cars } from "../assets/automation/cars.json";
import TypingText from "../components/TypingText.vue";
import { onMounted, computed } from "vue";
import { anchorLink } from "../assets/utils";

import landingBG from "../assets/images/team.jpg";

const props = defineProps({ anchor: String });
defineEmits(["navigate"]);

// Define the order of supersystems for display
const supersystemOrder = [
  "Captains",
  "Technical Directors",
  "Drivers",
  "Powertrain",
  "Suspension, Steering and Brakes",
  "Electronics",
  "Pedals, Steering and Brakes",
  "Ergonomics",
  "Finance and Communications",
];

// Define descriptions for each supersystem
const supersystemDescriptions = {
  Captains:
    "Team leaders responsible for overall coordination, strategy, and representing the team at competitions.",
  "Technical Directors":
    "Engineering leads who oversee technical aspects of the vehicle design and ensure integration across all systems.",
  Drivers:
    "Team members responsible for driving the vehicle during tests and competitions.",
  "Finance and Communications":
    "Members handling team budget, sponsorships, marketing, and external communications.",
  "Suspension, Steering and Brakes":
    "Engineers designing systems that control vehicle dynamics, handling, and stopping power.",
  Powertrain:
    "Team members focused on the engine, drivetrain, CVT, and all systems that generate and transfer power to the wheels.",
  Electronics:
    "Specialists in vehicle electrical systems, data acquisition, sensors, and controls integration.",
  Ergonomics:
    "Members focused on driver comfort, safety, and vehicle aesthetics including composites and frame design.",
};

// Group members by their supersystem
const membersBySupersystem = computed(() => {
  const groups = {};

  // Initialize groups with empty arrays
  supersystemOrder.forEach((supersystem) => {
    groups[supersystem] = [];
  });

  // Add members to their respective supersystem groups
  members.forEach((member) => {
    if (member.supersystem && groups[member.supersystem]) {
      groups[member.supersystem].push(member);
    } else if (member.supersystem) {
      // If supersystem doesn't exist in supersystemOrder, create a new group
      groups[member.supersystem] = [member];
    } else {
      // If no supersystem is specified, add to "Other" group
      if (!groups["Other"]) groups["Other"] = [];
      groups["Other"].push(member);
    }
  });

  // Filter out empty groups and maintain the order defined in supersystemOrder
  const sortedGroups = {};

  // First add the groups that are in supersystemOrder
  supersystemOrder.forEach((supersystem) => {
    if (groups[supersystem] && groups[supersystem].length > 0) {
      sortedGroups[supersystem] = groups[supersystem];
    }
  });

  // Then add any remaining groups that weren't in supersystemOrder
  Object.keys(groups).forEach((supersystem) => {
    if (
      !supersystemOrder.includes(supersystem) &&
      groups[supersystem].length > 0
    ) {
      sortedGroups[supersystem] = groups[supersystem];
    }
  });

  return sortedGroups;
});

onMounted(() => {
  if (props.anchor !== "") anchorLink(props.anchor);
});
</script>

<template>
  <main id="team">
    <section
      id="team-landing-section"
      class="min-vh-100 full-height-image"
      :style="{
        backgroundImage: 'url(' + landingBG + ')',
        backgroundAttachment: 'fixed',
      }"
    >
      <div class="full-height-overlay">
        <div class="full-height-content landing-content">
          <h1 class="display-1">Meet the Team</h1>
          <p class="fs-5 pt-3">
            <typing-text text="Welcome to the faces of McGill Baja!" />
          </p>
        </div>
        <span class="nav-link scroll-down" @click="anchorLink('members')"
          ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
        ></span>
      </div>
    </section>

    <section id="members" class="container-xl py-3 py-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">Team of {{ new Date().getFullYear() }}</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <div class="container">
          <p class="fs-5 px-4">
            Meet the talented individuals that design, build, and race our
            vehicle
          </p>
        </div>
      </div>

      <!-- Iterate through supersystem groups -->
      <div
        v-for="(systemMembers, system) in membersBySupersystem"
        :key="system"
        class="mb-5"
      >
        <div class="system-header text-center mb-4">
          <h3 class="display-6">{{ system }}</h3>
          <div class="title-separator small mt-2 mb-3 mx-auto"></div>
          <p class="system-description mb-4 mx-auto">
            {{
              supersystemDescriptions[system] ||
              "Team members specializing in specific vehicle systems and functions."
            }}
          </p>
        </div>

        <div
          class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 pt-3 justify-content-center"
        >
          <div
            class="col member p-3"
            v-for="member in systemMembers"
            :key="member.name"
          >
            <div
              class="member-info h-100 text-center px-3 pt-5 pb-3 mx-auto"
              :class="{ 'member-effect': member.linkedin }"
            >
              <div
                class="member-img w-100 d-flex justify-content-center align-items-center"
              >
                <img
                  :src="'images/members/' + member.name.split(' ')[0] + '.jpg'"
                  :alt="
                    'I\'m ' + member.name + ' and I don\'t have a picture :('
                  "
                />
              </div>
              <div class="pt-3">
                <h5 class="py-3">{{ member.name }}</h5>
                <p>{{ member.role }}</p>
                <p>{{ member.department }}, {{ member.year }}</p>
                <a
                  v-if="member.linkedin"
                  class="stretched-link"
                  :href="member.linkedin"
                  target="_blank"
                ></a>
              </div>
              <div
                v-if="member.blurb"
                class="member-blurb h-100 text-center px-5 pt-5 pb-3 d-flex flex-column justify-content-center align-items-center"
              >
                <p class="pb-3">{{ member.blurb }}</p>
                <h5 class="py-3">{{ member.name }}</h5>
                <i v-if="member.linkedin" class="bi bi-linkedin fs-1"></i>
              </div>
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
            <div
              class="car-img w-100 d-flex d-flex align-items-center align-items-center"
            >
              <img :src="'images/cars/' + car.year + '.jpg'" :alt="car.year" />
            </div>
            <div class="pt-3">
              <h5 class="py-3">{{ car.year }}</h5>
              <p>{{ car.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.member,
.car {
  display: flex;
  justify-content: center;
}

#members .member-info,
#cars .car > div {
  position: relative;
  max-width: 340px;
  width: 100%;
  background-color: rgba($bgColorDark, 0.7);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }
}

.system-header {
  margin-top: 3rem;

  h3 {
    font-weight: 500;
  }

  .title-separator.small {
    width: 100px;
  }

  .system-description {
    max-width: 800px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: auto;
  }
}

// Highlight important supersystems
.system-header:first-of-type h3,
.system-header:nth-of-type(2) h3 {
  color: rgba(197, 11, 11, 0.87);
  font-weight: 600;
}

#members .member-info {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, $primary, transparent);
    transition: opacity 0.3s;
  }
  &.member-effect {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, transparent, $primary, transparent);
      transition: opacity 0.3s;
    }
  }

  .member-img {
    height: 220px;
    padding: 15px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background-color: rgba($primary, 0.1);
      z-index: 0;
    }

    img {
      position: relative;
      height: 160px;
      width: 160px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      z-index: 1;
    }
  }

  &:hover .member-img img {
    opacity: 0;
    border-color: $primary;
    transform: scale(1.05);
  }

  .pt-3 {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 1.25rem !important;

    h5 {
      font-size: 1.25rem;
      font-weight: 600;
      color: white;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
      color: rgba(255, 255, 255, 0.7);

      &:first-of-type {
        color: $primary;
        font-weight: 500;
      }
    }
  }

  .member-blurb {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), $bgColorDark);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 12px;

    p {
      font-style: italic;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.9);
      position: relative;

      &::before {
        content: '"';
        font-size: 3rem;
        position: absolute;
        top: -1.5rem;
        left: -0.5rem;
        color: rgba($primary, 0.3);
        font-family: serif;
      }

      &::after {
        content: '"';
        font-size: 3rem;
        position: absolute;
        bottom: -2.5rem;
        right: -0.5rem;
        color: rgba($primary, 0.3);
        font-family: serif;
      }
    }

    i.bi-linkedin {
      color: #0077b5;
      margin-top: 1rem;
    }
  }

  &:hover .member-blurb {
    opacity: 1;
    transform: translateY(0);
  }
}

// Keep your car styling intact
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

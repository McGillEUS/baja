<script setup>
import TypingText from "../components/TypingText.vue";
import { onMounted } from "vue";
import { anchorLink } from "../assets/utils";

import landingBG from "../assets/images/team-photo.jpg"; // You might want to replace this with a specific recruitment image

const props = defineProps({ anchor: String });
defineEmits(["navigate"]);

onMounted(() => {
  if (props.anchor !== "") anchorLink(props.anchor);
});
</script>

<template>
  <main id="recruitment">
    <section
      id="recruitment-landing-section"
      class="min-vh-100 full-height-image"
      :style="{
        backgroundImage: 'url(' + landingBG + ')',
        backgroundAttachment: 'fixed',
      }"
    >
      <div class="full-height-overlay">
        <div class="full-height-content landing-content">
          <h1 class="display-1">Join McGill Baja</h1>
          <p class="fs-5 pt-3">
            <typing-text text="Build the future with us!" />
          </p>
        </div>
        <span class="nav-link scroll-down" @click="anchorLink('join-us')"
          ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
        ></span>
      </div>
    </section>

    <section id="join-us" class="container-xl py-3 py-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">Why Join Us?</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <div class="container">
          <p class="fs-5 px-4">
            McGill Baja offers a unique opportunity to gain hands-on engineering
            experience while competing at an international level.
          </p>
        </div>
      </div>

      <div class="row g-4 py-3">
        <div class="col-md-6 col-lg-4">
          <div class="benefits-card h-100 p-4">
            <div class="text-center mb-3">
              <i class="bi bi-tools fs-1 text-primary"></i>
            </div>
            <h3 class="text-center mb-3">Hands-on Experience</h3>
            <p>
              Apply classroom knowledge to real-world engineering challenges and
              develop practical skills that employers value.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="benefits-card h-100 p-4">
            <div class="text-center mb-3">
              <i class="bi bi-people-fill fs-1 text-primary"></i>
            </div>
            <h3 class="text-center mb-3">Team Collaboration</h3>
            <p>
              Work with passionate students from various engineering disciplines
              to solve complex problems together.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="benefits-card h-100 p-4">
            <div class="text-center mb-3">
              <i class="bi bi-trophy fs-1 text-primary"></i>
            </div>
            <h3 class="text-center mb-3">Competition</h3>
            <p>
              Represent McGill at international competitions against teams from
              top engineering schools worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="positions" class="container-xl py-3 py-lg-5 bg-dark">
      <div class="text-center py-5">
        <h2 class="display-3">Open Positions</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <div class="container">
          <p class="fs-5 px-4">
            We're looking for motivated students to join various departments
          </p>
        </div>
      </div>

      <div class="row g-4 py-3">
        <div class="col-md-6">
          <div class="position-card h-100 p-4">
            <h3 class="mb-3">Mechanical Team</h3>
            <p>
              Design and manufacture components for our vehicle including
              suspension, chassis, drivetrain, and more.
            </p>
            <h5 class="mt-4 mb-3">Skills Taught:</h5>
            <ul>
              <li>CAD and 3D design</li>
              <li>Mechanical design</li>
              <li>Hands-on fabrication and Manufactiring</li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="position-card h-100 p-4">
            <h3 class="mb-3">Electrical Team</h3>
            <p>
              Design and implement electrical systems including sensor arrays,
              data acquisition, and custom PCBs.
            </p>
            <h5 class="mt-4 mb-3">Skills Taught:</h5>
            <ul>
              <li>Circuit Design</li>
              <li>Microcontroller Programming</li>
              <li>Data Acquisition</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row g-4 py-3">
        <div class="col-md-6">
          <div class="position-card h-100 p-4">
            <h3 class="mb-3">Business Team</h3>
            <p>
              Manage team budget, sponsor relationships, marketing, and
              logistics for competitions and events.
            </p>
            <h5 class="mt-4 mb-3">Skills Taught:</h5>
            <ul>
              <li>Communication and Presentation skills</li>
              <li>Project management</li>
              <li>Marketing and Finance skills</li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="position-card h-100 p-4">
            <h3 class="mb-3">Software Team</h3>
            <p>
              Develop software for data analysis, vehicle simulations, and
              website maintenance.
            </p>
            <h5 class="mt-4 mb-3">Skills Taught:</h5>
            <ul>
              <li>Programming experience</li>
              <li>Web development knowledge</li>
              <li>Data analysis interest</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="learn-about-us" class="p-3 pt-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">Learn About Us</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <div class="container">
          <p class="fs-5 justified-p px-4">
            Our first general meeting is on
            <strong>Monday, January 12th at 5:00PM</strong> in the EUS
            Commonroom. After this, you can come and learn about our team and
            ask any questions at the following meeting times:
          </p>

          <p class="fs-5 mt-4">
            <strong>Winter Semester General Meetings:</strong><br />
            Mondays at 5:30pm – 6:00pm in the EUS Commonroom
          </p>

          <p class="fs-5 mt-3">
            <strong>Winter Semester Shop Days:</strong><br />
            Thursdays at 6:00pm in MEDN
          </p>
        </div>
      </div>
    </section>

    <section id="application" class="container-xl py-3 py-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">How to Join the Team</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="application-steps p-4">
            <ol class="fs-5">
              <li class="mb-4">
                <h4>Say Hi!</h4>
                <p>
                  Come to our first general meeting on Monday, January 12th at
                  5:00pm in the EUS Commonroom or any general meeting after to
                  learn more about us and ask questions!
                </p>
              </li>
              <li class="mb-4">
                <h4>Submit the Membership Form</h4>
                <p>
                  Fill out the 2025-2026 Baja Membership Form and pay the team
                  fee
                </p>
              </li>
              <li class="mb-4">
                <h4>Complete the Safety Training(s)</h4>
                <p>
                  Complete our safety training (details are in the membership
                  form) to get access to our cool workshop: MEDN! Note: this is
                  not required to begin working on projects
                </p>
              </li>
              <li class="mb-4">
                <h4>Show Up!</h4>
                <p>
                  Choose the subteam you want to join and start working on
                  exciting projects with us!
                </p>
              </li>
            </ol>

            <div class="text-center mt-5">
              <a
                href="https://forms.office.com/r/hAmjPQ8rpY"
                class="btn btn-primary btn-lg px-4"
                >Join Now</a
              >
              <p class="mt-3">
                or email us at:
                <a href="mailto:baja@mcgilleus.ca">baja@mcgilleus.ca</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.benefits-card,
.position-card {
  background-color: $bgColorDark;
  border-bottom: 2px solid $primary;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.application-steps {
  background-color: $bgColorDark;
  border-left: 3px solid $primary;

  ol {
    counter-reset: step-counter;
    list-style-type: none;
    padding-left: 0;

    li {
      position: relative;
      padding-left: 50px;

      &::before {
        content: counter(step-counter);
        counter-increment: step-counter;
        position: absolute;
        left: 0;
        top: 0;
        background-color: $primary;
        color: white;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      }
    }
  }
}
</style>

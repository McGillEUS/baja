<script setup>
import TypingText from "../components/TypingText.vue";
import { sponsors } from "../assets/automation/sponsors.json";
import { onMounted } from "vue";
import { anchorLink } from "../assets/utils";

import landingBG from "../assets/images/car.png";
import shortDescImage from "../assets/images/what_we_do.jpg";
import teamworkImage from "../assets/images/teamwork.jpg";

const props = defineProps({ anchor: String });
defineEmits(["navigate"]);

onMounted(() => {
  if (props.anchor !== "") anchorLink(props.anchor);
});

const logoSizeClass = (tier) => {
  if (tier === "iron") {
    return "logo-small";
  } else if (tier === "bronze") {
    return "logo-medium";
  } else {
    return "logo-large"; // silver, gold, diamond
  }
};
</script>

<template>
  <main id="home">
    <section
      id="home-landing-section"
      class="min-vh-100 full-height-image"
      :style="{
        backgroundImage: 'url(' + landingBG + ')',
        backgroundAttachment: 'fixed',
      }"
    >
      <div class="full-height-overlay">
        <div class="full-height-content landing-content">
          <h1 class="display-1">McGill Baja Racing</h1>
          <p class="fs-5 pt-3">
            <typing-text text="Take the dirt road home" />
          </p>
        </div>
        <span
          class="nav-link scroll-down"
          @click="anchorLink('baja-short-desc')"
          ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
        ></span>
      </div>
    </section>

    <section id="baja-short-desc" class="min-vh-100 row">
      <div
        class="col-md-6 d-flex justify-content-center align-items-center order-md-1"
      >
        <div class="offset-content px-3 px-sm-5 px-lg-0 py-5">
          <h2 class="display-3">What we do</h2>
          <div class="title-separator mt-3 mb-5"></div>
          <p class="fs-5 justified-p">
            Every year, the McGill Baja Racing Team builds a new single-seat
            off-road vehicle and brings it across North America to compete with
            other universities from around the world. Working through the entire
            design cycle together, we develop real-world skills, equipping us to
            be the next generation of great engineers.
          </p>
        </div>
      </div>
      <div
        class="col-md-6 full-height-image order-md-0"
        :style="{
          backgroundImage: 'url(' + shortDescImage + ')',
          minHeight: '400px',
        }"
      ></div>
    </section>

    <section id="team-short-desc" class="min-vh-100 row bg-darker">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="offset-content px-3 px-sm-5 px-lg-0 py-5">
          <h2 class="display-3">Our team</h2>
          <div class="title-separator mt-3 mb-5"></div>
          <p class="fs-5 justified-p">
            We are a group of over 50 McGill University students of various
            academic levels working together to design and manufacture an
            off-road prototype vehicle. While the team consists mostly of
            engineering students, we have members from all faculties on campus.
          </p>
          <span
            class="btn-animated mt-3"
            @click="$emit('navigate', 'team#team')"
          >
            Check us out<i class="bi bi-arrow-right"></i>
          </span>
        </div>
      </div>
      <div
        class="col-md-6 full-height-image"
        :style="{
          backgroundImage: 'url(' + teamworkImage + ')',
          minHeight: '400px',
        }"
      ></div>
    </section>

    <section class="pt-3 pt-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">2026 Competitions</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <div class="container">
          <p class="fs-5 justified-p px-4">
            Simulating real-world engineering design projects and their related
            challenges, teams are challenged to design and build a prototype for
            a reliable, maintainable, ergonomic, and economic production vehicle
            that serves a recreational user market. The students must function
            as a team to design, engineer, build, test, promote, and compete
            with a vehicle within the limits of the rules.
          </p>
        </div>
      </div>

      <div class="row pt-3 pt-lg-5 justify-content-center">
        <div
          class="col-md-6 col-lg-3 comp-map full-height-image"
          style="background-image: url('images/maps/QC.png')"
        >
          <div class="map-content">
            <h3>Épreuve du Nord</h3>
            <p class="text-primary">Feb 6 - 7</p>
            <p>Quebec City, Quebec, Canada</p>
          </div>
        </div>

        <div
          class="col-md-6 col-lg-3 comp-map full-height-image"
          style="background-image: url('images/maps/NY.png')"
        >
          <div class="map-content">
            <h3>Baja SAE New York</h3>
            <p class="text-primary">June 11 - 14</p>
            <p>Palmyra, NY, USA</p>
          </div>
        </div>

        <div
          class="col-md-6 col-lg-3 comp-map full-height-image"
          style="background-image: url('images/maps/Ohio.png')"
        >
          <div class="map-content">
            <h3>Baja SAE Ohio</h3>
            <p class="text-primary">Sept 24 - 27</p>
            <p>Nashport, Ohio, USA</p>
          </div>
        </div>

        <!-- Rest of your maps -->
      </div>
    </section>

    <section id="newsletter" class="p-3 pt-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">Newsletter</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <div class="container">
          <p class="fs-5 justified-p px-4">
            Catch up on our latest updates, competition results, and team news.
            Scroll through our most recent newsletter below:
          </p>

          <!-- ✅ Embedded PDF -->
          <div class="d-flex justify-content-center">
            <iframe
              src="./McGill Baja newsletter, French and English.pdf"
              class="newsletter-frame"
              title="McGill Baja Newsletter"
              style="width: 50%; height: 700px; border: none"
            ></iframe>
          </div>

          <p class="mt-4">
            <a
              class="btn-animated"
              href="./McGill Baja newsletter, French and English.pdf"
              target="_blank"
              rel="noopener"
            >
              Open Full Newsletter
              <i class="bi bi-box-arrow-up-right ps-2"></i>
            </a>
          </p>
        </div>
      </div>
    </section>

    <section id="sponsors" class="p-3 pt-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">Sponsors</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <div class="container">
          <p class="fs-5 justified-p px-4">
            We rely on sponsorships to help us get materials, manufacture parts,
            use specialized software and cover expenses. Attending competitions
            wouldn't be possible without them.
          </p>
          <p class="fs-2 py-3 py-lg-5">Thank you to all our sponsors!</p>
        </div>

        <div id="sponsor-images" class="container py-5 text-center">
          <!-- Loop over tiers -->
          <div
            v-for="(group, tier) in sponsors"
            :key="tier"
            class="sponsor-group mb-5"
          >
            <div class="row justify-content-center g-4">
              <div
                v-for="sponsor in group"
                :key="sponsor.name"
                class="col-6 col-md-4 col-lg-3 d-flex justify-content-center"
              >
                <a :href="sponsor.link" target="_blank" rel="noopener">
                  <img
                    :src="sponsor.path"
                    :alt="sponsor.name"
                    class="sponsor-logo"
                    :class="logoSizeClass(tier)"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <p class="fs-5 justified-p px-4">
          Thinking about sponsoring us? Check out our sponsorship packages and
          learn how you can help by
          <span class="link-primary span-link" @click="anchorLink('contact')">
            contacting us
          </span>
          today!
        </p>
        <div class="d-flex flex-wrap justify-content-center gap-3 my-3 my-lg-5">
          <a
            class="btn-animated"
            href="./MB26 Sponsorship-EN.pdf"
            target="_blank"
          >
            Sponsorship Package (EN)
            <i class="bi bi-box-arrow-up-right ps-2"></i>
          </a>
          <a
            class="btn-animated"
            href="./MB26 Sponsorship-FR.pdf"
            target="_blank"
          >
            Sponsorship Package (FR)
            <i class="bi bi-box-arrow-up-right ps-2"></i>
          </a>
        </div>
      </div>
    </section>

    <section id="contact" class="p-3 py-lg-5 bg-darker text-center">
      <h2 class="display-3 pt-5">Contact Us</h2>
      <div class="title-separator mt-3 mb-5 mx-auto"></div>
      <div class="container">
        <p class="fs-5 pb-3 pb-lg-5">
          Feel free to get in touch with us anytime!
        </p>
        <div class="row">
          <div class="col-md-6 col-xl-4 pb-4">
            <h3 class="pb-2 pb-lg-3">Team Info</h3>
            <p>
              Email: <a href="mailto:baja@mcgilleus.ca">baja@mcgilleus.ca</a>
            </p>
            <p>
              Address:
              <a href="https://goo.gl/maps/UQUaLrjRW4H1KXc56"
                >McGill University</a
              >
            </p>
            <address>
              817 Sherbooke Street West, <br />MacDonald Engineering Bldg Rm
              270, <br />Montreal, QC, H3A 0C3
            </address>
          </div>
          <div class="col-md-6 col-xl-4 pb-4">
            <h3 class="pb-2 pb-lg-3">Newsletter</h3>
            <p>
              Stay up-to-date with our latest events, competition results, and
              team announcements!
            </p>
            <p class="mb-3">
              Join our mailing list to receive quarterly updates from the McGill
              Baja Racing team.
              <a
                href="https://forms.office.com/r/M7SX5jSRis"
                target="_blank"
                class="link-primary"
                >Sign up here</a
              >
            </p>
          </div>
          <div class="col-xl-4 pb-4">
            <h3 class="pb-2 pb-lg-3">Social Media</h3>
            <p>
              Follow us on social media to see our regular updates and
              behind-the-scenes content!
            </p>
            <div class="d-flex justify-content-center mt-4">
              <a
                href="https://www.facebook.com/mcgillbaja"
                class="social-link me-3"
              >
                <i class="bi bi-facebook fs-3"></i>
              </a>
              <a
                href="https://www.instagram.com/mcgill_baja/"
                class="social-link me-3"
              >
                <i class="bi bi-instagram fs-3"></i>
              </a>
              <a
                href="https://ca.linkedin.com/company/mcgillbajaracing"
                class="social-link"
              >
                <i class="bi bi-linkedin fs-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.comp-map {
  height: 400px;
  border:3px solid #101519;

  .map-content {
    text-align: center;
    padding-top: 20%;
  }
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: $primary;
    transform: translateY(-3px);
    i {
      color: white;
    }
  }

  i {
    color: #dc3545; /* Using Bootstrap's red color */
  }
}

// #sponsor-images img {
//   max-width: 100%;
//   height: auto;
//   padding: 1.5rem;
// }

.sponsor-logo {
  display: block;
  width: 100%;
  height: auto; /* keeps proportions */
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
}

.sponsor-logo:hover {
  transform: scale(1.05); /* subtle hover zoom */
}

.logo-small {
  max-width: 120px; /* iron */
}

.logo-medium {
  max-width: 180px; /* bronze */
}

.logo-large {
  max-width: 240px; /* silver, gold, diamond */
}

#social-links a {
  position: relative;
  z-index: 1;
  font-size: 2.5rem;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  margin: 0 1rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: $body-bg;
    border-radius: 50%;
    z-index: -1;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    background-color: var(--bs-light);
    transition: background-color 0.2s;

    &::after {
      transform: scale(0.95);
      transition: transform 0.3s ease-in-out;
    }
  }

  .bi {
    color: var(--bs-light);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .newsletter-frame {
    width: 100%;
    max-width: 900px; /* keeps it aligned with your content */
    height: 600px; /* makes it scrollable */
    border: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* subtle shadow for consistency */
    border-radius: 0.5rem; /* matches rounded look */
  }
}
</style>

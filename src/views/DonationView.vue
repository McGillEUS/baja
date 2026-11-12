<script setup>
import TypingText from "../components/TypingText.vue";
import { onMounted } from "vue";
import { anchorLink } from "../assets/utils";
import Counter from "../components/Counter.vue";

import landingBG from "../assets/images/donation-landing.jpg"; 

const props = defineProps({ anchor: String });
defineEmits(["navigate"]);

onMounted(() => {
  if (props.anchor !== "") anchorLink(props.anchor);
});
</script>

<template>
  <main id="donation">
    <section
      id="donation-landing-section"
      class="min-vh-100 full-height-image"
      :style="{
        backgroundImage: 'url(' + landingBG + ')',
        backgroundAttachment: 'fixed',
      }"
    >
      <div class="full-height-overlay">
        <div class="full-height-content landing-content">
          <h1 class="display-1">Donations</h1>
          <p class="fs-5 pt-3">
            <typing-text text="How you can support us!" />
          </p>
        </div>
        <span class="nav-link scroll-down" @click="anchorLink('join-us')"
          ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
        ></span>
      </div>
    </section>
    <section id="countdown-timer" class="p-3 pt-5 pb-2">
        <div class="text-center py-5">
            <h2 class="display-3">Fuel Innovation. Drive Competition.</h2>
            <div class="title-separator mt-3 mb-5 mx-auto"></div>
            <div class="container">
                <p class="fs-5 px-4">
                    Your support funds critical manufacturing upgrades and competition travel as we represent McGill on the international stage.
                    Donations will be matched by McGill, doubling the impact of your support. Join our campaign on March 11, 2027!
                </p>
            </div>
            <!-- <counter></counter> -->
        </div>
    </section>
    <section id="video-section" class="p-3 pt-2 pb-5">
        <div class="container-xl text-center py-5">
            <h2 class="display-3">Watch Our Team in Action</h2>
            <div class="title-separator mt-3 mb-5 mx-auto"></div>
            <div class="container">
                <p class="fs-5 px-4">
                    From the workshop to competition day, this is what your support makes possible.
                </p>
            </div>
            <div class="video-wrapper mx-auto">
            <iframe
                src="https://drive.google.com/file/d/1rQXNVr6c5qU4Xe6hjGu5_9WSBd7R068p/preview"
                title="McGill Baja Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            </div>
            <div class="py-4">
            <!-- <a
                href="https://crowdfunding.mcgill.ca/ui/main/p/bajaracing2026"
                target="_blank"
                class="donate-btn"
            >
                Donate Now
            </a> -->
        </div>
        </div>

    </section>
    <section class="p-3 py-lg-5 bg-darker text-center">
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
.video-wrapper {
  max-width: 900px;
  aspect-ratio: 16 / 9;
}

.video-wrapper iframe {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.donate-btn {
  display: inline-block;
  background-color: $primary;
  color: white;
  padding: 14px 36px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.donate-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  opacity: 0.9;
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
}
</style>

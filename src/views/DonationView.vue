<script setup>
import TypingText from "../components/TypingText.vue";
import { onMounted } from "vue";
import { anchorLink } from "../assets/utils";
import Counter from "../components/Counter.vue";

import landingBG from "../assets/images/donation-landing.jpg"; // You might want to replace this with a specific recruitment image

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
                    On March 11, donations will be matched by McGill, doubling the impact of your support. Join our campaign before time runs out.
                </p>
            </div>
            <counter></counter>
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
            <a
                href="https://crowdfunding.mcgill.ca/ui/main/p/bajaracing2026"
                target="_blank"
                class="donate-btn"
            >
                Donate Now
            </a>
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
</style>

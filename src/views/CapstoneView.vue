<script setup>
import { onMounted } from "vue";
import { anchorLink } from "../assets/utils";

const props = defineProps({ anchor: String });
defineEmits(["navigate"]);

onMounted(() => {
  if (props.anchor !== "") anchorLink(props.anchor);
});
</script>

<template>
  <main id="capstone">
    <section id="baja-short-desc" class="min-vh-100 py-5">
      <div class="container py-5 px-3 mt-4">
        <h2 class="display-5">Group 06: McGill Baja Racing<br />MB23 - Drivetrain Capstone</h2>
        <div class="title-separator mt-3 mb-5"></div>
        <ul>
          <li>Anthony Saidah - <a href="mailto:anthony.saidah@mail.mcgill.ca">anthony.saidah@mail.mcgill.ca</a></li>
          <li>Benjamin Jordan - <a href="mailto:benjamin.jordan@mail.mcgill.ca">benjamin.jordan@mail.mcgill.ca</a></li>
          <li>Justin Erb - <a href="mailto:justin.erb@mail.mcgill.ca">justin.erb@mail.mcgill.ca</a></li>
          <li>
            Manjot Singh Hanspal - <a href="mailto:manjot.hanspal@mail.mcgill.ca">manjot.hanspal@mail.mcgill.ca</a>
          </li>
        </ul>
        <p class="text-muted py-3">Advised by Dr. Amar Sabih, PhD, P.Eng</p>
        <article class="pt-3">
          <p class="justified-p">
            This year's McGill Baja Racing capstone project involves optimizing the first iteration of the Baja car's
            all-wheel drive (AWD) system. The first AWD system was built to be excessively reliable, which penalized the
            car during competitions. In addition, the SAE gave every Baja team a new engine that produces more power.
            The objectives for this year's Baja capstone were to reduce weight, lower the center of gravity (CG), retain
            open differential capabilities for the front wheels, and double the output torque from 350 lb-ft to 700
            lb-ft.
          </p>
          <p class="justified-p">
            To achieve these objectives, the team reduced the weight of the shafts by using physically larger,
            thinner-walled, and lighter shafts. They also optimized the engine mounts and gears using topology
            optimization and switched to helical gears. The gear ratios were tuned to increase torque with the
            additional engine power. The center driveshaft was routed through the frame, eliminating the need for shaft
            guards. The front axle uses a locked differential and Rzeppa CV joints, but sprag clutch bearings were used
            to emulate an open differential.
          </p>
          <p class="justified-p">
            As a result of these optimizations, the drivetrain became 15% lighter, the CG was lowered by 1", and the
            driver's seating position was lowered by 3".
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>

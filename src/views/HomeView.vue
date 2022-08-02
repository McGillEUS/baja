<script setup>
import TypingText from "../components/TypingText.vue";
</script>

<template>
  <main id="home">
    <section id="landing-section" class="min-vh-100 full-height-image">
      <div class="full-height-overlay">
        <div class="full-height-content landing-content">
          <h1 class="display-1">McGill Baja Racing</h1>
          <p class="fs-5 pt-3">
            <typing-text text="Take the dirt road home" />
          </p>
        </div>
        <RouterLink to="/#baja-short-desc" class="nav-link scroll-down"
          ><i class="bi bi-chevron-compact-down fs-1 px-2"></i
        ></RouterLink>
      </div>
    </section>

    <section id="baja-short-desc" class="min-vh-100 row">
      <div class="col-md-6 d-flex justify-content-center align-items-center order-md-1">
        <div class="offset-content px-3 px-sm-5 px-lg-0">
          <h2 class="display-3">What we do</h2>
          <div class="title-separator mt-3 mb-5"></div>
          <p class="fs-5 justified-p">
            Every year, the McGill Baja Racing Team builds a new single-seat off-road vehicle and brings it across North
            America to compete with other universities from around the world. Working through the entire design cycle
            together, we develop real-world skills, equipping us to be the next generation of great engineers.
          </p>
        </div>
      </div>
      <div class="col-md-6 full-height-image order-md-0"></div>
    </section>

    <section id="team-short-desc" class="min-vh-100 row bg-darker">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="offset-content px-3 px-sm-5 px-lg-0">
          <h2 class="display-3">Our team</h2>
          <div class="title-separator mt-3 mb-5"></div>
          <p class="fs-5 justified-p">
            We are a group of over 50 McGill University students of various academic levels working together to design
            and manufacture an off-road prototype vehicle. While the team consists mostly of engineering students, we
            have members from all faculties on campus.
          </p>
          <RouterLink to="/team" class="btn-animated mt-3"
            >Check us out<i class="bi bi-arrow-right"></i
          ></RouterLink>
        </div>
      </div>
      <div class="col-md-6 full-height-image"></div>
    </section>

    <section class="pt-3 pt-lg-5">
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
        <div
          class="col-md-6 col-lg-3 comp-map full-height-image"
          style="background-image: url('/src/assets/images/maps/quebec-city-QC.png')"
        >
          <div class="map-content">
            <h3>Épreuve du Nord</h3>
            <p class="text-primary">FEB 3 - 4</p>
            <p>Quebec City, Quebec, Canada</p>
          </div>
        </div>

        <div
          class="col-md-6 col-lg-3 comp-map full-height-image"
          style="background-image: url('/src/assets/images/maps/cookeville-TN.png')"
        >
          <div class="map-content">
            <h3>Baja SAE Tennessee</h3>
            <p class="text-primary">MAY 12 - 15</p>
            <p>Cookeville, Tennessee, USA</p>
          </div>
        </div>
        
        <div
          class="col-md-6 col-lg-3 comp-map full-height-image"
          style="background-image: url('/src/assets/images/maps/rochester-NY.png')"
        >
          <div class="map-content">
            <h3>Baja SAE Rochester</h3>
            <p class="text-primary">JUNE 2 - 5</p>
            <p>Rochester, New York, USA</p>
          </div>
        </div>
        
        <div
          class="col-md-6 col-lg-3 comp-map full-height-image"
          style="background-image: url('/src/assets/images/maps/green-valley-AZ.png')"
        >
          <div class="map-content">
            <h3>Baja SAE Arizona</h3>
            <p class="text-primary">SEP 29 - OCT 2</p>
            <p>Green Valley, Arizona, USA</p>
          </div>
        </div>
      </div>
    </section>

    <section id="sponsors" class="p-3 pt-lg-5">
      <div class="text-center py-5">
        <h2 class="display-3">Sponsors</h2>
        <div class="title-separator mt-3 mb-5 mx-auto"></div>
        <div class="container">
          <p class="fs-5 justified-p px-4">
            We rely on sponsorships to help us get materials, manufacture parts, use specialized software and cover
            expenses. Attending competitions wouldn't be possible without them.
          </p>
          <p class="fs-2 py-3 py-lg-5">Thank you to all our sponsors!</p>
        </div>
        <div id="sponsor-images" class="py-5 text-center">
          <!-- Purple -->
          <div class="row justify-content-center align-items-center pb-5">
            <div class="col-6">
              <a href="https://www.mcgill.ca/engineering/">
                <img src="@/assets/images/sponsors/facaulty-of-engineering.png" alt="McGill Faculty of Engineering" />
              </a>
            </div>
            <div class="col-6">
              <a href="https://monday.com/">
                <img src="@/assets/images/sponsors/monday.com-logo.png" alt="Monday.com" />
              </a>
            </div>
          </div>
          <!-- Platinum -->
          <div class="row justify-content-center align-items-center pb-5">
            <div class="col-6 col-md-5">
              <a href="https://mcgilleus.ca/">
                <img src="@/assets/images/sponsors/eus_logo.png" alt="McGill EUS" />
              </a>
            </div>
          </div>
          <!-- Gold -->
          <div class="row justify-content-center align-items-center pb-5">
            <div class="col-6 col-lg-4">
              <a href="https://ssmu.ca/">
                <img src="@/assets/images/sponsors/ssmu-logo.svg" alt="SSMU" />
              </a>
            </div>
            <div class="col-6 col-lg-4">
              <a href="https://aciervanguard.com/">
                <img src="@/assets/images/sponsors/acier-vanguard-logo.png" alt="Acier Vanguard" />
              </a>
            </div>
            <div class="col-6 col-lg-4">
              <a href="https://www.kisssoft.com/">
                <img src="@/assets/images/sponsors/kisssoft-logo.png" alt="KISSsoft" />
              </a>
            </div>
            <div class="col-6 col-lg-4">
              <a href="https://www.mantracourt.com/">
                <img src="@/assets/images/sponsors/mantracourt-logo.png" alt="Mantracourt" />
              </a>
            </div>
            <div class="col-6 col-lg-4">
              <a href="https://www.skf.com/">
                <img src="@/assets/images/sponsors/skf-logo.svg" alt="SKF" />
              </a>
            </div>
          </div>
          <!-- Silver -->
          <div class="row justify-content-center align-items-center pb-5">
            <div class="col-6 col-sm-4 col-lg-3">
              <a href="https://a7integration.com/">
                <img src="@/assets/images/sponsors/a7integration-logo.png" alt="A7 Integration" />
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
              <a href="https://aciervulcan.com/">
                <img src="@/assets/images/sponsors/acier-vulcan-logo.png" alt="Acier Vulcan" />
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
              <a href="http://www.industrieshd.com/">
                <img src="@/assets/images/sponsors/ateliers-mr-driveshaft-logo.png" alt="Ateliers Mr Driveshaft" />
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
              <a href="https://www.elkasuspension.com/">
                <img src="@/assets/images/sponsors/elka-logo.png" alt="Elka" />
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
              <a href="https://www.guruenergy.com/">
                <img src="@/assets/images/sponsors/guru-logo.png" alt="Guru" />
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
              <a href="https://www.robustgear.com/">
                <img src="@/assets/images/sponsors/robust-gear-logo.png" alt="Robust Gear" />
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
              <a href="https://s4suspension.com/">
                <img src="@/assets/images/sponsors/s4-suspension-logo.png" alt="S4 Suspension" />
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
              <a href="https://www.st-hubertmachineshop.com/">
                <img src="@/assets/images/sponsors/st-hubert-machine-shop-logo.png" alt="St Hubert Machine Shop" />
              </a>
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
              <a href="https://supalloy.com/">
                <img
                  src="@/assets/images/sponsors/superior-alloy-technology-logo.png"
                  alt="Superior Alloy Technology"
                />
              </a>
            </div>
          </div>
          <!-- Bronze -->
          <div class="row justify-content-center align-items-center pb-5">
            <div class="col-6 col-sm-3 col-lg-2">
              <a href="https://www.allballsracing.com/">
                <img src="@/assets/images/sponsors/all-balls-logo.png" alt="All Balls Racing" />
              </a>
            </div>
            <div class="col-6 col-sm-3 col-lg-2">
              <a href="https://www.aon3d.com/">
                <img src="@/assets/images/sponsors/aon3d-logo.svg" alt="AON3D" />
              </a>
            </div>
            <div class="col-6 col-sm-3 col-lg-2">
              <a href="https://www.emotorsdirect.ca/">
                <img src="@/assets/images/sponsors/emotors-direct-logo.svg" alt="eMotors Direct" />
              </a>
            </div>
            <div class="col-6 col-sm-3 col-lg-2">
              <a href="https://www.hoskin.ca/">
                <img src="@/assets/images/sponsors/hoskin-scientific-logo.png" alt="Hoskin Scientific" />
              </a>
            </div>
            <div class="col-6 col-sm-3 col-lg-2">
              <a href="https://www.polaris.com/">
                <img src="@/assets/images/sponsors/polaris-logo.svg" alt="Polaris" />
              </a>
            </div>
            <div class="col-6 col-sm-3 col-lg-2">
              <a href="https://www.thermetco.com/">
                <img src="@/assets/images/sponsors/thermetco-logo.png" alt="Thermetco" />
              </a>
            </div>
            <div class="col-6 col-sm-3 col-lg-2">
              <a href="https://www.equipeibs.com/">
                <img src="@/assets/images/sponsors/tuboquip-logo.svg" alt="Tuboquip" />
              </a>
            </div>
            <div class="col-6 col-sm-3 col-lg-2">
              <a href="https://www.ultraspec.ca/">
                <img src="@/assets/images/sponsors/ultraspec-logo.png" alt="Ultraspec" />
              </a>
            </div>
            <div class="col-6 col-sm-3 col-lg-2">
              <a href="https://www.wilwood.com/">
                <img src="@/assets/images/sponsors/wilwood-logo.png" alt="Wilwood" />
              </a>
            </div>
            <div class="col-6 col-sm-3 col-lg-2">
              <a href="https://www.libertyspring.com/">
                <img src="@/assets/images/sponsors/liberty-spring-logo.png" alt="Libery Spring" />
              </a>
            </div>
            <div class="col-6 col-sm-3 col-lg-2">
              <a href="https://www.powersourcecanada.ca">
                <img src="@/assets/images/sponsors/power-source-canada-logo.png" alt="Power Source Canada" />
              </a>
            </div>
          </div>
        </div>
        <div class="container">
          <p>
            Thinking about sponsoring us? Check out our
            <a href="./McGill-Baja-Racing-2021-2022-Sponsorship-Package.pdf" target="_blank">sponsorship package</a> and
            learn how you can help by <RouterLink to="/#contact">contacting us</RouterLink> today!
          </p>
          <div>
            <a
              class="btn-animated my-3 my-lg-5"
              href="./McGill-Baja-Racing-2021-2022-Sponsorship-Package.pdf"
              target="_blank"
              >Sponsorship Package<i class="bi bi-box-arrow-up-right ps-2"></i
            ></a>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="p-3 py-lg-5 bg-darker text-center">
      <h2 class="display-3 pt-5">Contact Us</h2>
      <div class="title-separator mt-3 mb-5 mx-auto"></div>
      <div class="container">
        <p class="fs-5 pb-3 pb-lg-5">Feel free to get in touch with us anytime!</p>
        <div class="row">
          <div class="col-md-6 col-xl-4 pb-4">
            <h3 class="pb-2 pb-lg-3">Team Info</h3>
            <p>Email: <a href="mailto:baja@mcgilleus.ca">baja@mcgilleus.ca</a></p>
            <p>Address: <a href="https://goo.gl/maps/UQUaLrjRW4H1KXc56">McGill University</a></p>
            <address>
              817 Sherbooke Street West, <br />MacDonald Engineering Bldg Rm 270, <br />Montreal, QC, H3A 0C3
            </address>
          </div>
          <div class="col-md-6 col-xl-8 pb-4">
            <h3 class="pb-2 pb-lg-3 d-xl-none">Captains' Info</h3>
            <div class="row">
              <div class="col-xl-6 pb-3">
                <h3 class="pb-2 pb-lg-3 d-none d-xl-block">Captain's Info</h3>
                <p>Benjamin Jordan</p>
                <p><a href="mailto:benjamin.jordan@mail.mcgill.ca">benjamin.jordan@mail.mcgill.ca</a></p>
                <p><a href="tel:514-730-7078">(514) 730-7078</a></p>
              </div>
              <div class="col-xl-6 pb-3">
                <h3 class="pb-2 pb-lg-3 d-none d-xl-block">Captain's Info</h3>
                <p>Zach Katz</p>
                <p><a href="mailto:zachary.katz@mail.mcgill.ca">zachary.katz@mail.mcgill.ca</a></p>
                <p><a href="tel:514-261-8845">(514) 261-8845</a></p>
              </div>
            </div>
          </div>
        </div>
        <div id="social-links" class="py-3 py-lg-5 d-flex justify-content-center">
          <a href="https://www.facebook.com/mcgillbaja"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/mcgill_baja/"><i class="bi bi-instagram"></i></a>
          <a href="https://ca.linkedin.com/company/mcgillbajaracing"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
#landing-section {
  background-image: url("@/assets/images/placeholders/landing-bg.jpg");
  background-attachment: fixed;
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

#sponsor-images img {
  max-width: 100%;
  height: auto;
  padding: 1.5rem;
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
    content: '';
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

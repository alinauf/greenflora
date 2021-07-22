<template>
  <div class=" mx-auto">
    <!-- <client-only> -->

    <b-carousel :autoplay="true">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <div
          class="relative px-4"
          style="
      padding-top: 35.5rem;
      padding-bottom: 35.5rem;"
        >
          <div class="z-20 relative text-white container mx-auto">
            <h1
              class="text-center  text-4xl font-semibold font-poppins tracking-tight sm:text-5xl lg:text-6xl"
              style="background: rgba(51, 170, 51, .3)"
            >
              <span class="block text-white  ">Welcome to Green Flora</span>
              <span class="block text-green-100"
                >Your comfort, in Maldives.</span
              >
            </h1>
          </div>
          <div class="absolute inset-0 h-screen z-10">
            <img
              :src="`./home-page/` + carousel.img"
              alt=""
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </b-carousel-item>
    </b-carousel>

    <!-- </client-only> -->

    <div class="flex flex-col justify-center items-center col-span-1">
      <div class="container mx-auto px-4">
        <div
          class="text-4xl md:text-5xl mt-20 font-semibold text-gf-main font-poppins"
        >
          Welcome to Green Flora
        </div>
        <div class="text-2xl font-semibold mt-4 text-gray-800 font-poppins">
          Your comfort, in Maldives.
        </div>

        <div class="text-lg tracking-wide leading-relaxed mt-10 text-gf-grey">
          Green Flora is a 6-story modern tourist guest house, located in the
          heart of Villimale. By normal ferry, it is just 6 minutes away from
          Male’, the capital city of Maldives. Villimale’ is officially a part
          of the Capital city and designed to keep as an environmental friendly
          atmosphere. In this small island, Motor vehicles are prohibited by
          regulations. Therefore, there are no hustles and bustles like modern
          cities. Government ferries are available at 24 hours and at every
          other minute. (This beautiful small island has a long history. It is
          the first Tourist resort in the country but now it is converted to
          part of Male’, the Capital of Maldives)
          <br /><br />
          Indeed the lovers of nature will like the peaceful and quietness of
          the island. On top of this heavenly atmosphere, they will adore the
          thick greenery of nature’s nest for birds.
          <br /><br />
          Green Flora is in the midst of thick and widespread greenery. A
          promised land of quietness and peace. Yet we have all the modern
          facilities that world-class facilities provide for guests. With lift
          services, we provide 18 air-conditioned rooms with attached bath room
          with hot and cold water. Wi-Fi is available in the room. Linked to
          outside-world by Telephone. Mini-bar is kept – and A mini-safe for
          your valuables. Self-service coffee and tea available in room.
          <br /><br />

          <ul class="list-disc list-outside ml-4">
            <li>We book reservation for our guests.</li>
            <li>We offer affordable yet very comfortable accommodations.</li>
            <li>
              We receive our guests at airport and arrange return journey.
            </li>
            <li>We arrange activities on request basis.</li>
          </ul>
        </div>

        <Room />

        <div class="w-full p-10 rounded-xl">
          <iframe
            class="w-full rounded-xl"
            height="500"
            src="https://www.youtube.com/embed/Ru_NgFmC8MA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="w-full p-10 rounded-xl">
          <iframe
            class="w-full rounded-xl"
            height="500"
            src="https://www.youtube.com/embed/QXm3hUPbSN0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";
import Room from "@/components/Room";

export default {
  components: {
    Slider,
    Room
  },
  data() {
    return {
      carousels: [
        { img: "1-slider.jpeg" },
        { img: "2-slider.jpeg" },
        { img: "3-slider.jpeg" },
        { img: "4-slider.jpeg" },
        { img: "5-slider.jpeg" },
        { img: "6-slider.jpeg" }
      ]
    };
  }
};
</script>

<style></style>

<template>
  <div>
    <RoomSlider />

    <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ]
  }
  ```
-->
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <!-- <span
              class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
              >Rooms</span
            > -->
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gf-main sm:text-4xl"
              >Rooms</span
            >
          </h1>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-800 mx-auto">
          <p>
            All our rooms are beautiful and comfortable. We have rooms with
            balcony. We have rooms out looking greenery. We have double and
            triple rooms. All are ideal even to stay for a longer vacation. For
            your comfort and relaxation we extend you our fine-looking- garden-
            terrace with a modern kitchen and fanciful café to have self-papered
            meals. This heavenly atmosphere is over-looking Indian Ocean. This
            excellent facility is specially designed to suite your holiday dream
            a reality
          </p>
        </div>
      </div>
    </div>

    <!--  -->

    <div class="container  px-4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 ">
      <div
        v-for="(gorsel, gorselIndex) in gorseller"
        :key="gorselIndex"
        class="ma-2 "
        style="margin-right: 10px"
        @click="index = gorselIndex"
      >
        <div class="rounded-lg overflow-hidden cursor-pointer">
          <img :src="gorsel.url" class="rounded-lg overflow-hidden" />
        </div>
      </div>
      <LightGallery
        :images="gorseller"
        :index="index"
        :disable-scroll="false"
        @close="index = null"
      />
    </div>

    <!--  -->
  </div>
</template>

<script>
//   import RoomSlider from '@/components/RoomSlider'

export default {
  components: {
    // RoomSlider,
  },
  data: () => ({
    gorseller: [
      { title: "", url: "/room-photos/1.jpg" },
      { title: "", url: "/room-photos/2.jpg" },
      //   { title: "", url: "/room-photos/3.jpg" },
      { title: "", url: "/room-photos/4.jpg" },
      { title: "", url: "/room-photos/5.jpg" },
      { title: "", url: "/room-photos/6.jpg" },
      { title: "", url: "/room-photos/7.jpg" },
      { title: "", url: "/room-photos/8.jpg" },
      { title: "", url: "/room-photos/10.jpg" },
      { title: "", url: "/room-photos/11.jpg" },
      { title: "", url: "/room-photos/12.jpg" },
      { title: "", url: "/room-photos/13.jpg" },
      { title: "", url: "/room-photos/14.jpg" },
      { title: "", url: "/room-photos/15.jpg" },
      { title: "", url: "/room-photos/16.jpg" },
      { title: "", url: "/room-photos/17.jpg" },
      { title: "", url: "/room-photos/18.jpg" }
    ],
    index: null
  })
};
</script>

<style scoped>
/* .resimKutusu {
  border: 1px solid #cdcdcd;
  padding: 5px;
  background: #eeeeee;
  border-radius: 5px;
  cursor: pointer;
} */
</style>

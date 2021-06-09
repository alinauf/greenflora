<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
    <div class="bg-white h-1/3 sm:h-2/3"></div>
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <!-- <h2 class="text-2xl tracking-tight font-extrabold text-gf-bggr sm:text-4xl">
        Our Rooms
      </h2> -->
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-800 sm:mt-4">
        <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed. -->
      </p>
    </div>


    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

      <NuxtLink to="our-services">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" :src="`/rooms/room-3.jpg`" alt="">
        </div>
        <div class="flex-1 bg-gf-main hover:bg-gf-bggr hover:text-dark p-6 
            flex flex-col justify-between 
            transition duration-500 ease-in-out">
          <div class="flex-1">

            <div class="block mt-2">
              <p class="text-xl text-center font-semibold text-white">
                Rooms
              </p>
              <p class="mt-3 text-base text-gray-800">
                <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum. -->
              </p>
            </div>
          </div>

        </div>
      </div>
      </NuxtLink>


      <NuxtLink to="maldives">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" :src="`/maldives/19.jpeg`" alt="">
        </div>
        <div class="flex-1 bg-gf-main hover:bg-gf-bggr hover:text-dark p-6 
            flex flex-col justify-between 
            transition duration-500 ease-in-out">
          <div class="flex-1">

            <div class="block mt-2">
              <p class="text-xl text-center font-semibold text-white">
                Maldives
              </p>
              <p class="mt-3 text-base text-gray-800">
                <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium. -->
              </p>
              </div>
          </div>

        </div>
      </div>
      </NuxtLink>


      <NuxtLink to="gallery">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" :src="`/maldives/29.jpeg`" alt="">
        </div>
        <div class="flex-1 bg-gf-main hover:bg-gf-bggr hover:text-dark p-6 
            flex flex-col justify-between 
            transition duration-500 ease-in-out">
          <div class="flex-1">
            <div class="block mt-2">
              <p class="text-xl text-center font-semibold text-white">
                Gallery
              </p>
              <p class="mt-3 text-base text-gray-800">
                <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium. -->
              </p>
            </div>
          </div>

        </div>
      </div>
      </NuxtLink>


    </div>
  </div>
</div>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
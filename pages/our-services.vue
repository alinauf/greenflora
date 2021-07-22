<template>
<div>
    <RoomSlider/>

  <div class="container mt-1 max-w-7xl mx-auto">
    <div class="relative bg-white">
      <div class="lg:absolute lg:inset-0">
        <div class="inline-block lg:w-1/2 ">
          <img class="h-auto w-full align-middle mt-20" :src="`/1-slider.jpeg`" alt="">
        </div>

                <div class="inline-block lg:w-1/2 ">
          <img class="h-auto w-full align-middle mt-20" :src="`/maldives/green-flora-aerial.jpeg`" alt="">
        </div>
      </div>
    
      <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div class="lg:col-start-2 lg:pl-8">
          <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <!-- <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Work with us</h2> -->
            <span class="mt-2 block text-3xl text-left leading-8 font-extrabold tracking-tight text-gf-main sm:text-4xl">Our Services</span>
            <p class="mt-8 text-lg text-gray-800">
                Green Flora, a world class guesthouse is in the midst of thick and widespread greenery. 
                A promised land of  quietness and peace. 
                Yet we have all the modern facilities that world-class facilities provide for guests. 
                With lift services, we provide 18  air-conditioned rooms with hot and cold water bath room.  
                Flat Tv is available in each room.  Wi-Fi is available in the room.  
                Linked to outside-world by Telephone.  
                Mini-bar is kept – and  A mini-safe for your valuables.  Self-service coffee and tea available in room. 

            </p>
            <div class="mt-5 prose prose-indigo text-gray-800">
            <ul>
                <li>We book reservation for our guests. </li>
                <li>We offer affordable yet very comfortable accommodations.</li>
                <li>We receive our guests at airport and arrange return journey. </li>
                <li>We arrange activities on request basis.</li>
              </ul>
              <h3>In-house guests can use the terrace.</h3>
            
            <p class="mt-8 text-lg text-gray-800">
                Our rooftop garden terrace is designed for comfortable activates: 
            </p>
              <p>
                We rent it for wedding parties, birthday parties and friendship get-together parties. 
              </p>
              <p>
                  Also we have BBQ facilities for over 70 people.
              </p>
              <p>
                  This heavenly rooftop garden Terrance is overlooking Indian Ocean. When you look at the Vicinity at night you can contrast Male’, the capital with a civilized world of lights around it. When evening breeze touches you, you will feel marvelous. Come and refresh in this amazing Greenery around you.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-2"></div>

<!--  -->
        <!-- <div class="container  px-4 mx-auto  mt-10"> 
            <div class="mt-2 lg:max-w-7xl lg:mx-auto   block text-2xl text-left leading-8 font-extrabold tracking-tight text-green-700 sm:text-4xl">Room Gallery</div>
        </div> -->


<!-- 
        <div class="container  px-4 mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mt-10"> 
          <div
          v-for="(gorsel, gorselIndex) in gorseller"
          :key="gorselIndex"
          class="ma-2 "
          style="margin-right: 10px"
          @click="index = gorselIndex"
          >
              <img width="180" height="180" :src="gorsel.url" class="resimKutusu" />
              
          </div>
        <LightGallery
          :images="gorseller"
          :index="index"
          :disable-scroll="false"
          @close="index = null"
        /> -->


      <!-- </div> -->

<!--  -->

</div>
</template>

<script>
  //   import RoomSlider from '@/components/RoomSlider'

  //   export default {
  //       components: {
  //           // RoomSlider,
  //       },
  //         data: () => ({
  //   gorseller: [
  //     { title: "",url: '/rooms/room-1.jpg' },
  //     { title: "",url: '/rooms/room-3.jpg' },
  //     { title: "",url: '/rooms/room-4.jpg' },
  //     { title: "",url: '/rooms/room-5.jpg' },
  //     { title: "",url: '/rooms/room-6.jpg' },
  //     { title: "",url: '/rooms/room-7.jpg' },
  //   ],
  //   index: null,
  // }),
  //   }
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

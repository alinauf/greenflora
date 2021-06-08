

<template>
  <section>

<div>
      <h1>
        <!-- <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Introducing</span> -->
        <span class="mt-8 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gf-main sm:text-4xl">Gallery</span>
      </h1>
        <div class="container px-8 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-10"> 
          <div
          v-for="(gorsel, gorselIndex) in gorseller"
          :key="gorselIndex"
          class="ma-2 mx-auto"
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
        />
        </div>
</div>




  </section>
</template>

<script>
export default {
  data: () => ({
    gorseller: [
      { title: "Maldives",url: '/maldives/1.jpeg' },
      { title: "Maldives Aerial Photograph", url: '/maldives/2.jpeg' },
      { title: "Maldives Aerial Photograph", url: '/maldives/3.jpeg' },
      { title: "Maldives Aerial Photograph", url: '/maldives/4.jpeg' },
      { title: "Maldives Aerial Photograph", url: '/maldives/6.jpeg' },
      { title: "Luxury Beaches", url: '/maldives/7.jpeg' },
      { title: "Luxury Beaches", url: '/maldives/8.jpeg' },
      { title: "Luxury Beaches", url: '/maldives/9.jpeg' },
      { title: "Luxury Beaches", url: '/maldives/10.jpeg' },
      { title: "Luxury Beaches", url: '/maldives/11.jpeg' },
      { title: "Luxury Beaches", url: '/maldives/12.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/13.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/14.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/15.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/16.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/17.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/18.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/19.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/20.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/21.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/22.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/23.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/24.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/25.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/26.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/27.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/28.jpeg' },
      { title: "Best Resorts In Maldives", url: '/maldives/29.jpeg' },
      { title: "Maldives Aerial Photograph", url: '/maldives/5.jpeg' },

    ],
    index: null,
  }),
  components: {},
};
</script>


<style scoped>
.resimKutusu {
  border: 1px solid #cdcdcd;
  padding: 5px;
  background: #eeeeee;
  border-radius: 5px;
  cursor: pointer;
}
</style>

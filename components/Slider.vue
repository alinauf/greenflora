<template>
    <client-only>

    <!-- <VueSlickCarousel v-bind="slickOptions" class="col-span-5"> -->
      <div  class="w-full min-w-full img-wrapper" >
        <img :src="`./1-slider.jpg`" class="object-cover" />
      </div>
    <!-- </VueSlickCarousel> -->
    </client-only>

</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
        components: { VueSlickCarousel },

    data() {
        return {
        slickOptions: {
            slidesToShow: 1,
            arrows: false,
            autoplay:true,
            autoplaySpeed:4000
        }
        }
    }
}
</script>


<style>
.carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 100%;
  height:70vh;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>

<template>
  <div>
    <Nav></Nav>
    <nuxt />

<footer class="bg-gf-main mt-20 max-w flex text-black mx-auto">
  <div class="container mx-auto px-4 py-12">
    <div class="mb-10">
      <p class="text text-hairline py-8 text-italic">Spend your vacation here at Green Flora Hotel. Elegant rooms at an affordable price.</p>
      <div>
      <a class="text inline-block" href="https://www.google.com/maps/place/Green+Flora/@4.1740887,73.4853653,19z/data=!4m11!1m2!3m1!2sGreen+Flora!3m7!1s0x3b3f7e345089221d:0xaae0af6a94e044d4!5m2!4m1!1i2!8m2!3d4.1745269!4d73.485106">
      📍 Green Flora,<br>
      <span class="pl-6"></span> Sheikh Abdhu'rahmaan Magu,<br>
      <span class="pl-6"></span> Villimale’, Malé </a><br><br>
      <a href="tel:+9607777655" class="text text-dark hover:text-black text-left inline-block">📞 +9607777655</a> <br>
      <a class="text text-dark hover:text-black inline-block "href="mailto:greenflora2021@gmail.com">
      ✉️  greenflora2021@gmail.com</a>
      </div>
    </div>
    <div class="flex justify-start items-start">
      <ul class="list-reset flex">
        <li class="mr-8">
          <a href="/" class="no-underline hover:underline text-white">
            <h2 class="text-2xl text-white text-bold">Green Flora</h2>
          </a>
        </li>
      </ul>
      
      <ul class="list-reset self-center flex ml-auto">
        <li class="mr-8">
          <a class="text-white text-bold no-underline hover:text-black" href="https://www.instagram.com/greenfloramaldives/">Instagram</a>
        </li>
        <li class="mr-8">
          <a class="text-white text-bold no-underline hover:text-black" href="https://www.facebook.com/greenflora2021">Facebook</a>
        </li>
      </ul>
    </div>
  </div>
</footer>

  </div>

</template>

<script>
import Nav from '@/layouts/partials/Nav.vue'
export default {
  components:{
    Nav
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #54C3AC;
  color: #FFF;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #34495e;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #54C3AC;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #34495e;
}
</style>


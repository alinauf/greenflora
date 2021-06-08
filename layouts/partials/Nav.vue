<!-- This example requires Tailwind CSS v2.0+ -->
<template>

<nav class="bg-white shadow">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-24">
      <div class="flex">
        <div class="-ml-2 mr-2 flex items-center md:hidden">
          <!-- Mobile menu button -->
          
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex-shrink-0 flex items-center">
           <NuxtLink to="/">
           <img src="@/assets/images/green-flora-landscape.jpeg" class="p-4 p-sm-0 w-64" alt="Green Flora Logo">
            </NuxtLink>
        </div>
        <div class="hidden md:ml-6 md:flex md:space-x-8">

          <NuxtLink to="/" class="border-transparent text-gray-900 hover:border-gray-300 hover:text-gf-main inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Home
          </NuxtLink>

          <NuxtLink to="our-services" class="border-transparent text-gray-900 hover:border-gray-300 hover:text-gf-main inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Room & Services
          </NuxtLink>

          <NuxtLink to="diving" class="border-transparent text-gray-900 hover:border-gray-300 hover:text-gf-main inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Diving
          </NuxtLink>

          <NuxtLink to="/about-us" class="border-transparent text-gray-900 hover:border-gray-300 hover:text-gf-main inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            About Us
          </NuxtLink>

         <NuxtLink to="/maldives" class="border-transparent text-gray-900 hover:border-gray-300 hover:text-gf-main inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Maldives
          </NuxtLink>

        </div>
      </div>
      <div class="hidden  md:flex items-center">
        <div class="flex-shrink-0">
          <a href="mailto:greenflora2021@gmail.com" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gf-main  shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <!-- Heroicon name: solid/plus -->
            <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            <span>Inquire Now</span>
          </a>
        </div>

      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="md:hidden" id="mobile-menu">
    <div class="pt-2 pb-3 space-y-1">

          <NuxtLink to="/" class="border-transparent text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            Home
          </NuxtLink>

          <NuxtLink to="our-services" class="border-transparent text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            Room & Services
          </NuxtLink>

          <NuxtLink to="diving" class="border-transparent text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            Diving
          </NuxtLink>

          <NuxtLink to="about-us" class="border-transparent text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            About Us
          </NuxtLink>

          <NuxtLink to="maldives" class="border-transparent text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            Maldives
          </NuxtLink>


    </div>

  </div>
</nav>
</template>



<script>
    export default {
    }
</script>

<style lang="scss" scoped>

</style>


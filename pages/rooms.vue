<template>

    <div class=" mx-auto">
            <!-- <client-only> -->
        <Slider />

    <!-- </client-only> -->

        <div class="flex flex-col justify-center items-center col-span-1">

            <div class="container mx-auto p-4">
                <div class="text-5xl md:text-6xl font-semibold text-gf-main font-poppins">
                    Welcome to Green Flora
                </div>
                <div class="text-2xl font-semibold text-gf-light font-poppins">
                    Your comfort, in Maldives.
                </div>

                <div class="text-lg tracking-wide leading-relaxed mt-4 text-gf-grey">
                    Green Flora is a 6-story modern tourist guest house, located in the heart of Villimale. By normal
                    ferry, it is just 6 minutes away from Male’, the capital city of Maldives. Villimale’ is officially
                    a part of the Capital city and designed to keep as an environmental friendly atmosphere. In this
                    small island, Motor vehicles are prohibited by regulations. Therefore, there are no hustles and
                    bustles like modern cities. Government ferries are available at 24 hours and at every other minute.
                    (This beautiful small island has a long history. It is the first Tourist resort in the country but
                    now it is converted to part of Male’, the Capital of Maldives)
                    <br><br>
                    Indeed the lovers of nature will like the peaceful and quietness of the island. On top of this
                    heavenly atmosphere, they will adore the thick greenery of nature’s nest for birds.
                    <br><br>
                    Green Flora is in the midst of thick and widespread greenery. A promised land of quietness and
                    peace. Yet we have all the modern facilities that world-class facilities provide for guests. With
                    lift services, we provide 18 air-conditioned rooms with attached bath room with hot and cold water.
                    Wi-Fi is available in the room. Linked to outside-world by Telephone. Mini-bar is kept – and A
                    mini-safe for your valuables. Self-service coffee and tea available in room.
                    <br><br>

                    <ul class="list-disc list-outside ml-4">
                        <li> We book reservation for our guests.
                        </li>
                        <li> We offer affordable yet very comfortable accommodations.
                        </li>
                        <li>
                            We receive our guests at airport and arrange return journey.
                        </li>
                        <li> We arrange activities on request basis.</li>


                    </ul>
                </div>

                <Room />

                <div>
                  <iframe class='w-full rounded-lg' height="500"  src="https://www.youtube.com/embed/Ru_NgFmC8MA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Slider from '@/components/Slider'
    import Room from '@/components/Room'

    export default {
        components: {
            Slider,
            Room
        }
    }
</script>

<style>

</style>
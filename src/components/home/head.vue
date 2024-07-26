<template>
  <div
    id="hdn"
    class="md:mt-[150px] md:container mt-[50px] h-[180px] md:h-full"
  >
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        clickable: true
      }"
      :navigation="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in 5" :key="item">
        <img
          src="https://images.uzum.uz/cqav62cqvss6ad8i8ihg/main_page_banner.jpg"
          alt="AA"
          class="rounded-[20px]"
        />
      </swiper-slide>
    </swiper>

  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'


const modules = [Pagination, Navigation, Autoplay]
</script>

<style scoped>
/* Swiper container style */
.swiper {
  width: 100%;
  height: 100%;
}

/* Swiper slide style */
.swiper-slide {
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Navigation button styles */
::v-deep #hdn .swiper-button-next,
::v-deep #hdn .swiper-button-prev {
  background-color: rgba(0, 0, 0, 0.2) !important;
  border: none !important;
  border-radius: 50% !important;
  width: 50px !important;
  height: 50px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
  transition: background-color 0.3s, box-shadow 0.3s !important;
}

::v-deep #hdn .swiper-button-next::after,
::v-deep #hdn .swiper-button-prev::after {
  font-size: 24px !important;
  color: #333 !important;
}

/* Hover effect for navigation buttons */
::v-deep #hdn .swiper-button-next:hover,
::v-deep #hdn .swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 0.4) !important;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3) !important;
}

/* Positioning buttons */
::v-deep #hdn .swiper-button-next {
  right: 15px !important;
}

::v-deep #hdn .swiper-button-prev {
  left: 15px !important;
}

/* Hide navigation buttons on small screens */
@media (max-width: 640px) {
  ::v-deep #hdn .swiper-button-next,
  ::v-deep #hdn .swiper-button-prev {
    display: none !important;
  }
}
</style>

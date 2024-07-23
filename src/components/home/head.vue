<template>
  <div class="w-full flex justify-center md:px-[2%] px-[16px]">
    <div class="w-full rounded-[50px] bg-[#F2F2F2] mt-[200px] pb-[40px]">
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
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
          <div class="md:grid md:grid-cols-2 gap-[50px] md:gap-[150px] md:container flex flex-col-reverse">
            <div class="font-bold text-[40px] md:text-[54px] md:mt-[65px] mb-[50px] md:mb-[100px] text-start">
              <p class="md:leading-[87.42px]">Скидка 15%</p>
              <p class="md:leading-[87.42px]">на все подвесные</p>
              <p class="md:leading-[87.42px]">светильники</p>
              <p class="md:leading-[87.42px] bg-black text-white px-10 rounded-[100px]">
                до 5 февраля
              </p>
            </div>
            <div>
              <img src="/head-img.png" alt="Image" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const modules = [Pagination, Navigation, Autoplay];
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

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
</style>

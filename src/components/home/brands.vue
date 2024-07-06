<template>
  <div class="container relative mb-[100px]">
    <div class="flex justify-between mb-[50px]">
      <p class="md:text-[40px] text-[20px] font-bold leading-[54.64px]">
        Только проверенные бренды
      </p>
      <div class="md:flex hidden items-center gap-[10px] bottom-0 right-0 z-10">
        <button
          @click="goToPrevSlide"
          class="md:w-[48px] md:h-[25px] h-[20px] w-[34px] flex items-center justify-center rounded-full border hover:border-black"
        >
          <img src="/strelka-l.png" alt="" />
        </button>
        <button
          @click="goToNextSlide"
          class="md:w-[48px] md:h-[25px] h-[20px] w-[34px] flex items-center justify-center rounded-full border hover:border-black"
        >
          <img src="/strelka-r.png" alt="" />
        </button>
      </div>
    </div>

    <div class="swiper-container mb-[30px]">
      <div class="swiper-wrapper">
        <div class="swiper-slide ml-[10px]"><img src="/brand-1.png" alt="ARTE LAMP" /></div>
        <div class="swiper-slide ml-[10px]"><img src="/brand-2.png" alt="DIVINARE" /></div>
        <div class="swiper-slide ml-[10px]"><img src="/brand-3.png" alt="Odeon Light" /></div>
        <div class="swiper-slide ml-[10px]"><img src="/brand-1.png" alt="ARTE LAMP" /></div>
        <div class="swiper-slide ml-[10px]"><img src="/brand-2.png" alt="DIVINARE" /></div>
        <div class="swiper-slide ml-[10px]"><img src="/brand-3.png" alt="Odeon Light" /></div>
        <div class="swiper-slide ml-[10px]"><img src="/brand-1.png" alt="ARTE LAMP" /></div>
        <div class="swiper-slide ml-[10px]"><img src="/brand-2.png" alt="DIVINARE" /></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const swiper = ref(null);

const goToPrevSlide = () => {
  if (swiper.value) swiper.value.slidePrev();
};

const goToNextSlide = () => {
  if (swiper.value) swiper.value.slideNext();
};

onMounted(() => {
  swiper.value = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 4,
    autoplay: {
      delay: 1500, 
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
</script>

<style scoped>
.container {
  padding: 20px;
}

.swiper-container {
  overflow: hidden;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>

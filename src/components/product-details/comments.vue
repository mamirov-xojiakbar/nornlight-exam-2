<template>
  <div class="container mb-[40px]">
    <h2 class="text-2xl font-bold mb-6">Mahsulot sharhlari</h2>
    <swiper
      :slidesPerView="slidesPerView"
      :spaceBetween="spaceBetween"
      :navigation="true"
      :modules="modules"
      :breakpoints="breakpoints"
      :autoplay="{
        delay: 3000,  
      }"
      class=""
    >
      <swiper-slide v-for="(comment, index) in comments" :key="index">
        <div class="p-4 border rounded-lg md:h-[170px] h-[140px]">
          <div class="flex justify-between items-center mb-2">
            <span class="font-semibold md:text-[17px] text-[14px]">{{ comment.username }}</span>
            <div class="text-yellow-500 flex md:text-[12px] text-[10px]">
              <i class="fas fa-star" v-for="star in comment.rating" :key="star"></i>
            </div>
          </div>
          <p class="text-gray-700 md:text-[15px] text-[12px]">{{ comment.text }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const modules = [Pagination, Navigation, Autoplay];

const breakpoints = {
  400: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  600: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  700: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

const comments = ref([
  { username: 'Ali', rating: 5, text: 'Bu mahsulot juda yaxshi! Tavsiya qilaman.' },
  { username: 'Aziza', rating: 4, text: 'Mahsulot umuman yaxshi, lekin yetkazib berish biroz kechikdi.' },
  { username: 'Bekzod', rating: 3, text: "Mahsulot o'rtacha, xizmat yaxshi." },
  { username: 'Dilnoza', rating: 5, text: 'Juda ajoyib mahsulot!' },
  { username: 'Dilnoza', rating: 5, text: 'Juda ajoyib mahsulot!' },
  { username: 'Dilnoza', rating: 5, text: 'Juda ajoyib mahsulot!' },
  { username: 'Feruza', rating: 4, text: 'Mahsulot yaxshi, yana sotib olaman.' },
  { username: 'Feruza', rating: 4, text: 'Mahsulot yaxshi, yana sotib olaman.' },
  { username: 'Feruza', rating: 4, text: 'Mahsulot yaxshi, yana sotib olaman.' }
]);
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>

<template>
  <div>
    <!-- Home page components -->
    <HomeHead />
    <div class="flex justify-between md:mb-[40px] mb-[30px] container mt-[97px]">
      <p class="font-bold text-[40px] leading-[54.64px]">Каталог</p>

      <router-link
        to="/katalog"
        class="md:flex items-center border border-[#454545] py-[14px] px-[48px] rounded-[100px] gap-3 hidden"
      >
        <p class="font-medium text-[16px] leading-[21.86px]">Весь каталог</p>
        <img src="/strelka.png" alt="" />
      </router-link>
    </div>
    <HomeKatalog />
    <router-link
        to="/katalog"
        class="flex items-center justify-center border border-[#454545] py-[14px] px-[48px] rounded-[100px] gap-3 md:hidden"
      >
        <p class="font-medium text-[16px] leading-[21.86px]">Весь каталог</p>
        <img src="/strelka.png" alt="" />
      </router-link>
    <HomeIntro1 />
    <HomeProducts />
    <Brands />
    
    <!-- Blog Section -->
    <div class="flex justify-between mb-[40px] container">
      <p class="font-bold text-[30px] md:text-[40px] leading-[54.64px]">Блог</p>
      <router-link
        to="/blog"
        class="md:flex hidden items-center border border-[#454545] py-[14px] px-[48px] rounded-[100px] gap-3"
      >
        <p class="font-medium text-[16px] leading-[21.86px]">Перейти в блог</p>
        <img src="/strelka.png" alt="Arrow" />
      </router-link>
    </div>

    <Blog />

    <router-link
      to="/blog"
      class="container mb-[30px] flex md:hidden items-center border border-[#454545] py-[14px] px-[48px] rounded-[100px] gap-3 justify-center"
    >
      <p class="font-medium text-[16px] leading-[21.86px]">Перейти в блог</p>
      <img src="/strelka.png" alt="Arrow" />
    </router-link>
    
    <!-- Text Section -->
    <Text />
  </div>
</template>

<script setup>
import Blog from "../components/home/blog.vue";
import Brands from "../components/home/brands.vue";
import HomeHead from "../components/home/head.vue";
import HomeIntro1 from "../components/home/intro1.vue";
import HomeKatalog from "../components/home/katalog.vue";
import HomeProducts from "../components/home/products.vue";
import Text from "../components/home/text.vue";
</script>

<style lang="scss" scoped>
</style>

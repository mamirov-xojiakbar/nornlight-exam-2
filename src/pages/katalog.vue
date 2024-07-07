<template>
  <div class="md:mt-[200px] mt-[140px]">
    <p class="font-bold text-[30px] md:text-[40px] leading-[54.64px] container mb-[50px]">Каталог</p>
    <Katalog />
    <Brands />
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
import Katalog from "../components/home/katalog.vue";
import Text from "../components/home/text.vue";
</script>

<style lang="scss" scoped></style>

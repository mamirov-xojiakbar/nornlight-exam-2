<template>
  <div class="px-[10px] md:px-0">
    <!-- Home page components -->
    <HomeHead />
    <HomeProducts />
    <img src="https://images.uzum.uz/cqav62cqvss6ad8i8ihg/main_page_banner.jpg" alt="AA" class="md:container mb-[70px] ">
    <Katalog_1 />
    <img src="https://images.uzum.uz/cqav62cqvss6ad8i8ihg/main_page_banner.jpg" alt="AA" class="md:container mb-[70px]">
    <Katalog_1 />
  </div>
</template>

<script setup>
import Blog from "../components/home/blog.vue";
import Katalog_1 from "../components/home/katalog-1.vue";
import Brands from "../components/home/brands.vue";
import HomeHead from "../components/home/head.vue";
import HomeIntro1 from "../components/home/intro1.vue";
import HomeKatalog from "../components/home/katalog.vue";
import HomeProducts from "../components/home/products.vue";
import Text from "../components/home/text.vue";
</script>

<style lang="scss" scoped>
</style>

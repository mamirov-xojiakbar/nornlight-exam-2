<template>
  <div class="px-[10px] md:px-0">
    <!-- Home page components -->
    <HomeHead />
    <HomeProducts />
    <img src="https://images.uzum.uz/cqav62cqvss6ad8i8ihg/main_page_banner.jpg" alt="AA" class="md:container mb-[70px] h-full w-full">
    <Katalog_1 />
    <img src="https://images.uzum.uz/cqav62cqvss6ad8i8ihg/main_page_banner.jpg" alt="AA" class="md:container mb-[70px] h-full w-full">
    <Katalog_1 />
  </div>
</template>

<script setup>
import Katalog_1 from "../components/home/katalog-1.vue";
import HomeHead from "../components/home/head.vue";
import HomeProducts from "../components/home/products.vue";
</script>

<style scoped>

</style>

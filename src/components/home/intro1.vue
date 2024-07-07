<template>
  <div class="container mt-[97px] mb-[71px]">
    <div class="flex justify-between mb-[40px]">
      <p class="font-bold text-[40px] leading-[54.64px]">Почему NORNLIGHT?</p>
      <router-link
        to="/about-us"
        class="md:flex items-center border border-[#454545] py-[14px] px-[48px] rounded-[100px] gap-3 hidden"
      >
        <p class="font-medium text-[16px] leading-[21.86px]">О компании</p>
        <img src="/strelka.png" alt="" />
      </router-link>
    </div>

    <div class="grid md:grid-cols-4 grid-cols-2 gap-[20px]">
      <div
        v-for="(item, i) in intro1"
        :key="i"
        class="border p-[40px] pr-[50px]"
      >
        <div
          class="bg-[#454545] p-[10px] w-[80px] h-[80px] items-center justify-center flex rounded-[10px] mb-[90px]"
        >
          <img :src="item.img" alt="" />
        </div>
        <p class="font-bold text-[20px] leading-[26px] mb-[20px]">
          {{ item.title }}
        </p>
        <p class="font-normal text-[16px] leading-[20.8px] opacity-[70%]">
          {{ item.text }}
        </p>
      </div>

      
    </div>
    <router-link
        to="#"
        class="mt-10 flex items-center justify-center border border-[#454545] py-[14px] px-[48px] rounded-[100px] gap-3 md:hidden"
      >
        <p class="font-medium text-[16px] leading-[21.86px]">О компании</p>
        <img src="/strelka.png" alt="" />
      </router-link>
  </div>
</template>

<script setup>
import { useKatalog } from "../../composable/useKatalog";

const { intro1 } = useKatalog();
</script>

<style lang="scss" scoped></style>

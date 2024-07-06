<template>
  <div class="container">
    <div class="flex justify-between mb-[40px]">
      <p class="font-bold text-[30px] md:text-[40px] leading-[54.64px]">Блог</p>
      <router-link
        to="#"
        class="md:flex hidden items-center border border-[#454545] py-[14px] px-[48px] rounded-[100px] gap-3"
      >
        <p class="font-medium text-[16px] leading-[21.86px]">Перейти в блог</p>
        <img src="/strelka.png" alt="" />
      </router-link>
    </div>

    <div class="grid md:grid-cols-3 gap-[20px] mb-[30px] md:mb-[100px]">
      <router-link
        to="#"
        v-for="(item, i) in blog"
        :key="i"
        class="border hover:border-none hover:shadow-xl p-3"
      >
        <img :src="item.img" alt="Blog img" class="w-full" />
        <div
          class="mt-[30px] flex items-center font-bold text-[20px] leading-[26px] gap-[60px] pr-5 mb-[20px]"
        >
          <p>{{ item.text }}</p>
          <img src="/blog-icon.png" alt="" />
        </div>
        <p class="font-medium text-[14px] leading-[15.4px] mb-[30px]">
          {{ item.date }}
        </p>
      </router-link>
    </div>

    <router-link
        to="#"
        class="mb-[30px] flex md:hidden items-center border border-[#454545] py-[14px] px-[48px] rounded-[100px] gap-3 justify-center"
      >
        <p class="font-medium text-[16px] leading-[21.86px]">Перейти в блог</p>
        <img src="/strelka.png" alt="" />
      </router-link>
  </div>
</template>

<script setup>
import { useKatalog } from "../../composable/useKatalog";

const { blog } = useKatalog();
</script>

<style scoped></style>

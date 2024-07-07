<template>
  <div class="container">
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
  </div>
</template>

<script setup>
import { useKatalog } from "../../composable/useKatalog";

const { blog } = useKatalog();
</script>

<style scoped></style>

<template>
  <div class="container ">
    <div class="grid md:grid-cols-3 gap-[30px]">
      <div
        v-for="(item, i) in katalog"
        :key="i"
        class="h-[250px] relative flex bg-[#F2F2F2] rounded-[20px] justify-between p-[32px] pt-[40px] pb-0 pr-[30px]"
      >
        <div class="flex flex-col justify-between">
          <p>{{ item.name }}</p>
          <button class="flex items-center mb-[32px] gap-[2px]">
            <p>От 540₽</p>
            <img src="/strelka.png" alt="" class="" />
          </button>
        </div>
        <img
          :src="item.img"
          alt=""
          class="md:w-[180px] md:h-[170px]"
          :class="{
            'md:absolute md:bottom-0 md:right-5 ': item.id === 5 || item.id === 3,
          }"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import { useKatalog } from "../../composable/useKatalog";

const { katalog } = useKatalog();
</script>

<style lang="scss" scoped></style>

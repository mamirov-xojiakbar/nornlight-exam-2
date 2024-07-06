<template>
  <div class="container mb-[85px]">
    <p class="font-medium text-[40px] leading-[44px] mb-[23px]">
      Характеристика
    </p>
    <div v-for="(entry, i) in processedXarakteristika" :key="i" class="grid md:grid-cols-2 px-[24px] py-[29px] items-center" :class="{ 'bg-[#F8F8F8]': i % 2 !== 0 }">
      <p class="font-medium text-[16px] leading-[19.68px] mb-2 md:mb-0">{{ entry.key }}</p>
      <p class="flex md:justify-end md:text-end font-light text-[18px] leading-[28.8px] opacity-[70%]">{{ entry.value }}</p>
    </div>
  </div>
</template>

<script setup>
import { useKatalog } from "../../composable/useKatalog";
import { computed } from "vue";

const { xarakteristika } = useKatalog();

const processedXarakteristika = computed(() => {
  return xarakteristika.flatMap(item => 
    Object.entries(item).map(([key, value]) => ({ key, value }))
  );
});
</script>

<style lang="scss" scoped></style>

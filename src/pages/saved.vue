<template>
  <div class="container mt-[140px]">
    <div class="flex">
      <p class="font-bold text-[30px] md:text-[64px] md:leading-[70.4px] md:mb-[34px]">Избранные товары</p>
      <p class="bg-red-500 w-[20px] h-[20px] flex items-center justify-center text-white rounded-[50%] ml-4">{{ likedProductCount }}</p>
    </div>

    <div>
      <div v-if="getLikedProducts.length === 0" class="text-center text-gray-600 mt-4 mb-[40px]">
        No liked products yet.
      </div>

      <div v-else class="grid md:grid-cols-4 grid-cols-2 gap-5 mt-[36px] mb-[93px]">
        <div v-for="product in getLikedProducts" :key="product.id" class="hover:shadow-xl border hover:border-none p-5 relative">
          <button @click="toggleLike(product.id)" class="absolute right-7 top-7 bg-white px-[10px] py-[9px] rounded-[50%]">
            <img :src="isLiked(product.id) ? '/red-like2.jpg' : '/like.png'" alt="Like">
          </button>
          <router-link :to="{ name: 'product-detail', params: { id: product.id } }">
            <img :src="product.img" alt="Product Image" class="">
            <p class="font-medium text-[20px] leading-[22px] mt-[32px]">{{ product.title }}</p>
            <p class="line-through mt-[24px] opacity-[70%] font-medium text-[12px] leading-[13.2px]">${{ product.sale }}</p>
          </router-link>

          <div class="flex justify-between items-center">
            <p class="font-bold text-[20px] leading-[22px]">${{ product.price }}</p>
            <button class="bg-[#454545] px-[20px] py-[9px] rounded-[100px]">
              <img src="/karzina-2.png" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { usePiniaStore } from '../store/pinia';
import { computed } from 'vue';

const store = usePiniaStore();

const likedProductCount = computed(() => {
  return store.likedProducts.length;
});

const getLikedProducts = computed(() => {
  return store.likedProducts.map(productId => {
    const product = store.items.find(item => item.id === productId);
    return product;
  }).filter(product => product !== undefined);
});

const isLiked = (productId) => {
  return store.likedProducts.includes(productId);
};

const toggleLike = (productId) => {
  if (isLiked(productId)) {
    store.removeFromLikedProducts(productId);
  } else {
    store.addToLikedProducts(productId);
  }
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div id="mt" class="px-[10px] mb-[50px] mt-[20px] container">
    <div class="flex">
      <p id="text" class="font-bold text-[20px] md:text-[30px] md:leading-[70.4px] md:mb-[34px] mb-[20px]">Избранные товары</p>
      <p class="bg-red-500 w-[20px] h-[20px] flex items-center justify-center text-white rounded-[50%] ml-4">{{ likedProductCount }}</p>
    </div>

    <div>
      <div v-if="getLikedProducts.length === 0" class="text-center text-gray-600 mt-4 mb-[40px]">
        No liked products yet.
      </div>

      <div v-else id="grid_p" class="grid md:grid-cols-5 grid-cols-2 gap-5">
        <div v-for="product in getLikedProducts" :key="product.id" class="hover:shadow-xl relative grid grid-rows-1 h-[400px] md:h-[500px] hover:rounded-[10px]">
          <button @click="toggleLike(product.id)" class="absolute right-3 top-3 border px-[10px] py-[9px] rounded-[50%]">
            <svg v-if="isLiked(product.id)" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 48 48" class="animate-svg">
              <path fill="#ff0000" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 48 48" >
              <path fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/>
            </svg>
          </button>
          
          <router-link :to="{ name: 'product-detail', params: { id: product.id } }">
            <div class="md:h-[300px] h-[230px] rounded-[10px] flex ">
              <img :src="product.img" alt="Img" class="rounded-[20px] object-cover">
            </div>
            <p class="font-medium text-[13px] leading-[20px] mt-[12px] mx-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p class="line-through mt-[24px] opacity-[70%] font-medium text-[12px] leading-[13.2px] absolute bottom-[50px] left-[10px]">${{ product.sale }}</p>
          </router-link>

          <div class="flex justify-between items-center mx-[10px] mb-[15px]">
            <p class="font-bold text-[16px] leading-[20px]">${{ product.price }}</p>
            <button @click="clickKarzina(product.id)" class="border border-black/50 px-[20px] py-[9px] rounded-[100px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.052 11.5l.279-1.66c.182-1.086.273-1.628-.019-1.984c-.291-.356-.827-.356-1.898-.356H4.586c-1.071 0-1.607 0-1.898.356c-.292.356-.2.898-.019 1.984l1.204 7.18c.399 2.38.598 3.569 1.413 4.275C6.1 22 7.274 22 9.622 22H12m2-4h8m-4 4v-8m-.5-6.5a5.5 5.5 0 1 0-11 0" color="black"/></svg>
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

<style scoped>
@keyframes heart-beat {
  0%, 100% {
    transform: scale(1);
  }
  25%, 75% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.2);
  }
}

.animate-svg {
  animation: heart-beat 0.6s ease-in-out;
}

@media (max-width: 840px ) {
  #grid_p {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  #mt {
    margin-top: 20px;
  }
}

@media (max-width: 600px) {
  #grid_p {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  #mt {
    margin-top: 20px;
  }
}

@media (min-width: 840px) {
  #grid_p {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1015px) {
  #mt {
    margin-top: 120px;
    padding-left: 90px;
    padding-right: 90px;
  }
}
</style>

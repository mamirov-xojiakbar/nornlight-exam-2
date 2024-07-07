<template>
    <div class="container mt-[160px] mb-[100px]">
        <p class="font-bold text-[30px] md:text-[40px] leading-[54.64px] mb-[40px]">Популярные товары</p>

        <div v-if="loading" class="flex justify-center items-center h-64">
            <p>Loading...</p>
        </div>

        <div v-else class="grid md:grid-cols-4 grid-cols-2 gap-5">
            <div v-for="item in items" :key="item.id" class="hover:shadow-xl border hover:border-none p-5 relative">
              <button @click="toggleLike(item.id)" class="absolute right-7 top-7 bg-white px-[10px] py-[9px] rounded-[50%]">
                  <img :src="isLiked(item.id) ? '/red-like2.jpg' : '/like.png'" alt="Like">
              </button>
              <router-link :to="{ name: 'product-detail', params: { id: item.id } }">
                <img :src="item.img" alt="Img">
                <p class="font-medium text-[20px] leading-[22px] mt-[32px]">{{ item.title }}</p>
                <p class="line-through mt-[24px] opacity-[70%] font-medium text-[12px] leading-[13.2px]">${{ item.sale }}</p>
              </router-link>

                <div class="flex justify-between items-center">
                    <p class="font-bold text-[20px] leading-[22px]">${{ item.price }}</p>
                    <button  @click="clickKarzina(item.id)" class="bg-[#454545] px-[20px] py-[9px] rounded-[100px]">
                        <img src="/karzina-2.png" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { usePiniaStore } from '../store/pinia'; 

const store = usePiniaStore();
const items = ref([]);
const loading = ref(true);

const fetchItems = async () => {
  try {
    const response = await axios.get('https://66863e0e83c983911b014b85.mockapi.io/nornlight/products');
    items.value = response.data
    store.setItems(items.value); 
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};

const clickKarzina = (productId) => {
  if (!isInKarzina(productId)) {
    store.addToKarzina(productId);
  } else {
    alert('This product is already in the cart.');
  }
};

const toggleLike = (productId) => {
  if (isLiked(productId)) {
    store.removeFromLikedProducts(productId);
  } else {
    store.addToLikedProducts(productId);
  }
};

const isLiked = (productId) => {
  return store.likedProducts.includes(productId);
}; 

const isInKarzina = (productId) => {
  return store.karzina.includes(productId);
};

onMounted(fetchItems);
</script>

<style lang="scss" scoped>

</style>
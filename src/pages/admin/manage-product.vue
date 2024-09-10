<template>
  <div class="mb-[100px]">
    <div class="flex items-center sticky top-0 backdrop-blur-sm bg-opacity-60 bg-white z-20 w-full py-4 px-2">
      <svg class="absolute left-6" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><g fill="none" stroke="gray" stroke-linejoin="round" stroke-width="4"><path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"/></g></svg>
      <input type="text" placeholder="Seacrh product" class="w-full px-5 gap-5 py-3  rounded-[50px] border pl-[50px]">
    </div>
    <p class="font-medium text-[28px] leading-[30.8px] mb-[33px] mt-[10px]">Manage product</p>
    <div v-if="loading" class="flex justify-center items-center h-64">
      <p>Loading...</p>
    </div>

    <div v-else id="grid_p" class="grid grid-cols-3 gap-5">
      <div v-for="item in items" :key="item.id" class="relative hover:shadow-xl grid grid-rows-1 h-96 md:h-[500px] hover:rounded-lg">
        <router-link :to="{ name: 'product-detail', params: { id: item.id } }">
          <div class="md:h-72 h-56 rounded-lg overflow-hidden">
            <img :src="item.img" alt="Img" class="w-full h-full object-cover">
          </div>
          <p class="font-medium text-sm leading-5 mt-3 mx-2">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p class="line-through mt-6 opacity-70 font-medium text-xs leading-4 absolute bottom-14 left-2">${{ item.sale }}</p>
        </router-link>

        <div class="flex justify-between items-center mx-2 mb-3">
          <p class="font-bold text-lg leading-5 mr-[10px]">${{ item.price }}</p>
          <div class="flex gap-[5px]">
            <router-link :to="{ name: 'update-product', params: { id: item.id } }" class="bg-gray-500 hover:bg-gray-700 px-[16px] py-[6px] rounded-[100px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21h18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="48" stroke-dashoffset="48" d="M7 17v-4l10 -10l4 4l-10 10h-4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"/></path></g></svg>
            </router-link>
            <button @click="deleteProduct(item.id)" class="bg-gray-500 hover:bg-red-500 px-[16px] py-[6px] rounded-[100px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { usePiniaStore } from '../../store/pinia'; 

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const store = usePiniaStore();
const items = ref([]);
const loading = ref(true);

const fetchItems = async () => {
  try {
    const response = await axios.get('https://66863e0e83c983911b014b85.mockapi.io/nornlight/products');
    items.value = response.data;
    store.setItems(items.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`https://66863e0e83c983911b014b85.mockapi.io/nornlight/products/${id}`);
    items.value = items.value.filter(item => item.id !== id);
    store.setItems(items.value);
    toast.success('Product deleted successfully!');
  } catch (error) {
    console.error('Error deleting product:', error);
    toast.error('Failed to delete product!');
  }
};

onMounted(fetchItems);
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(5px);
}

@media (max-width: 1024px) {
  #grid_p {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  #grid_p {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

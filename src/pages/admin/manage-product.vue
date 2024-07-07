<template>
  <div>
    <p class="font-medium text-[28px] leading-[30.8px] mb-[33px]">Manage product</p>
    <div v-if="loading" class="flex justify-center items-center h-64">
      <p>Loading...</p>
    </div>

    <div v-else class="grid md:grid-cols-3 grid-cols-2 gap-5">
      <div v-for="item in items" :key="item.id" class="hover:shadow-xl border hover:border-none p-5 relative">
        <router-link :to="{ name: 'product-detail', params: { id: item.id } }">
          <img :src="item.img" alt="Img">
          <p class="font-medium text-[20px] leading-[22px] mt-[32px]">{{ item.title }}</p>
          <p class="line-through mt-[24px] opacity-[70%] font-medium text-[12px] leading-[13.2px]">${{ item.sale }}</p>
        </router-link>

        <div class="flex justify-between items-center">
          <p class="font-bold text-[20px] leading-[22px]">${{ item.price }}</p>
          <div class="flex gap-[10px]">
            <router-link :to="{ name: 'update-product', params: { id: item.id } }" class="border border-black px-[16px] py-[6px] rounded-[100px]">
              <img src="/update.png" alt="">
            </router-link>
            <button @click="deleteProduct(item.id)" class="bg-[#454545] px-[20px] py-[9px] rounded-[100px]">
              <img src="/admin-delete.png" alt="">
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

<style lang="scss" scoped>
</style>

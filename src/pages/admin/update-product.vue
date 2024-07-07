<template>
  <div>
    <p class="font-medium text-[28px] leading-[30.8px] mb-[33px]">Update Product</p>
    <form @submit.prevent="updateProduct" class="w-[60%]">
      <div class="flex flex-col gap-[8px] mb-[16px]">
        <label for="name">Title</label>
        <input type="text" v-model="product.title" id="name" name="name" required class="bg-[#F8F8F8] p-5 rounded-[10px]"/>
      </div>
      <div class="flex flex-col gap-[8px] mb-[16px]">
        <label for="price">Price</label>
        <input type="number" v-model="product.price" id="price" name="price" required class="bg-[#F8F8F8] p-5 rounded-[10px]"/>
      </div>
      <div class="flex flex-col gap-[8px] mb-[16px]">
        <label for="sale">Sale</label>
        <input type="number" v-model="product.sale" id="sale" name="sale" required class="bg-[#F8F8F8] p-5 rounded-[10px]"/>
      </div>
      <div class="flex flex-col gap-[8px] mb-[25px]">
        <label for="img">Image-url</label>
        <input type="text" v-model="product.img" id="img" name="img" required class="bg-[#F8F8F8] p-5 rounded-[10px]"/>
      </div>
      <button type="submit" class="font-medium text-[16px] leading-[19.68px] bg-[#454545] px-[64px] py-[13px] text-white rounded-[5px]">Update</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const route = useRoute();
const router = useRouter();
const product = ref({
  title: '',
  price: '',
  sale: '',
  img: ''
});

const fetchProduct = async () => {
  try {
    const response = await axios.get(`https://66863e0e83c983911b014b85.mockapi.io/nornlight/products/${route.params.id}`);
    product.value = response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};

const updateProduct = async () => {
  try {
    await axios.put(`https://66863e0e83c983911b014b85.mockapi.io/nornlight/products/${route.params.id}`, product.value);
    toast.success('Product updated successfully!');
    router.push({ name: 'manage-product' });
  } catch (error) {
    console.error('Error updating product:', error);
    toast.error('Failed to update product!');
  }
};

onMounted(fetchProduct);
</script>

<style scoped>
/* Your styles here */
</style>

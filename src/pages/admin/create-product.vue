<template>
    <div>
        <p class="font-medium text-[28px] leading-[30.8px] mb-[33px]">Create product</p>
        <form @submit.prevent="submitForm" class="w-[60%]">
            <div class="flex flex-col gap-[8px] mb-[16px]">
                <label for="name">Title</label>
                <input type="text" id="name" v-model="product.name" name="name" required class="bg-[#F8F8F8] p-5 rounded-[10px]"/>
            </div>
            <div class="flex flex-col gap-[8px] mb-[16px]">
                <label for="price">Price</label>
                <input type="number" id="price" v-model="product.price" name="price" required class="bg-[#F8F8F8] p-5 rounded-[10px]"/>
            </div>
            <div class="flex flex-col gap-[8px] mb-[16px]">
                <label for="sale">Sale</label>
                <input type="number" id="sale" v-model="product.sale" name="sale" required class="bg-[#F8F8F8] p-5 rounded-[10px]"/>
            </div>
            <div class="flex flex-col gap-[8px] mb-[25px]">
                <label for="img">Image-url</label>
                <input type="text" id="img" v-model="product.img" name="img" required class="bg-[#F8F8F8] p-5 rounded-[10px]"/>
            </div>
            <button type="submit" class="font-medium text-[16px] leading-[19.68px] bg-[#454545] px-[64px] py-[13px] text-white rounded-[5px]">Create</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const product = ref({
    name: '',
    price: '',
    sale: '',
    img: ''
});

const submitForm = async () => {
    try {
        const response = await axios.post('https://66863e0e83c983911b014b85.mockapi.io/nornlight/products', product.value);
        console.log('Product created:', response.data);
        // Optionally, reset the form
        product.value = {
            name: '',
            price: '',
            sale: '',
            img: ''
        };
        toast.success('Product created successfully!');
    } catch (error) {
        console.error('Error creating product:', error);
        toast.error('Error creating product!');
    }
};
</script>

<style lang="scss" scoped>
</style>

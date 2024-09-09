<template>
    <div class="create-product-container max-w-[800px] md:mx-auto py-10">
      <p class="form-title font-semibold text-[32px] leading-[36px] mb-[40px] text-center">
        Create Product
      </p>
      <form @submit.prevent="submitForm" class="bg-white shadow-lg rounded-lg p-8">
        <div class="form-group mb-6">
          <label for="name" class="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            id="name"
            v-model="product.name"
            name="name"
            required
            placeholder="Enter product title"
            class="input-field"
          />
        </div>
        <div class="form-group mb-6">
          <label for="price" class="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="number"
            id="price"
            v-model="product.price"
            name="price"
            required
            placeholder="Enter product price"
            class="input-field"
          />
        </div>
        <div class="form-group mb-6">
          <label for="sale" class="block text-gray-700 font-medium mb-2">Sale</label>
          <input
            type="number"
            id="sale"
            v-model="product.sale"
            name="sale"
            required
            placeholder="Enter sale percentage"
            class="input-field"
          />
        </div>
        <div class="form-group mb-6">
          <label for="img" class="block text-gray-700 font-medium mb-2">Image Upload</label>
          <input
            type="file"
            id="img"
            @change="handleImageUpload"
            accept="image/*"
            required
            class="file-input-field"
          />
        </div>
        <button
          type="submit"
          class="submit-btn bg-gradient-to-r from-[#6A5AE0] to-[#9356E3] hover:from-[#5145c6] hover:to-[#7744c1] text-white font-semibold py-3 px-6 rounded-lg w-full transition-all duration-300 ease-in-out"
        >
          Create Product
        </button>
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
    img: '' // Image file will be stored here as base64
});

const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            product.value.img = reader.result; // Store image as base64 string
        };
        reader.readAsDataURL(file);
    }
};

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
  
<style scoped>
.create-product-container {
  background-color: #f9f9f9;
}

.form-title {
  color: #333;
}

.input-field,
.file-input-field {
  width: 100%;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #F8F8F8;
  transition: border-color 0.2s;
}

.input-field:focus,
.file-input-field:focus {
  outline: none;
  border-color: #6A5AE0;
}

.submit-btn {
  background: gray;
  font-size: 18px;
  padding: 12px;
  cursor: pointer;
}

.submit-btn:hover {
  background: rgb(94, 94, 94);
}
</style>
  
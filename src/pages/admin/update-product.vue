<template>
  <div class="update-product-container max-w-[800px] md:mx-auto py-10">
    <p class="form-title font-semibold text-[32px] leading-[36px] mb-[40px] text-center">
      Update Product
    </p>
    <form @submit.prevent="updateProduct" class="bg-white shadow-lg rounded-lg p-8">
      <div class="form-group mb-6">
        <label for="name" class="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          v-model="product.title"
          id="name"
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
          v-model="product.price"
          id="price"
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
          v-model="product.sale"
          id="sale"
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
          class="file-input-field"
        />
      </div>
      <button
        type="submit"
        class="submit-btn bg-gradient-to-r from-[#6A5AE0] to-[#9356E3] hover:from-[#5145c6] hover:to-[#7744c1] text-white font-semibold py-3 px-6 rounded-lg w-full transition-all duration-300 ease-in-out"
      >
        Update Product
      </button>
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
  img: '' // Image file will be stored here as base64
});

const fetchProduct = async () => {
  try {
    const response = await axios.get(`https://66863e0e83c983911b014b85.mockapi.io/nornlight/products/${route.params.id}`);
    product.value = response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};

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
.update-product-container {
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

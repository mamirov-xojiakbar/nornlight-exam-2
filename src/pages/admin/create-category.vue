<template>
    <div class="container mx-auto grid grid-cols-12 gap-5">
      
  
      <!-- Create Category Form -->
      <div class="col-span-9 bg-white shadow-lg rounded-lg p-8 mt-5">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Create New Category</h2>
        <form @submit.prevent="submitCategory">
          <!-- Option to choose between new type or existing -->
          <div class="mb-5">
            <label class="block text-gray-700 text-sm font-bold mb-2">Select Type</label>
            <select
              v-model="isNewType"
              class="shadow-sm border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-all duration-300"
            >
              <option value="new">Create new type</option>
              <option value="existing">Add to existing type</option>
            </select>
          </div>
  
          <!-- If new type selected, show input for type name -->
          <div v-if="isNewType === 'new'" class="mb-5">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="typeName">New Type Name</label>
            <input
              type="text"
              v-model="newTypeName"
              id="typeName"
              placeholder="Enter new type name"
              class="shadow-sm border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-all duration-300"
              required
            />
          </div>
  
          <!-- If existing type selected, show dropdown for selecting type -->
          <div v-if="isNewType === 'existing'" class="mb-5">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="existingType">Select Existing Type</label>
            <select
              v-model="selectedExistingType"
              id="existingType"
              class="shadow-sm border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-all duration-300"
            >
              <option value="" disabled selected>Select a type</option>
              <option v-for="type in types" :key="type.id" :value="type.id">
                {{ type.name }}
              </option>
            </select>
          </div>
  
          <!-- Category Name -->
          <div class="mb-5">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="categoryName">Category Name</label>
            <input
              type="text"
              v-model="categoryName"
              id="categoryName"
              placeholder="Enter category name"
              class="shadow-sm border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-all duration-300"
              required
            />
          </div>
  
          <!-- Category Description -->
          <div class="mb-5">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="categoryDescription">Category Description</label>
            <textarea
              v-model="categoryDescription"
              id="categoryDescription"
              rows="4"
              placeholder="Enter category description"
              class="shadow-sm border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-all duration-300"
            ></textarea>
          </div>
  
          <!-- Action Buttons -->
          <div class="flex justify-between items-center">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
            >
              Create Category
            </button>
            <button
              type="button"
              @click="resetForm"
              class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
</template>
  
  
  
<script setup>
import { ref } from 'vue';

// Sidebar mock data
const sidebarItems = ref([
  { name: 'Arzon narxlar', icon: '/path-to-icon1.svg' },
  { name: 'Nasiya', icon: '/path-to-icon2.svg' },
  { name: 'Kuzgi kolleksiya', icon: '/path-to-icon3.svg' },
  { name: 'Elektronika', icon: '/path-to-icon4.svg' },
  { name: 'Kiyim', icon: '/path-to-icon5.svg' },
]);

const selectedItem = ref(0);

// Form fields
const categoryName = ref('');
const categoryDescription = ref('');
const newTypeName = ref('');
const selectedExistingType = ref(null);

// Mock data for existing types
const types = ref([
  { id: 1, name: 'Elektronika' },
  { id: 2, name: 'Kiyim' },
  { id: 3, name: 'Poyabzallar' },
]);

// Option to select between new type or existing type
const isNewType = ref('new'); // 'new' or 'existing'

// Form submission logic
const submitCategory = () => {
  const newCategory = {
    name: categoryName.value,
    description: categoryDescription.value,
    type: isNewType.value === 'new' ? newTypeName.value : selectedExistingType.value,
  };
  // Handle the submission logic
  console.log('New category submitted:', newCategory);
  resetForm(); // Reset form after submission
};

// Reset form function
const resetForm = () => {
  categoryName.value = '';
  categoryDescription.value = '';
  newTypeName.value = '';
  selectedExistingType.value = null;
  isNewType.value = 'new';
};
</script>





<style scoped>
/* Sidebar list item hover and active state */
ul li:hover {
  background-color: #f0f4ff;
}

.bg-blue-100 {
  background-color: #ebf5ff;
}

.bg-blue-500 {
  background-color: #1d4ed8;
}

.bg-blue-600:hover {
  background-color: #1e40af;
}

.hover\:border-blue-500:hover {
  border-color: #1d4ed8;
}

/* Rounded icons */
img {
  border-radius: 50%;
}

/* Custom shadow */
.shadow-lg {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>



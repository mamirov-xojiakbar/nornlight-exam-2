<template>
  <div id="mt" class="mb-[100px] container mx-auto px-4 mt-[130px]">

    <div id="filterButton" @click="toggleFilter" class="fixed top-[63px] left-[-10px] bg-white pl-6 px-4 py-[14px] z-20 md:hidden w-[130px] flex justify-between items-center border-b border-r rounded-[5px]">
      <p class="text-black font-medium text-[17px]">Filters</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="black" d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4"/></svg>
    </div>

    
    <div 
      v-if="isFilterOpen" 
      @click="closeFilter"
      class="fixed inset-0 bg-black opacity-50 z-10"></div>


    <!-- Filter Sidebar Mobile -->
    <div v-if="isFilterOpen" id="fm" class="w-[60%] fixed bg-white z-20 rounded-[10px] left-[-10px] top-[60px]">
        <div class="p-4 border rounded-lg pl-6">
          <!-- Price Range Filter -->
          <div class="flex justify-between">
            <p class="font-bold mb-2">Filter by Price</p>
            <svg @click="closeFilter" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
          </div>

          <div>
            <label for="minPrice">Min Price:</label>
            <input type="number" v-model.number="priceRange.min" id="minPrice" class="border p-2 rounded mb-2 w-full">
            <label for="maxPrice">Max Price:</label>
            <input type="number" v-model.number="priceRange.max" id="maxPrice" class="border p-2 rounded mb-4 w-full">
          </div>

          <!-- Category Filter -->
          <p class="font-bold mt-4 mb-2">Filter by Category</p>
          <select v-model="selectedCategory" class="border p-2 rounded mb-4 w-full">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>

          <!-- Rating Filter -->
          <p class="font-bold mt-4 mb-2">Filter by Rating</p>
          <select v-model="selectedRating" class="border p-2 rounded mb-4 w-full">
            <option value="0">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars & above</option>
            <option value="3">3 Stars & above</option>
            <option value="2">2 Stars & above</option>
            <option value="1">1 Star & above</option>
          </select>
          <div class="w-full flex justify-center">
            <button @click="closeFilter" class="bg-gray-300 px-4 py-2 rounded-[5px]">Apply</button>
          </div>
        </div>

    </div>

    <p id="text" class="font-bold text-2xl md:text-4xl leading-tight mb-10">Популярные товары</p>

    <div class="flex">
      <!-- Filter Sidebar Desktop -->
      <div id="fd" class="w-[350px] pr-4">
        <div class="p-4 border rounded-lg sticky top-[120px]">
          <!-- Price Range Filter -->
          <p class="font-bold mb-2">Filter by Price</p>
          <div>
            <label for="minPrice">Min Price:</label>
            <input type="number" v-model.number="priceRange.min" id="minPrice" class="border p-2 rounded mb-2 w-full">
            <label for="maxPrice">Max Price:</label>
            <input type="number" v-model.number="priceRange.max" id="maxPrice" class="border p-2 rounded mb-4 w-full">
          </div>

          <!-- Category Filter -->
          <p class="font-bold mt-4 mb-2">Filter by Category</p>
          <select v-model="selectedCategory" class="border p-2 rounded mb-4 w-full">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>

          <!-- Rating Filter -->
          <p class="font-bold mt-4 mb-2">Filter by Rating</p>
          <select v-model="selectedRating" class="border p-2 rounded mb-4 w-full">
            <option value="0">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars & above</option>
            <option value="3">3 Stars & above</option>
            <option value="2">2 Stars & above</option>
            <option value="1">1 Star & above</option>
          </select>
        </div>
      </div>

      <!-- Product Grid -->
      <div class="w-full">
        <div v-if="loading" class="flex justify-center items-center h-64">
          <p class="text-lg">Loading...</p>
        </div>

        <div v-else id="grid_p" class="grid grid-cols-4 gap-5">
          <div v-for="item in filteredItems" :key="item.id" class="relative hover:shadow-xl grid grid-rows-1 h-96 md:h-[500px] hover:rounded-lg">
            <button @click="toggleLike(item.id)" class="absolute right-3 top-3 border px-2.5 py-2.5 rounded-full">
              <svg v-if="isLiked(item.id)" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 48 48" class="animate-svg">
                <path fill="#ff0000" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 48 48">
                <path fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/>
              </svg>
            </button>

            <router-link :to="{ name: 'product-detail', params: { id: item.id } }">
              <div class="md:h-72 h-56 rounded-lg overflow-hidden">
                <img :src="item.img" alt="Img" class="w-full h-full object-cover">
              </div>
              <p class="font-medium text-sm leading-5 mt-3 mx-2">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p class="font-medium text-sm mx-2">{{ item.rating }} Stars</p>
              <p class="line-through mt-6 opacity-70 font-medium text-xs leading-4 absolute bottom-14 left-2">${{ item.sale }}</p>
            </router-link>

            <div class="flex justify-between items-center mx-2 mb-3">
              <p class="font-bold text-lg leading-5">${{ item.price }}</p>
              <button @click="clickKarzina(item.id)" class="border border-black/50 px-5 py-2.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.052 11.5l.279-1.66c.182-1.086.273-1.628-.019-1.984c-.291-.356-.827-.356-1.898-.356H4.586c-1.071 0-1.607 0-1.898.356c-.292.356-.2.898-.019 1.984l1.204 7.18c.399 2.38.598 3.569 1.413 4.275C6.1 22 7.274 22 9.622 22H12m2-4h8m-4 4v-8m-.5-6.5a5.5 5.5 0 1 0-11 0" color="black"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { usePiniaStore } from '../store/pinia';

const store = usePiniaStore();
const items = ref([]);
const loading = ref(true);
const priceRange = ref({ min: 0, max: 10000 });
const selectedCategory = ref('');
const selectedRating = ref(0); 
const categories = ref([]);
const isFilterOpen = ref(false);  

const toggleFilter = () => {
  isFilterOpen.value = !isFilterOpen.value;
};

const closeFilter = () => {
  isFilterOpen.value = false
}

const fetchItems = async () => {
  try {
    const response = await axios.get('https://66863e0e83c983911b014b85.mockapi.io/nornlight/products');
    items.value = response.data;
    store.setItems(items.value);

    // Extract unique categories from the items
    categories.value = [...new Set(items.value.map(item => item.category))];
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};

const filteredItems = computed(() => {
  return items.value
    .filter(item => item.price >= priceRange.value.min && item.price <= priceRange.value.max)
    .filter(item => !selectedCategory.value || item.category === selectedCategory.value)
    // .filter(item => item.rating >= selectedRating.value); // Apply rating filter
});

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

@media (max-width: 1300px) {
  #grid_p {
    grid-template-columns: repeat(3, 1fr);
  }
  #text {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  #grid_p {
    grid-template-columns: repeat(2, 1fr);
  }
  #text {
    font-size: 1.75rem;
  }
  #fd {
    display: none;
  }
  #filterButton {
    display: flex;
  }
}

@media (min-width: 1015px) {
  #mt {
    margin-top: 140px;
    padding-left: 90px;
    padding-right: 90px;
  }
}
@media (max-width: 1015px) {
  #fd {
    display: none;
  }
  #filterButton {
    display: flex;
  }
}

</style>
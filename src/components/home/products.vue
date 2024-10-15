<template>
  <div id="as" class="md:container md:mb-[50px] md:mt-[100px] mb-[30px] mt-[20px]">
    <div class="flex justify-between mb-[40px]">
      <p id="text" class="font-bold md:text-[30px] md:leading-[54.64px] text-[20px]">Популярные товары</p>
      <router-link to="/all-products" class="md:flex hidden items-center border border-[#454545] py-[14px] px-[48px] rounded-[100px] gap-3">
        <p class="font-medium text-[16px] leading-[21.86px]">Все товары</p>
        <img src="/strelka.png" alt="">
      </router-link>
    </div>

    <div v-if="loading" class="flex justify-center items-center h-64">
      <p>Loading...</p>
    </div>

    <div v-else id="grid_p"class="grid md:grid-cols-5 grid-cols-2 gap-5">
      <div v-for="item in items" :key="item.id" class="hover:shadow-xl relative  grid grid-rows-1 h-[400px] md:h-[500px] hover:rounded-[10px]">
        <button @click="toggleLike(item.id)" class="absolute right-3 top-3 border px-[10px] py-[9px] rounded-[50%]">
          <svg v-if="isLiked(item.id)" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 48 48" class="animate-svg">
            <path fill="#ff0000" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 48 48" >
            <path fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/>
          </svg>
        </button>
        
        <router-link :to="{ name: 'product-detail', params: { id: item.id } }">
          <div class="md:h-[300px] h-[230px] rounded-[10px] flex ">
            <img :src="item.img" alt="Img" class="rounded-[20px] object-cover">
          </div>
          <p class="font-medium text-[13px] leading-[20px] mt-[12px] mx-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p class="line-through mt-[24px] opacity-[70%] font-medium text-[12px] leading-[13.2px] absolute bottom-[50px] left-[10px]">${{ item.sale }}</p>
        </router-link>

        <div class="flex justify-between items-center mx-[10px] mb-[15px]">
          <p class="font-bold text-[16px] leading-[20px]">${{ item.price }}</p>
          <button @click="clickKarzina(item.id)" class="border border-black/50 px-[20px] py-[9px] rounded-[100px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.052 11.5l.279-1.66c.182-1.086.273-1.628-.019-1.984c-.291-.356-.827-.356-1.898-.356H4.586c-1.071 0-1.607 0-1.898.356c-.292.356-.2.898-.019 1.984l1.204 7.18c.399 2.38.598 3.569 1.413 4.275C6.1 22 7.274 22 9.622 22H12m2-4h8m-4 4v-8m-.5-6.5a5.5 5.5 0 1 0-11 0" color="black"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center mt-[30px]">
      <button @click="handleButtonClick" class="bg-[#dad4d4] text-black py-3 px-[70px] md:px-[130px] transition-text font-bold rounded-[10px]">
        <span :class="{ 'fade-in': buttonClicked }">{{ buttonText }}</span>
      </button>
    </div>

    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { usePiniaStore } from '../../store/pinia'; 

const store = usePiniaStore();
const items = ref([]);
const loading = ref(true);
const limit = ref(8);  
const buttonClicked = ref(false); 
const buttonText = ref('Показать еще 20'); 
const router = useRouter();  

const fetchItems = async () => {
  try {
    const response = await axios.get('https://66863e0e83c983911b014b85.mockapi.io/nornlight/products');
    items.value = response.data.slice(0, limit.value);  
    store.setItems(items.value); 
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};

const loadMore = async () => {
  limit.value += 8;  
  try {
    const response = await axios.get('https://66863e0e83c983911b014b85.mockapi.io/nornlight/products');
    items.value = response.data.slice(0, limit.value);  
    store.setItems(items.value); 
  } catch (error) {
    console.error('Error fetching more data:', error);
  }
};

const handleButtonClick = () => {
  if (buttonClicked.value) {
    router.push('/all-products');  
  } else {
    loadMore();  
    buttonText.value = 'Все товары';  
    buttonClicked.value = true; 
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

<style scoped>
.transition-text {
  transition: all 0.3s ease-in-out;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

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
}

@media (max-width: 600px) {
  #grid_p {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 840px) {
  #grid_p {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

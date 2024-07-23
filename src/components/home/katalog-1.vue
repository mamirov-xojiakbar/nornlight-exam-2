<template>
  <div class="container mb-[90px]">
    <router-link to="#" class="text-[30px] font-bold flex items-center gap-1 mb-[40px]">
      Catalog 
      <svg xmlns="http://www.w3.org/2000/svg" class="mt-[6px]" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"/></g></svg>
    </router-link>

    <div v-if="loading" class="flex justify-center items-center h-64">
      <p>Loading...</p>
    </div>

    <swiper v-else
      :slidesPerView="1"
      :spaceBetween="15"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }"
      :modules="modules"
      navigation
      class="mySwiper"
    >
      <swiper-slide v-for="item in items" :key="item.id" class="hover:shadow-xl border hover:border-none p-5 relative">
        <button @click="toggleLike(item.id)" class="absolute right-7 top-7 bg-white px-[10px] py-[9px] rounded-[50%]">
          <img :src="isLiked(item.id) ? '/red-like2.jpg' : '/like.png'" alt="Like">
        </button>
        
        <router-link :to="{ name: 'product-detail', params: { id: item.id } }">
          <img :src="item.img" alt="Img">
          <p class="font-medium text-[20px] leading-[22px] mt-[32px]">{{ item.title }}</p>
          <p class="line-through mt-[24px] opacity-[70%] font-medium text-[12px] leading-[13.2px]">${{ item.sale }}</p>
        </router-link>

        <div class="flex justify-between items-center w-full">
          <p class="font-bold text-[20px] leading-[22px]">${{ item.price }}</p>
          <button @click="clickKarzina(item.id)" class="bg-[#454545] px-[20px] py-[9px] rounded-[100px]">
            <img src="/karzina-2.png" alt="">
          </button>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { usePiniaStore } from '../../store/pinia'; 
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const modules = [Pagination, Navigation];

const store = usePiniaStore();
const items = ref([]);
const loading = ref(true);
const limit = ref(8);  // Initialize limit with 8
const buttonClicked = ref(false);  // Track button clicks
const buttonText = ref('Показать еще 20');  // Initialize button text
const router = useRouter();  // Use router to navigate

const fetchItems = async () => {
  try {
    const response = await axios.get('https://66863e0e83c983911b014b85.mockapi.io/nornlight/products');
    items.value = response.data.slice(0, limit.value);  // Use limit.value
    store.setItems(items.value); 
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};

const loadMore = async () => {
  limit.value += 8;  // Increment limit by 8
  try {
    const response = await axios.get('https://66863e0e83c983911b014b85.mockapi.io/nornlight/products');
    items.value = response.data.slice(0, limit.value);  // Fetch more items up to the new limit
    store.setItems(items.value); 
  } catch (error) {
    console.error('Error fetching more data:', error);
  }
};

const handleButtonClick = () => {
  if (buttonClicked.value) {
    router.push('/all-products');  // Navigate to all-products page
  } else {
    loadMore();  // Load more items
    buttonText.value = 'Все товары';  // Change button text
    buttonClicked.value = true;  // Set button clicked to true
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

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 400px; /* Adjust this value as needed */
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>

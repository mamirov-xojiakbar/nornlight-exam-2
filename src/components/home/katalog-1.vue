<template>
  <div class="md:container mx-auto">
    <router-link to="#" class="md:text-[30px] text-[20px] font-bold flex items-center gap-1 mb-[40px]">
      Catalog
      <svg xmlns="http://www.w3.org/2000/svg" class="mt-[6px]" width="1em" height="1em" viewBox="0 0 24 24">
        <g fill="none" fill-rule="evenodd">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path fill="black" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z" />
        </g>
      </svg>
    </router-link>

    <div v-if="loading" class="flex justify-center items-center h-64">
      <p>Loading...</p>
    </div>

    <swiper
      v-else
      :slidesPerView="slidesPerView"
      :spaceBetween="spaceBetween"
      :centeredSlides="false"
      :breakpoints="breakpoints"
      :modules="modules"
      navigation
      class="mySwiper"
      style="padding-bottom: 90px;"
    >
      <swiper-slide
        v-for="item in items"
        :key="item.id"
        class="swiper-slide hover:shadow-xl relative grid grid-rows-1 hover:rounded-[10px]"
        style="height: 500px;"
      >
        <button
          @click="toggleLike(item.id)"
          class="absolute right-3 top-3 border px-[10px] py-[9px] rounded-[50%]"
        >
          <svg
            v-if="isLiked(item.id)"
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 48 48"
            class="animate-svg"
          >
            <path fill="#ff0000" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 48 48"
          >
            <path fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8" />
          </svg>
        </button>

        <router-link :to="{ name: 'product-detail', params: { id: item.id } }">
          <div class="md:h-[300px] h-[230px] rounded-[10px] flex">
            <img :src="item.img" alt="Img" class="rounded-[20px]" />
          </div>
          <p class="font-medium text-[13px] leading-[20px] mt-[12px] mx-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p
            class="line-through mt-[24px] opacity-[70%] font-medium text-[12px] leading-[13.2px] absolute bottom-[50px] left-[10px]"
          >
            ${{ item.sale }}
          </p>
        </router-link>

        <div class="flex justify-between items-center mb-[15px] w-full px-[10px]">
          <p class="font-bold text-[16px] leading-[20px]">
            ${{ item.price }}
          </p>
          <button
            @click="clickKarzina(item.id)"
            class="border border-black/50 px-[20px] py-[9px] rounded-[100px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.052 11.5l.279-1.66c.182-1.086.273-1.628-.019-1.984c-.291-.356-.827-.356-1.898-.356H4.586c-1.071 0-1.607 0-1.898.356c-.292.356-.2.898-.019 1.984l1.204 7.18c.399 2.38.598 3.569 1.413 4.275C6.1 22 7.274 22 9.622 22H12m2-4h8m-4 4v-8m-.5-6.5a5.5 5.5 0 1 0-11 0" color="black" />
            </svg>
          </button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
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
const limit = ref(8);

const breakpoints = {
  360: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  600: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  700: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

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

const isLiked = (productId) => store.likedProducts.includes(productId);

const isInKarzina = (productId) => store.karzina.includes(productId);

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

.swiper-container {
  width: 100%;
  overflow: hidden;
}

.swiper-slide {
  height: 470px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.swiper-slide img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 640px) {
  .swiper-slide {
    height: 400px !important;
  }
}
</style>

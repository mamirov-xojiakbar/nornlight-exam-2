<template>
  <div id="mt" class="md:container mb-[111px] mt-[200px]">
    <div v-if="!product" class="text-center text-gray-600 mt-4 mb-[40px]">
      No products found.
    </div>
    <div v-else>
      <!-- Desktop -->
      <div id="desktop" class="md:flex gap-[20px] hidden">
        <div id="1" class="flex flex-col gap-[15px] sticky-container">
          <img
            v-for="img in product.images"
            :src="img"
            :key="img"
            alt="Thumbnail Image"
            @click="swapImage(img)"
            class="rounded-[10px] w-[70px] h-[88px] object-cover"
          />
          <div @click="swapToVideo" class="rounded-[10px] w-[70px] h-[88px] cursor-pointer bg-gray-300 flex items-center justify-center">
            <span class="text-sm text-center">Watch Video</span>
          </div>
        </div>
        <div id="2" class="relative md:w-[430px] md:h-[500px] w-full mb-[40px] md:mb-0 rounded-[20px]">
          <img
            v-if="!isVideo"
            :src="mainImage"
            alt="Product Image"
            class="w-full h-full object-cover rounded-[20px]"
          />
          <video
            v-if="isVideo"
            controls
            class="w-full h-full object-cover rounded-[20px]"
            :src="videoUrl"
          ></video>
        </div>
        <div id="3" class="md:w-[750px] scroll-container pr-3 pb-5">
          <p class="font-bold text-[30px] leading-[44px] mb-[20px]">{{ product.title }}</p>
          <p class="font-medium text-[14px] leading-[22.4px] opacity-[50%]">Scott</p>
          <div class="flex items-center justify-between mt-[10px] mb-[10px]">
            <p class="font-medium text-[14px] leading-[22.4px] opacity-[50%]">Артикул : 7655-188</p>
          </div>
          <p class="font-medium text-[16px] leading-[25.6px] text-[#4D932C] mb-[10px]">В наличии</p>
          <div class="flex mb-[20px] items-center gap-[20px]">
            <p class="font-medium text-[40px] leading-[64px]">${{ (product.unitPrice * product.quantity).toFixed(2) }}</p>
            <p class="font-medium text-[18px] leading-[28.8px] opacity-[50%] line-through mt-3">${{ product.sale }}</p>
          </div>
          <p class="font-normal text-[16px] leading-[25.6px] mb-[48px]">
            Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. 
            Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.
          </p>
          <div class="flex gap-[16px] mb-[30px]">
            <button @click="clickKarzina(product.id)" class="bg-[#454545] hidden md:block rounded-[10px] px-[80px] text-white">Корзину</button>
            <button @click="toggleLike(product.id)" class="border px-[14px] py-[14px] rounded-[10px]">
              <svg v-if="isLiked(product.id)" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" class="animate-svg">
                <path fill="#ff0000" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="#5d5b5b" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/></svg>
            </button>
          </div>
          <p class="font-medium text-[20px] leading-[44px] mb-[13px]">Характеристика</p>
          <div v-for="(entry, i) in processedXarakteristika" :key="i" class="grid md:grid-cols-2 py-[9px] items-center">
            <p class="font-medium text-[14px] leading-[19.68px] mb-2 md:mb-0">{{ entry.key }}</p>
            <p class="flex md:justify-end md:text-end font-light text-[15px] leading-[20.8px] opacity-[70%]">{{ entry.value }}</p>
          </div>
        </div>
      </div>

      <!-- Mobile -->
      <div id="mobile" class="md:hidden px-[15px]">
        <swiper
          :scrollbar="{
            hide: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(img, index) in product.images" :key="index">
            <img
              :src="img"
              alt="Thumbnail Image"
              class=""
            />
          </swiper-slide>
          <swiper-slide>
            <video
              controls
              class="w-full h-[300px] object-cover rounded-[5px]"
              :src="videoUrl"
            ></video>
          </swiper-slide>
        </swiper>

        <div id="3" class="md:w-[750px]  pr-3 pb-5">
          <p class="font-bold text-[30px] leading-[44px] mb-[20px] mt-[20px]">{{ product.title }}</p>
          <p class="font-medium text-[14px] leading-[22.4px] opacity-[50%]">Scott</p>
          <div class="flex items-center justify-between mt-[10px] mb-[10px]">
            <p class="font-medium text-[14px] leading-[22.4px] opacity-[50%]">Артикул : 7655-188</p>
          </div>
          <p class="font-medium text-[16px] leading-[25.6px] text-[#4D932C] mb-[10px]">В наличии</p>
          <div class="flex mb-[20px] items-center gap-[20px]">
            <p class="font-medium text-[40px] leading-[64px]">${{ (product.unitPrice * product.quantity).toFixed(2) }}</p>
            <p class="font-medium text-[18px] leading-[28.8px] opacity-[50%] line-through mt-3">${{ product.sale }}</p>
          </div>
          <p class="font-normal text-[16px] leading-[25.6px] mb-[48px]">
            Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. 
            Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.
          </p>
          <div class="flex gap-[16px] mb-[30px]">
            <button @click="clickKarzina(product.id)" class="bg-[#454545] rounded-[10px] px-[80px] text-white">Корзину</button>
            <button @click="toggleLike(product.id)" class="border px-[14px] py-[14px] rounded-[10px]">
              <svg v-if="isLiked(product.id)" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" class="animate-svg">
                <path fill="#ff0000" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="#5d5b5b" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/></svg>
            </button>
          </div>
          <p class="font-medium text-[20px] leading-[44px] mb-[13px]">Характеристика</p>
          <div v-for="(entry, i) in processedXarakteristika" :key="i" class="grid md:grid-cols-2 py-[9px] items-center">
            <p class="font-medium text-[14px] leading-[19.68px] mb-2 md:mb-0">{{ entry.key }}</p>
            <p class="flex md:justify-end md:text-end font-light text-[15px] leading-[20.8px] opacity-[70%]">{{ entry.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePiniaStore } from '../../store/pinia';
import { useKatalog } from "../../composable/useKatalog";
import { computed } from "vue";

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// Import required modules
import { Scrollbar } from 'swiper/modules';

const modules = [Scrollbar];
const { xarakteristika } = useKatalog();

const store = usePiniaStore();
const route = useRoute();

const processedXarakteristika = computed(() => {
  return xarakteristika.flatMap(item =>
    Object.entries(item).map(([key, value]) => ({ key, value }))
  );
});

const product = reactive({
  id: '',
  img: '',
  title: '',
  price: 0,
  quantity: 1,
  unitPrice: 0,
  sale: 0,
  images: ['/blog-1.png', '/blog-2.png', '/blog-3.png'],
  video: 'https://www.w3schools.com/html/mov_bbb.mp4'  // External video URL
});

const mainImage = ref('');
const isVideo = ref(false);
const videoUrl = ref('');

onMounted(() => {
  const productId = route.params.id;
  const fetchedProduct = store.items.find(item => item.id === productId);
  if (fetchedProduct) {
    Object.assign(product, {
      ...fetchedProduct,
      quantity: fetchedProduct.quantity || 1,
      unitPrice: fetchedProduct.price,
      sale: fetchedProduct.sale || fetchedProduct.price,
    });
    mainImage.value = product.img;  // Set the main image to the product image
    product.images.unshift(product.img);  // Add the main image to the images array
  }
});


const clickKarzina = (productId) => {
  if (!isInKarzina(productId)) {
    store.addToKarzina(productId);
  } else {
    alert('This product is already in the cart.');
  }
};

const isInKarzina = (productId) => {
  return store.karzina.includes(productId);
};

const toggleLike = (productId) => {
  store.toggleLikedProduct(productId);
};

const isLiked = (productId) => {
  return store.likedProducts.includes(productId);
};

const swapImage = (imgSrc) => {
  isVideo.value = false;
  mainImage.value = imgSrc;
};

const swapToVideo = () => {
  isVideo.value = true;
  videoUrl.value = product.video;
};
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
.sticky-container {
  position: sticky;
  top: 0;
}

.scroll-container {
  height: 500px;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgb(173, 173, 173);
  border-radius: 10px;
}

@media (max-width: 1015px) {
  #desktop {
    display: none;
  }
  #mobile {
    display: block;
  }
  #mt {
    margin-top: 0px;
  }
}

@media (max-width: 640px) {
  #desktop {
    display: none;
  }
  #mobile {
    display: block;
  }
  #mt {
    margin-top: 0px;
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>

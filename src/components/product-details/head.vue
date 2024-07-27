<template>
  <div class="container mt-[150px] md:mt-[200px] mb-[181px]">
    <div v-if="!product" class="text-center text-gray-600 mt-4 mb-[40px]">
      No products found.
    </div>
    <div v-else>
      <div class="md:flex gap-[30px]">
        <div class="flex flex-col gap-[20px]">
          <img v-for="img in product.images" :src="img" :key="img" alt="Thumbnail Image" @click="swapImage(img)" class="rounded-[10px] w-[150px]">
        </div>
        <img :src="mainImage" alt="Product Image" class="md:w-[550px] md:h-[500px] w-full mb-[40px] md:mb-0 rounded-[20px]">
        <div class="md:w-[650px]">
          <p class="font-bold text-[30px] leading-[44px] mb-[10px]">{{ product.title }}</p>

          <p class="font-medium text-[14px] leading-[22.4px] opacity-[50%]">Scott</p>

          <div class="flex items-center justify-between mt-[5px] mb-[5px]">
            <p class="font-medium text-[14px] leading-[22.4px] opacity-[50%]">Артикул : 7655-188</p>
            <div class="flex gap-2">
              <a href="#" class="hover:bg-[#4C4C4C] bg-[#E5E5E5] px-[12px] py-[5px] flex items-center justify-center rounded-[50%]">
                <img src="/sw.png" alt="">
              </a>
              <a href="#" class="hover:bg-[#4C4C4C] bg-[#E5E5E5] p-[9px] flex items-center justify-center rounded-[50%]">
                <img src="/sw-2.png" alt="">
              </a>
              <a href="#" class="hover:bg-[#4C4C4C] bg-[#E5E5E5] p-[9px] flex items-center justify-center rounded-[50%]">
                <img src="/sw-3.png" alt="">
              </a>
              <a href="#" class="hover:bg-[#4C4C4C] bg-[#E5E5E5] p-[9px] flex items-center justify-center rounded-[50%]">
                <img src="/sw-4.png" alt="">
              </a>
              <a href="#" class="hover:bg-[#4C4C4C] bg-[#E5E5E5] p-[9px] flex items-center justify-center rounded-[50%]">
                <img src="/sw-5.png" alt="">
              </a>
            </div>
          </div>

          <p class="font-medium text-[16px] leading-[25.6px] text-[#4D932C] mb-[10px]">В наличии</p>

          <div class="flex mb-[10px] items-center gap-[20px]">
            <p class="font-medium text-[40px] leading-[64px]">${{ (product.unitPrice * product.quantity).toFixed(2) }}</p>
            <p class="font-medium text-[18px] leading-[28.8px] opacity-[50%] line-through mt-3">${{ product.sale }}</p>
          </div>

          <p class="font-normal text-[16px] leading-[25.6px] mb-[48px]">
            Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. 
            Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.
          </p>

          <div class="flex gap-[16px]">
            <div class="flex gap-[32px] items-center px-[16px] border rounded-[10px] w-[130px]">
              <button @click="minus(product.id)" class="font-medium text-[16px] leading-[19.68px]">-</button>
              <p class="font-medium text-[16px] leading-[19.68px]">{{ product.quantity }}</p>
              <button @click="plus(product.id)" class="font-medium text-[16px] leading-[19.68px]">+</button>
            </div>
            <button @click="clickKarzina(product.id)" class="bg-[#454545] hidden md:block rounded-[10px] px-[80px] text-white">Корзину</button>
            <button @click="toggleLike(product.id)" class="border px-[14px] py-[14px] rounded-[10px]">
              <svg v-if="isLiked(product.id)" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" class="animate-svg">
                <path fill="#ff0000" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="#5d5b5b" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/></svg>
            </button>
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

const store = usePiniaStore();
const route = useRoute();

const product = reactive({
  id: '',
  img: '',
  title: '',
  price: 0,
  quantity: 1,
  unitPrice: 0,
  sale: 0,
  images: ['/blog-1.png', '/blog-2.png', '/blog-3.png'] 
});

const mainImage = ref('');

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

const minus = (productId) => {
  if (product.id === productId && product.quantity > 1) {
    product.quantity -= 1;
  }
};

const plus = (productId) => {
  if (product.id === productId) {
    product.quantity += 1;
  }
};

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
  mainImage.value = imgSrc;
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
</style>

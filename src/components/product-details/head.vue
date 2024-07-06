<template>
  <div class="container mt-[150px] md:mt-[200px] mb-[181px]">
    <div v-if="!product" class="text-center text-gray-600 mt-4 mb-[40px]">
      No products found.
    </div>
    <div v-else>
      <div class="md:flex gap-[56px]">
        <img :src="product.img" alt="Product Image" class="md:w-[650px] md:h-[600px] w-full mb-[40px] md:mb-0">
        <div class="md:w-[650px]">
          <p class="font-bold text-[40px] leading-[44px] mb-[50px]">{{ product.title }}</p>

          <p class="font-medium text-[14px] leading-[22.4px] opacity-[50%]">Scott</p>

          <div class="flex items-center justify-between mt-[12px] mb-[12px]">
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

          <p class="font-medium text-[16px] leading-[25.6px] text-[#4D932C] mb-[40px]">В наличии</p>

          <div class="flex mb-[40px] items-center gap-[20px]">
            <p class="font-medium text-[40px] leading-[64px]">${{ (product.unitPrice * product.quantity).toFixed(2) }}</p>
            <p class="font-medium text-[18px] leading-[28.8px] opacity-[50%] line-through mt-3">${{ product.sale }}</p>
          </div>

          <p class="font-normal text-[16px] leading-[25.6px] mb-[48px]">
            Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. 
            Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.
          </p>

          <div class="flex gap-[16px]">
            <div class="flex gap-[32px] items-center p-[16px] border rounded-[10px]">
              <button @click="minus(product.id)" class="font-medium text-[16px] leading-[19.68px]">-</button>
              <p class="font-medium text-[16px] leading-[19.68px]">{{ product.quantity }}</p>
              <button @click="plus(product.id)" class="font-medium text-[16px] leading-[19.68px]">+</button>
            </div>
            <button @click="clickKarzina(product.id)" class="bg-[#454545] hidden md:block rounded-[10px] px-[80px] py-[16px] text-white">В корзину</button>
            <button @click="toggleLike(product.id)" class="bg-[#F8F8F8] px-[14px] py-[14px] rounded-[10px]">
              <img :src="store.likedProducts.includes(product.id) ? '/red-like2.jpg' : '/like.png'" alt="Like">
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
  sale: 0
});

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
</script>

<style scoped>
</style>

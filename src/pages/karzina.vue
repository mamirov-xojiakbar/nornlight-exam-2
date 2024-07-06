<template>
  <div class="container mt-[140px]">
    <div class="flex">
      <p class="font-bold text-[40px] md:text-[64px] md:leading-[70.4px] md:mb-[34px]">Корзина</p>
      <p class="bg-red-500 w-[20px] h-[20px] flex items-center justify-center text-white rounded-[50%] ml-4">{{ karzinaCount }}</p>
    </div>

    <div>
      <div v-if="getKarzinaProducts.length === 0" class="text-center text-gray-600 mt-4 mb-[40px]">
        No karzina products yet.
      </div>

      <div v-else class="mt-[36px] mb-[93px] ">
        <div class="bg-[#F2F2F2]  mb-[20px] rounded-[20px] px-[46px] py-[40px] w-[100%]">
            <div class="md:flex hidden pb-[28px] border-b font-medium text-[16px] leading-[21.86px] opacity-[50%]">
              <p class="mr-[80px]">Фото</p>
              <p class="mr-[180px]">Товары</p>
              <p class="mr-[253px]">Описание</p>
              <p class="mr-[240px]">Артикул</p>
              <p>Количество</p>
            </div>
    
            <div v-for="product in getKarzinaProducts" :key="product.id" class="md:flex relative items-start pb-[20px] mt-[33px] border-b">
              <div class="flex w-[300px]">
                <img :src="product.img" alt="Product Image" class="md:w-[80px] md:h-[80px] w-[48px] h-[48px] mr-[37px]">
                <div>
                  <p class="font-semibold text-[16px] leading-[20.8px] mb-[10px] md:mb-[20px]">{{ product.title }}</p>
                  <p class="font-bold text-[20px] leading-[22px]">${{ (product.unitPrice * product.quantity.value).toFixed(2) }}</p>
                </div>
              </div>
              <div class="md:flex ml-[85px] md:mt-0 mt-[10px] md:ml-[150px] items-start">
                <p class="md:w-[20%] font-normal text-[16px] leading-[20.8px]">Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>
                <p class="mt-[20px] md:mt-0 md:w-[20%] font-normal text-[16px] leading-[20.8px] md:ml-[160px]">RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</p>
                <div class="flex items-center md:ml-[120px] mt-[20px] md:mt-0">
                  <button @click="minus(product.id)" class="px-2 font-medium text-[24px] leading-[32.78px]">-</button>
                  <p class="font-medium text-[16px] leading-[21px] border border-opacity-[10%] py-[19px] px-[27px] rounded-[10px]">{{ product.quantity.value }}</p>
                  <button @click="plus(product.id)" class="px-2 font-medium text-[20px] leading-[27px]">+</button>
                </div>
                <button @click="remove(product.id)" class="absolute right-5 bottom-8">
                  <img src="/delete.png" alt="">
                </button>
              </div>
            </div>
        </div>

        <div class="bg-[#F2F2F2] px-[48px] pt-[45px] pb-[99px] mb-[58px] rounded-[20px]">
            <p class="font-bold text-[32px] leading-[35.2px] mb-[31px]">Оформление</p>

            <div class="grid md:grid-cols-3 gap-[20px] font-semibold text-[16px] leading-[20px] pb-[37px] border-b">
                <input type="text" placeholder="ФИО" class="py-[15px] px-[20px] rounded-[100px] bg-[#F2F2F2] border border-[#454545]">
                <input type="text" placeholder="Tелефон" class="py-[15px] px-[20px] rounded-[100px] bg-[#F2F2F2] border border-[#454545]">
                <input type="text" placeholder="Электронная почта" class="py-[15px] px-[20px] rounded-[100px] bg-[#F2F2F2] border border-[#454545]">
            </div>
            <p class="mt-[37px] font-bold text-[32px] leading-[35.2px] mb-[31px]">Доставка</p>
            <div class="grid grid-cols-1 md:w-[67%]">
                <input type="text" placeholder="ФИО" class="mb-[31px] py-[15px] px-[20px] rounded-[100px] bg-[#F2F2F2] border border-[#454545]">
                <textarea name="" id="" placeholder="Комментарий" class="py-[15px] px-[20px] rounded-[26px] resize-none h-[150.87px] bg-[#F2F2F2] border border-[#454545]"></textarea>
            </div>
        </div>

        <div class="bg-[#F2F2F2] px-[48px] pt-[45px] pb-[52px] mb-[80px] rounded-[20px]">
            <p class="font-bold text-[32px] leading-[35.2px] mb-[31px]">Оплата</p>
            <div class="md:flex md:gap-[40px] mb-[69px] w-[100%]">
              <p class="font-medium text-[16px] leading-[20.8px] opacity-[50%] mb-[20px] md:mb-0">Товары........................................12 300₽</p>
              <p class="font-medium text-[16px] leading-[20.8px] opacity-[50%]">Доставка........................................580₽</p>
            </div>
          <p class="font-bold text-[24px] leading-[26.4px] mb-[28px] text-[#454545]">12 800₽</p>
            <div class="md:flex items-center">
              <button class="md:mr-[24px] bg-[#454545] text-white w-full md:w-[30%] md:px-[135px] py-[14px] rounded-[100px]">Купить</button>
              <div class="flex mt-[21px] md:mt-0">
                <p class="border border-black py-[5px] px-[4px] rounded-[50%] mr-[7px] md:block hidden">
                  <img src="/check.png" alt="">
                </p>
                <p class="font-semibold text-[12px] leading-[15.6px] opacity-[50%]">Я согласен наобработку моих персональных данных</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePiniaStore } from '../store/pinia';
import { computed, ref } from 'vue';

const store = usePiniaStore();

const karzinaCount = computed(() => {
  return store.karzina.length;
});

const getKarzinaProducts = computed(() => {
  return store.karzina.map(productId => {
    const product = store.items.find(item => item.id === productId);
    return {
      ...product,
      quantity: ref(product.quantity || 1),
      unitPrice: product.price
    };
  }).filter(product => product !== undefined);
});

const minus = (productId) => {
  const product = getKarzinaProducts.value.find(p => p.id === productId);
  if (product && product.quantity.value > 1) {
    product.quantity.value -= 1;
  }
};

const plus = (productId) => {
  const product = getKarzinaProducts.value.find(p => p.id === productId);
  if (product) {
    product.quantity.value += 1;
  }
};

const remove = (productId) => {
  store.removeFromKarzina(productId);
};
</script>

<style lang="scss" scoped>
</style>

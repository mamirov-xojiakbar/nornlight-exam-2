<template>
  <div class="w-full">
    <!-- Top Navigation Bar -->
    <div class="fixed top-0 left-0 w-full z-30 backdrop-blur-sm bg-opacity-60 bg-white">
      <!-- Mobile view -->
      <div class="container flex justify-between items-center py-2 md:hidden">
        <div class="flex items-center">
          <button @click="toggleDropdown" class="md:hidden block mr-3">
            <img src="/black-list.png" alt="Menu icon" :class="{ hidden: dropdownVisible }">
            <img src="/close.png" alt="Close icon" :class="{ hidden: !dropdownVisible }">
          </button>
          <router-link to="/home" class="mr-3">
            <img src="/logo.png" alt="Logo" />
          </router-link>
        </div>

        <div class="md:hidden flex md:gap-8 gap-4">
          <router-link to="/saved" class="flex flex-col items-center mt-[2px]">
            <img src="/saved.png" alt="Saved icon" />
            <p v-if="likedProductCount > 0" class="bg-red-500 absolute top-1 right-12 w-[20px] h-[20px] flex items-center justify-center text-white rounded-[50%]">{{ likedProductCount }}</p>
            <span class="font-semibold text-xs mt-2 hidden md:block">Избранное</span>
          </router-link>

          <router-link to="#" class="md:flex hidden flex-col items-center">
            <img src="/antena.png" alt="Comparison icon" />
            <span class="font-semibold text-xs mt-2 hidden md:block">Сравнение</span>
          </router-link>

          <router-link to="/karzina" class="flex flex-col items-center">
            <img src="/karzina.png" alt="Cart icon" />
            <p v-if="karzinaCount > 0" class="bg-red-500 absolute top-1 right-1 w-[20px] h-[20px] flex items-center justify-center text-white rounded-[50%]">{{ karzinaCount }}</p>
            <span class="font-semibold text-xs mt-2 hidden md:block">Корзина</span>
          </router-link>
        </div>
      </div>

      <!-- Desktop view -->
      <div class="hidden md:flex justify-between items-center container py-2">
        <div class="text-sm font-semibold opacity-70 flex gap-6">
          <router-link to="/about-us">О компании</router-link>
          <router-link to="/shopping">Доставка и оплата</router-link>
          <router-link to="#">Возврат</router-link>
          <router-link to="#">Гарантии</router-link>
          <router-link to="#">Контакты</router-link>
          <router-link to="#">Блог</router-link>
        </div>
        <div class="text-sm font-semibold flex gap-6 items-center">
          <p>8 (800) 890-46-56</p>
          <router-link to="#" class="opacity-70">Заказать звонок</router-link>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="fixed top-9 left-0 w-full z-20 py-3 backdrop-blur-sm bg-opacity-60 bg-white px-10 md:px-0">
      <div class="md:flex container items-center justify-between gap-5 hidden">
        <div class="flex items-center">
          <router-link to="/home" class="mr-3">
            <img src="/logo.png" alt="Logo" class="mr-6" />
          </router-link>

          <router-link
            to="#"
            class="bg-gray-800 hidden md:flex text-white items-center gap-2 pr-12 pl-8 py-4 rounded-full"
          >
            <img src="/list.png" alt="Catalog icon" />
            <span class="font-semibold text-lg">Каталог</span>
          </router-link>
        </div>

        <div class="md:flex border border-black rounded-full px-4 py-2 items-center w-[570px] hidden">
          <input
            type="text"
            placeholder="Поиск по товарам"
            class="w-full border-none outline-none px-2 py-1 rounded-full bg-transparent"
          />
          <img src="/lupa.png" alt="Search icon" class="w-6 h-6 p-1" />
        </div>

        <div class="flex md:gap-8 gap-2">
          <router-link to="/saved" class="flex flex-col items-center mt-[2px]">
            <div class="relative">
              <img src="/saved.png" alt="Saved icon" />
              <p v-if="likedProductCount > 0" class="bg-red-500 absolute bottom-2 left-4 w-[20px] h-[20px] flex items-center justify-center text-white rounded-[50%]">{{ likedProductCount }}</p>
            </div>
            <span class="font-semibold text-xs mt-2 hidden md:block">Избранное</span>
          </router-link>

          <router-link to="#" class="md:flex hidden flex-col items-center">
            <img src="/antena.png" alt="Comparison icon" />
            <span class="font-semibold text-xs mt-2 hidden md:block">Сравнение</span>
          </router-link>

          <router-link to="/karzina" class="flex flex-col items-center">
            <div class="relative">
              <img src="/karzina.png" alt="Cart icon" />
              <p v-if="karzinaCount > 0" class="bg-red-500 absolute bottom-3 left-4 w-[20px] h-[20px] flex items-center justify-center text-white rounded-[50%]">{{ karzinaCount }}</p>
            </div>
            <span class="font-semibold text-xs mt-2 hidden md:block">Корзина</span>
          </router-link>
        </div>
      </div>

      <!-- Mobile Search Bar -->
      <div class="flex border border-black rounded-full px-4 py-2 items-center w-full md:hidden mt-5">
        <input
          type="text"
          placeholder="Поиск по товарам"
          class="w-full border-none outline-none px-1 rounded-full bg-transparent"
        />
        <img src="/lupa.png" alt="Search icon" class="w-6 h-6 p-1" />
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-if="dropdownVisible" class="md:hidden absolute top-20 left-0 w-full bg-white md:shadow-md z-50 px-3">
        <div class="flex flex-col items-center py-4 justify-center">
          <router-link to="/about-us" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">О компании</router-link>
          <router-link to="/shopping" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">Доставка и оплата</router-link>
          <router-link to="#" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">Возврат</router-link>
          <router-link to="#" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">Гарантии</router-link>
          <router-link to="#" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">Контакты</router-link>
          <router-link to="#" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">Блог</router-link>
          <router-link
            to="#"
            class="bg-gray-800 flex text-white items-center w-full gap-2 py-2 rounded-full mt-6 justify-center"
          >
            <img src="/list.png" alt="Catalog icon" />
            <span class="font-semibold text-lg">Каталог</span>
          </router-link>
          <p class="mt-6">8 (800) 890-46-56</p>
          <router-link to="#" class="opacity-70">Заказать звонок</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePiniaStore } from '../store/pinia'; 
import { computed } from 'vue';

const dropdownVisible = ref(false);

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

const store = usePiniaStore();

const likedProductCount = computed(() => {
  return store.likedProducts.length;
});

const karzinaCount = computed(() => {
  return store.karzina.length;
});
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(5px);
}
</style>

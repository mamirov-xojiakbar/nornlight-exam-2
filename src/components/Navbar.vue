<template>
  <div class="w-full">
    <div class="fixed top-0 left-0 w-full z-30 backdrop-blur-sm bg-opacity-60 bg-white pb-[20px]">
      <!-- Mobile view -->
      <div class="container flex justify-between items-center py-2 md:hidden" :class="{ 'bg-white pt-[13px]': dropdownVisible }">
        <div class="flex items-center">
          <button @click="toggleDropdown" class="md:hidden block mr-3">
            <img src="/black-list.png" alt="Menu icon" :class="{ hidden: dropdownVisible }">
            <img src="/close.png" alt="Close icon" :class="{ hidden: !dropdownVisible }">
          </button>
          <router-link to="/home" class="mr-3">
            <img src="/logo.png" alt="Logo" :class="{ hidden: dropdownVisible }" />
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
      <div class="hidden md:flex justify-between items-center container pt-2 mb-5">
        <div class="text-sm font-semibold opacity-70 flex gap-6">
          <router-link to="/about-us">О компании</router-link>
          <router-link to="/shopping">Доставка и оплата</router-link>
          <router-link to="/return">Возврат</router-link>
          <router-link to="/garant">Гарантии</router-link>
          <router-link to="/contact">Контакты</router-link>
          <router-link to="/blog">Блог</router-link>
        </div>
        <div class="text-sm font-semibold flex gap-6 items-center">
          <p>8 (800) 890-46-56</p>
          <button class="opacity-70" @click="toggleCallForm">Заказать звонок</button>
        </div>
      </div>

      <div class="md:flex container items-center justify-between gap-5 hidden">
        <div class="flex items-center">
          <router-link to="/home" class="mr-3">
            <img src="/logo.png" alt="Logo" class="mr-6" />
          </router-link>

          <router-link
            to="/katalog"
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
      <div class="flex border border-black rounded-full px-4 py-2 items-center w-full md:hidden mt-2">
        <input
          type="text"
          placeholder="Поиск по товарам"
          class="w-full border-none outline-none px-1 rounded-full bg-transparent"
        />
        <img src="/lupa.png" alt="Search icon" class="w-6 h-6 p-1" />
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-if="dropdownVisible" class="md:hidden absolute top-10 left-0 w-full bg-white shadow-md z-40 px-3">
        <div class="flex flex-col items-center py-4 justify-center">
          <router-link @click="toggleDropdown" to="/about-us" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">О компании</router-link>
          <router-link @click="toggleDropdown" to="/shopping" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">Доставка и оплата</router-link>
          <router-link @click="toggleDropdown" to="/return" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">Возврат</router-link>
          <router-link @click="toggleDropdown" to="/garant" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">Гарантии</router-link>
          <router-link @click="toggleDropdown" to="/contact" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">Контакты</router-link>
          <router-link @click="toggleDropdown" to="/blog" class="w-full flex justify-center border-b py-3 opacity-70 text-sm">Блог</router-link>
          <router-link @click="toggleDropdown"
            to="#"
            class="bg-gray-800 flex text-white items-center w-full gap-2 py-2 rounded-full mt-6 justify-center"
          >
            <img src="/list.png" alt="Catalog icon" />
            <span class="font-semibold text-lg">Каталог</span>
          </router-link>
          <p class="mt-6">8 (800) 890-46-56</p>
          <router-link to="#" class="opacity-70" @click="toggleCallForm">Заказать звонок</router-link>
        </div>
      </div>
    </div>

    <!-- Dark overlay -->
    <div v-if="dropdownVisible || callFormVisible" @click="closeOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-20"></div>

    <!-- Call Form Popup -->
    <div v-if="callFormVisible" class="fixed md:ml-[33%] mx-4 md:mx-0 z-50">
      <div class="bg-white p-5 md:p-[64px] rounded-[30px] shadow-lg relative ">
        <button @click="toggleCallForm" class="absolute top-1 right-[30px] text-[40px]">&times;</button>
        <form @submit.prevent="submitForm">
          <h2 class="text-[24px] font-bold mb-[20px]">Заполните, и мы перезвоним</h2>
          <input type="text" id="name" v-model="name" required class="mt-1 px-[20px] py-[10px] block w-full border border-black rounded-[100px] shadow-sm  mb-[12px]">
          <input type="tel" id="phone" v-model="phone" required class="mt-1 px-[20px] py-[10px] block w-full mb-[30px] border border-black rounded-[100px]">
          <button type="submit" class="w-full bg-black text-white py-[20px] px-[10px] rounded-[100px] shadow-sm  ">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { usePiniaStore } from '../store/pinia';

const dropdownVisible = ref(false);
const callFormVisible = ref(false);
const name = ref('');
const phone = ref('');

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

function toggleCallForm() {
  callFormVisible.value = !callFormVisible.value;
}

function closeOverlay() {
  dropdownVisible.value = false;
  callFormVisible.value = false;
}

function submitForm() {
  // Handle form submission logic here
  console.log('Name:', name.value);
  console.log('Phone:', phone.value);
  // Reset form fields
  name.value = '';
  phone.value = '';
  // Close the form
  closeOverlay();
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

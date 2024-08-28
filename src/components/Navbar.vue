<template>
  <div class="w-full">
    <div id="navbar" class="md:fixed top-0 left-0 w-full z-30 backdrop-blur-sm bg-opacity-60 bg-white pb-[20px]">
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
        </div>
      </div>

      <div class="md:flex container items-center justify-between gap-5 hidden">
        <div class="flex items-center">
          <router-link to="/home" class="mr-3">
            <img src="/logo.png" alt="Logo" class="mr-6" />
          </router-link>

          <!-- Catalog button -->
          <button
            @click="toggleDropdown2"
            class="bg-gray-800 hidden md:flex text-white items-center gap-2 px-6 py-2 rounded-[10px] group "
          >
            <svg v-if="!dropdownVisible2" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" >
              <path fill="white" d="M2 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M2.5 7a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"/>
            </svg>
            <svg v-if="dropdownVisible2" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" >
              <g fill="none" fill-rule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                <path fill="white" d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414z"/>
              </g>
            </svg>
            <span class="font-semibold text-lg">Каталог</span>
          </button>
          <Dropdown v-if="dropdownVisible2" />
        </div>

        <div class="md:flex border border-black rounded-full px-4 py-2 items-center w-[570px] hidden">
          <input
            type="text"
            placeholder="Поиск по товарам"
            class="w-full border-none outline-none px-2 py-1 rounded-full bg-transparent"
          />
          <img src="/lupa.png" alt="Search icon" class="w-6 h-6 p-1" />
        </div>

        <div class="flex md:gap-6 gap-2">
          <router-link to="/login" class="md:flex hidden flex-col items-center mt-[2px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21c0-2.761-3.582-5-8-5s-8 2.239-8 5m8-8a5 5 0 1 1 0-10a5 5 0 0 1 0 10"/></svg>
            <span class="font-semibold text-xs mt-[6px] hidden md:block">Kirish</span>
          </router-link>

          <router-link to="/saved" class="flex flex-col items-center mt-[2px]">
            <div class="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/></svg>
              <p v-if="likedProductCount > 0" class="bg-red-500 absolute bottom-2 left-4 w-[20px] h-[20px] flex items-center justify-center text-white rounded-[50%]">{{ likedProductCount }}</p>
            </div>
            <span class="font-semibold text-xs mt-[6px] hidden md:block">Saralangan</span>
          </router-link>

          <router-link to="/karzina" class="flex flex-col items-center mt-[2px]">
            <div class="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="black" d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4-74.57a8 8 0 0 1-7.9 6.57H77.22L65.59 72h148.82Z"/></svg>
              <p v-if="karzinaCount > 0" class="bg-red-500 absolute bottom-3 left-4 w-[20px] h-[20px] flex items-center justify-center text-white rounded-[50%]">{{ karzinaCount }}</p>
            </div>
            <span class="font-semibold text-xs mt-[6px] hidden md:block">Savat</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Overlay -->
    <div v-if="dropdownVisible2" class="fixed inset-0 bg-black bg-opacity-0 z-20" @click="closeOverlay"></div>
  </div>
</template>



<script setup>
import { ref, computed } from 'vue';
import { usePiniaStore } from '../store/pinia';
import Dropdown from './home/Dropdown.vue';
import { state, toggleDropdown2 } from '../state';

const dropdownVisible2 = computed(() => state.dropdownVisible2);
const store = usePiniaStore();

const likedProductCount = computed(() => {
  return store.likedProducts.length;
});

const karzinaCount = computed(() => {
  return store.karzina.length;
});

function closeOverlay() {
  toggleDropdown2();  // Toggle the dropdown state to close it
}
</script>



<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(5px);
}

@media (max-width: 1015px) {
  #navbar {
    display: none;
  }
}

@media (max-width: 640px) {
  #navbar {
    display: none;
  }
}
</style>



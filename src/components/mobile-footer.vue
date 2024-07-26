<template>
    <div id="mobile" class="backdrop-blur-sm fixed w-full bottom-0 z-50 bg-white bg-opacity-60">
        <div class="grid grid-cols-5 px-2 py-2 border-t-[3px]">
            <router-link to="/" class="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="black" d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"/><path fill="black" d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"/></svg>
                <p class="text-[13px]">Home</p>
            </router-link>
            <router-link to="/catalog" class="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 6h4m-4 7h4m-4 8h19m-1.6-7.6L22 16m-1.3-7.15a5.85 5.85 0 1 0-11.7 0a5.85 5.85 0 0 0 11.7 0" color="black"/></svg>
                <p class="text-[13px]">Katalog</p>
            </router-link>
            <router-link to="/karzina" class="flex flex-col items-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="M7.5 7v-.5a4.5 4.5 0 0 1 9 0V7H19c.552 0 1 .449 1 1.007v12.001c0 1.1-.895 1.992-1.994 1.992H5.994A1.994 1.994 0 0 1 4 20.008v-12C4 7.45 4.445 7 5 7zM9 7h6v-.5a3 3 0 0 0-6 0zM7.5 7v4H9V7zM15 7v4h1.5V7z"/></svg>
                <p class="text-[13px]">Savat</p>
                <p v-if="karzinaCount > 0" class="bg-red-500 absolute bottom-2/1  left-1/2 w-[17px] h-[17px] flex items-center justify-center text-white rounded-[50%]">{{ karzinaCount }}</p>
            </router-link>
            <router-link to="/saved" class="flex flex-col items-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/></svg>
                <p class="text-[13px]">Saralangan</p>
                <p v-if="likedProductCount > 0" class="bg-red-500 absolute bottom-2/1  left-1/2 w-[17px] h-[17px] flex items-center justify-center text-white rounded-[50%]">{{ likedProductCount }}</p>
            </router-link>
            <router-link to="/" class="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.38em" height="1.5em" viewBox="0 0 448 512"><path fill="black" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-98.5-79.8-178.3-178.3-178.3z"/></svg>
                <p class="text-[13px]">Kabinet</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { usePiniaStore } from '../store/pinia';
const store = usePiniaStore();

const karzinaCount = computed(() => {
  console.log(store.karzina);
  return store.karzina.length;
});

const likedProductCount = computed(() => {
  return store.likedProducts.length;
});
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(5px);
}

@media (max-width: 840px) {
  #mobile {
    display: block;
  }
  #text {
    font-size: 30px;
  }
}

@media (max-width: 640px) {
  #mobile {
    display: block;
  }

}

@media (min-width: 1015px) {
  #mobile {
    display: none;
  }
}
</style>
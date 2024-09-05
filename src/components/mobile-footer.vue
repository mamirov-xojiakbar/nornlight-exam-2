<template>
  <div id="mobile" class="backdrop-blur-sm fixed w-full bottom-0 z-50 bg-white bg-opacity-60">
    <div class="grid grid-cols-5 px-2 py-2 border-t-[3px]">
      <router-link to="/" class="flex flex-col items-center">
        <svg v-if="isActiveRoute('/home')" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
          <path fill="black" d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"/>
          <path fill="black" d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
          <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"/>
          <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"/>
        </svg>
        <p class="text-[13px]">Home</p>
      </router-link>
      <router-link to="/catalog" class="flex flex-col items-center">
        <svg v-if="isActiveRoute('/catalog')" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M4 3.5a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 0 0 0-3zm4 14a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm7-9a5.5 5.5 0 0 1 4.803 8.182l1.258 1.257a1.5 1.5 0 0 1-2.122 2.122l-1.257-1.258A5.5 5.5 0 1 1 15 8.5m0 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-8-1a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3z"/></g></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M4 4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm-1 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m7-5a5 5 0 1 1 9.172 2.757l1.535 1.536a1 1 0 0 1-1.414 1.414l-1.536-1.535A5 5 0 0 1 10 14m5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></g></svg>
        <p class="text-[13px]">Katalog</p>
      </router-link>
      <router-link to="/karzina" class="flex flex-col items-center relative">
        <svg v-if="isActiveRoute('/karzina')" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <path fill="black" fill-rule="evenodd" d="M7.5 7v-.5a4.5 4.5 0 0 1 9 0V7H19c.552 0 1 .449 1 1.007v12.001c0 1.1-.895 1.992-1.994 1.992H5.994A1.994 1.994 0 0 1 4 20.008v-12C4 7.45 4.445 7 5 7zM9 7h6v-.5a3 3 0 0 0-6 0zM7.5 7v4H9V7zM15 7v4h1.5V7z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z"/></svg>
        <p class="text-[13px]">Savat</p>
        <p v-if="karzinaCount > 0" class="bg-red-500 absolute bottom-2/1  left-1/2 w-[17px] h-[17px] flex items-center justify-center text-white rounded-[50%]">{{ karzinaCount }}</p>
      </router-link>
      <router-link to="/saved" class="flex flex-col items-center relative">
        <svg v-if="isActiveRoute('/saved')" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
          <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/>
        </svg>
        <p class="text-[13px]">Saralangan</p>
        <p v-if="likedProductCount > 0" class="bg-red-500 absolute bottom-2/1  left-1/2 w-[17px] h-[17px] flex items-center justify-center text-white rounded-[50%]">{{ likedProductCount }}</p>
      </router-link>
      <router-link to="/profile" class="flex flex-col items-center">
        <svg v-if="isActiveRoute('/profile')" xmlns="http://www.w3.org/2000/svg" width="1.38em" height="1.5em" viewBox="0 0 448 512">
          <path fill="black" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-98.5-79.8-178.3-178.3-178.3z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.38em" height="1.5em" viewBox="0 0 448 512"><path fill="black" d="M304 128a80 80 0 1 0-160 0a80 80 0 1 0 160 0m-208 0a128 128 0 1 1 256 0a128 128 0 1 1-256 0M49.3 464h349.5c-8.9-63.3-63.3-112-129-112h-91.4c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3"/></svg>
        <p class="text-[13px]">Kabinet</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePiniaStore } from '../store/pinia';

const route = useRoute();
const store = usePiniaStore();

const karzinaCount = computed(() => {
  console.log(store.karzina);
  return store.karzina.length;
});

const likedProductCount = computed(() => {
  return store.likedProducts.length;
});

const isActiveRoute = (path) => {
  return route.path === path;
};
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

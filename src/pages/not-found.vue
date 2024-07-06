<template>
  <div class="flex h-screen items-center max-md:flex-col-reverse justify-center bg-no-repeat bg-cover " :style="{ backgroundImage: 'url(/404.jpg)' }">
    <router-link to="/home" class="font-mono font-semibold text-xl bg-k_yellow bg-opacity-55 duration-300 hover:bg-opacity-100 mt-[30%] px-4 py-2 rounded-md text-white">Go to home page</router-link>
    <h1 class="text-[#ff0] text-9xl font-medium font-mono md:hidden">404</h1>
  </div>
</template>


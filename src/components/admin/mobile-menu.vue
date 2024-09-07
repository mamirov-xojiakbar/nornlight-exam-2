<template>
    <div id="mobile" class="backdrop-blur-sm fixed w-full bottom-0 z-50 bg-white bg-opacity-60">
      <div class="flex justify-between px-2 py-2 border-t-[3px] gap-[5px]">
        <router-link to="/admin/create-product" class="flex flex-col items-center">
            <svg v-if="isActiveRoute('/admin/create-product')" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6H5v-4h4ZM20 3h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 6h-4V5h4Zm1 7h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M9 9H5V5h4Z"/></svg>
            <svg v-else class="opacity-60" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6H5v-4h4ZM20 3h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 6h-4V5h4Zm1 7h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M9 9H5V5h4Z"/></svg>
            <p class="text-[13px]">Create product </p>
        </router-link>

        <router-link to="/admin/create-category" class="flex flex-col items-center">
            <svg v-if="isActiveRoute('/admin/create-category')" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m0 12H4V6h5.17l2 2H20zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"/></svg>
            <svg v-else class="opacity-60" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m0 12H4V6h5.17l2 2H20zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"/></svg>
            <p class="text-[13px]">Create category</p>
        </router-link>

        <router-link to="/admin/manage-product" class="flex flex-col items-center relative">
            <svg v-if="isActiveRoute('/admin/manage-product')" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56"/><path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.36 1.36 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.36 1.36 0 0 1-.953.395H8.197a1.36 1.36 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086"/></g></svg>
            <svg v-else class="opacity-70" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56"/><path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.36 1.36 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.36 1.36 0 0 1-.953.395H8.197a1.36 1.36 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086"/></g></svg>
            <p class="text-[13px]">Manage product</p>
        </router-link>

        <router-link to="/admin/order" class="flex flex-col items-center relative">
            <svg v-if="isActiveRoute('/admin/order')" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><g fill="none" stroke="black" stroke-linejoin="round" stroke-width="4"><rect width="30" height="36" x="9" y="8" rx="2"/><path stroke-linecap="round" d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"/></g></svg> 
            <svg v-else class="opacity-70" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><g fill="none" stroke="black" stroke-linejoin="round" stroke-width="4"><rect width="30" height="36" x="9" y="8" rx="2"/><path stroke-linecap="round" d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"/></g></svg> 
            <p class="text-[13px]">Orders</p>
        </router-link>
      </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePiniaStore } from '../../store/pinia';

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
  
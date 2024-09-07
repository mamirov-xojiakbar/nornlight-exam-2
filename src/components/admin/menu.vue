<template>
    <div id="menu" class="p-[20px] pr-[50px] bg-[#454545] fixed h-screen text-white">
        <div class="flex gap-[12px] items-center mb-[40px]">
            <router-link to="/home">
                <img src="/nazad.png" alt="">
            </router-link>
            <p class="font-semibold text-[28px] leading-[38.25px]">Admin Dashboard</p>
        </div>
        <div>
            <router-link to="/admin/create-product" class="mb-[10px] flex items-center gap-[15px] [&.router-link-active]:bg-[#737373] pl-[10px] py-[8px] pr-[150px] rounded-[8px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6H5v-4h4ZM20 3h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 6h-4V5h4Zm1 7h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M9 9H5V5h4Z"/></svg>
                <p class="font-semibold text-[18px] leading-[24.59px]">Create product</p>
            </router-link>
            <router-link to="/admin/create-category" class="mb-[10px] flex items-center gap-[15px] [&.router-link-active]:bg-[#737373] pl-[10px] py-[8px] pr-[150px] rounded-[8px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m0 12H4V6h5.17l2 2H20zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"/></svg>
                <p class="font-semibold text-[18px] leading-[24.59px]">Create category</p>
            </router-link>
            <router-link to="/admin/manage-product" class="mb-[10px] flex items-center gap-[15px] [&.router-link-active]:bg-[#737373] pl-[10px] py-[8px] pr-[150px] rounded-[8px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56"/><path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.36 1.36 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.36 1.36 0 0 1-.953.395H8.197a1.36 1.36 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086"/></g></svg>
                <p class="font-semibold text-[18px] leading-[24.59px]">Manage product</p>
            </router-link>
            <router-link to="/admin/order" class="flex items-center gap-[15px] [&.router-link-active]:bg-[#737373] pl-[10px] py-[8px] pr-[150px] rounded-[8px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><g fill="none" stroke="white" stroke-linejoin="round" stroke-width="4"><rect width="30" height="36" x="9" y="8" rx="2"/><path stroke-linecap="round" d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"/></g></svg> 
                <p class="font-semibold text-[18px] leading-[24.59px]">Orders</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@media (max-width: 1015px) {
  #menu {
    display: none;
  }
}

@media (max-width: 640px) {
  #menu {
    display: none;
  }
}
</style>
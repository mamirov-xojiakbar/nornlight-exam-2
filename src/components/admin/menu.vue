<template>
    <div class="p-[20px] pr-[50px] bg-[#454545] fixed h-screen text-white">
        <div class="flex gap-[12px] items-center mb-[40px]">
            <router-link to="/home">
                <img src="/nazad.png" alt="">
            </router-link>
            <p class="font-semibold text-[28px] leading-[38.25px]">Admin Dashboard</p>
        </div>
        <div>
            <router-link to="/admin/create-product" class="mb-[10px] flex items-center gap-[15px] [&.router-link-active]:bg-[#737373] pl-[12px] py-[8px] pr-[150px] rounded-[8px]">
                <img src="/admin-2.png" alt="">
                <p class="font-semibold text-[18px] leading-[24.59px]">Create product</p>
            </router-link>
            <router-link to="/admin/manage-product" class="mb-[10px] flex items-center gap-[15px] [&.router-link-active]:bg-[#737373] pl-[12px] py-[8px] pr-[150px] rounded-[8px]">
                <img src="/admin-1.png" alt="">
                <p class="font-semibold text-[18px] leading-[24.59px]">Manage product</p>
            </router-link>
            <router-link to="/admin/order" class="flex items-center gap-[15px] [&.router-link-active]:bg-[#737373] pl-[12px] py-[8px] pr-[150px] rounded-[8px]">
                <img src="/intro-1.png" alt="" class="w-[25px]">
                <p class="font-semibold text-[18px] leading-[24.59px]">Orders</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
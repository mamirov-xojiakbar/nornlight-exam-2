<template>
    <div class="bg-gray-100">
        <div class="container grid md:grid-cols-4 pt-[79px] pb-[80px] gap-[30px] md:gap-[100px]">
            <div class="flex flex-col">
                <img src="/logo.png" alt="Logo img" class="mb-[50px] w-[235px]">
                <p class="font-semibold text-[20px] leading-[32.78px] mb-[35px]">8 (800) 890-46-56</p>
                <img src="/footer.png" alt="Pay" class="w-[222px] mb-[35px]">
                <p class="font-semibold text-[20px] md:text-[16px] leading-[21.86px] opacity-[50%] mb-[30px]">Политика конфидециальности</p>
                <p class="font-semibold text-[20px] md:text-[16px] leading-[21.86px] opacity-[50%] mb-[35px]">Пользовательское соглашение</p>
                <div class="flex gap-3">
                    <img v-for="item, i in 3" :key="i" src="/footer-2.png" alt="VK img">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
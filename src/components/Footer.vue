<template>
    <div class="bg-[#F2F2F2]">
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
            
            <div class="flex flex-col">
                <p class="font-bold text-[24px] leading-[32.78px] text-[#454545] mb-[32px]">Покупателям</p>
                <router-link to="#" class="opacity-[50%] mb-[27px]">О компании</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Доставка и оплата</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Возврат</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Гарантии</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Контакты</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Блог</router-link>
            </div>

            <div class="flex flex-col">
                <p class="font-bold text-[24px] leading-[32.78px] text-[#454545] mb-[32px]">Товары</p>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Люстры</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Светильники</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Бра</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Торшеры</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Комплектуюшие</router-link>
                <router-link to="#" class="opacity-[50%] md:mb-[27px]">Настольные лампы</router-link>
            </div>

            <div class="flex flex-col md:mt-[60px]">
                <router-link to="#" class="opacity-[50%] mb-[27px]">Споты</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Трековые светильники</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Уличные светильники</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Технические светильники</router-link>
                <router-link to="#" class="opacity-[50%] mb-[27px]">Светодиодные ленты</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
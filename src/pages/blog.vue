<template>
    <div class="md:mt-[200px] mt-[140px]">
        <p class="container font-bold text-[64px] leading-[70.4px] mb-[60px]">Блог</p>
        <Blog v-for="item in 2"/>
    </div>
</template>

<script setup>
import Blog from '../components/home/blog.vue';


</script>

<style lang="scss" scoped>

</style>
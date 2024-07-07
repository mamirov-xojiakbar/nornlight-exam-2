<template>
  <div>
    <Menu />
    <div class="ml-[400px] px-[32px] py-[22px]">
        <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Menu from '../components/admin/menu.vue';
</script>

<style>
</style>

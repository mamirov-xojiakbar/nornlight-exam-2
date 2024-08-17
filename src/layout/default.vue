<template>
  <div class="mt-[90px]">
    <SearchMobile />
    <Navbar />
    <router-view></router-view>
    <Footer v-if="!isKatalogPage" />
    <SrcollTop />
    <MobileFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '../components/Footer.vue';
import MobileFooter from '../components/mobile-footer.vue';
import Navbar from '../components/Navbar.vue';
import SrcollTop from '../components/srcollTop.vue';
import SearchMobile from '../components/Search-mobile.vue';

// Get the current route
const route = useRoute();

// Determine if the current route is the "katalog" page
const isKatalogPage = computed(() => route.name === 'catalog');
</script>

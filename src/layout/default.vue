<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
    <SrcollTop />
    <MobileFooter />
  </div>
</template>

<script setup>
import Footer from '../components/Footer.vue';
import MobileFooter from '../components/mobile-footer.vue';
import Navbar from '../components/Navbar.vue';
import SrcollTop from '../components/srcollTop.vue';
</script>

<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <div id="top" class="fixed w-full bottom-5 right-7 md:flex justify-end hidden">
    <div class="relative">
      <button
        @click="scrollToTop"
        :class="{ 'scale-0': isNearTop, 'scale-100': !isNearTop }"
        class="transform transition-transform duration-500 rounded-full w-[50px] h-[50px] text-[30px] flex items-center justify-center bg-gray-400 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15l7-7l7 7"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

const scrollTop = ref(0);
const threshold = 200; 

const handleScroll = () => {
  scrollTop.value = window.scrollY || document.documentElement.scrollTop;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const isNearTop = computed(() => scrollTop.value <= threshold);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initialize scrollTop on mount
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
@media (max-width: 1015px) {
  #top {
    display: none;
  }
}

@media (max-width: 640px) {
  #top {
    display: none
  }
}
</style>
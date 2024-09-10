<template>
  <div>
    <Menu />
    <MobileMenu />
    <div id="admin" class="ml-[450px] px-[32px]">
        <router-view></router-view>
    </div>
    <div id="admin2" class="px-[15px] mb-[100px]">
        <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Menu from '../components/admin/menu.vue';
import MobileMenu from '../components/admin/mobile-menu.vue';
</script>

<style scoped>
@media (max-width: 1015px) {
  #admin {
    display: none;
  }
}

@media (max-width: 640px) {
  #admin {
    display: none;
  }
  #admin2 {
    display: block;
  }
}

@media (max-width: 840px) {
#admin2 {
    display: block;
  }
}

@media (min-width: 1015px) {
#admin2 {
    display: none;
}
}
</style>

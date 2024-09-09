<template>
    <div id="search" class="hidden px-[10px] py-[10px] mt-[20px] fixed top-[-20px] w-full z-50  bg-white ">
        <div class="border flex py-[10px] px-[10px] rounded-[20px] items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 48 48"><g fill="none" stroke="black" stroke-linejoin="round" stroke-width="4"><path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"/></g></svg>
            <input type="text" class="w-full text-[15px]" placeholder="Mahsulot va turkumlar izlash">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@media (max-width: 1015px) {
  #search {
    display: block;
  }
}
</style>
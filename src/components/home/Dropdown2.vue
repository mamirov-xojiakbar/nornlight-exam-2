<template>
  <div v-if="dropdownVisible3" class="">
    <div class="">
      <!-- Left side with category names -->
      <div class="w-full h-[690px] bg-gray-300">
        <div class="w-full h-full py-1">
          <div v-for="(category, index) in categories" :key="index" class="flex flex-col gap-5 w-full">
            <div
              class="flex items-center font-medium py-[10px] px-4 text-black cursor-pointer max-md:text-sm"
              @click="selectCategory(index)"
              :class="{ 'text-blue-500 w-full bg-white': selectedCategory === index }"
            >
              <i :class="category.icon"></i>
              <p class="ml-2">{{ category.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Right side with sub-categories and items -->
      <!-- <div class="md:col-span-4 bg-white md:grid grid-cols-4 gap-5 overflow-auto h-[400px] px-[33px] py-[15px]">
        <div v-if="selectedCategory !== null" class="md:grid grid-cols-4 gap-5 col-span-4">
          <div v-for="(type, typeIndex) in categories[selectedCategory].type" :key="typeIndex" class="flex flex-col gap-5">
            <p class="font-bold max-md:text-sm text-black">{{ type }}</p>
            <div>
              <p class="text-lg font-normal text-[#666] max-md:text-sm border-b-[0.5px] border-b-black md:border-none" v-for="(data, dataIndex) in categories[selectedCategory].typeOfData[typeIndex]" :key="dataIndex">
                {{ data }}
              </p>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import categoriesData from '../../JSON/data.json';
import { state } from '../../state';

const categories = reactive(categoriesData.categories.map((category, index) => ({
  ...category,
  icon: `fa fa-icon-${index}` // Replace with actual icon class names
})));
const selectedCategory = ref(0);
const dropdownVisible3 = computed(() => state.dropdownVisible3);

const selectCategory = (index) => {
  selectedCategory.value = index;
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.text-orange-500 {
  color: #ffa500;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgb(173, 173, 173);
  border-radius: 10px;
}
</style>

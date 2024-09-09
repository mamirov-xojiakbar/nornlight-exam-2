<template>
  <div
    v-if="dropdownVisible2"
    class="absolute text-start md:top-[110px] top-[-400px] left-0 z-40 duration-300 h-full w-full scale-100 hidden md:block"
  >
    <div class="bg-transparent h-[400px] container mx-auto">
      <div class="grid md:grid-cols-5 grid-cols-2 overflow-auto bg-white border-b-[3px] border-b-gray-400 shadow-lg rounded-lg">
        <!-- Left side with category names -->
        <div class="w-full h-[400px] overflow-auto bg-gray-100 rounded-l-lg border-r-[2px] border-gray-300">
          <div class="w-full h-full py-1 px-4">
            <div
              v-for="(category, index) in categories"
              :key="index"
              class="w-full mb-2"
            >
              <p
                class="font-semibold py-[10px] px-4 text-black cursor-pointer text-[16px] transition-all duration-300 hover:bg-white hover:pl-6 hover:text-blue-500"
                @click="selectCategory(index)"
                :class="{
                  'text-blue-500 bg-white shadow-sm pl-6': selectedCategory === index,
                }"
              >
                {{ category.name }}
              </p>
            </div>
          </div>
        </div>
        <!-- Right side with sub-categories and items -->
        <div
          class="md:col-span-4 bg-white md:grid grid-cols-4 gap-5 overflow-auto h-[400px] px-[33px] py-[15px]"
        >
          <div v-if="selectedCategory !== null" class="grid grid-cols-4 gap-8 col-span-4">
            <div
              v-for="(type, typeIndex) in categories[selectedCategory].type"
              :key="typeIndex"
              class="flex flex-col gap-3"
            >
              <p class="font-bold text-[17px] text-black">{{ type }}</p>
              <div>
                <p
                  class="text-md font-normal text-gray-400 hover:text-black transition-all duration-300 cursor-pointer"
                  v-for="(data, dataIndex) in categories[selectedCategory].typeOfData[typeIndex]"
                  :key="dataIndex"
                >
                  {{ data }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import categoriesData from '../../JSON/data.json';
import { state } from '../../state';

const categories = reactive(categoriesData.categories);
const selectedCategory = ref(0);
const dropdownVisible2 = computed(() => state.dropdownVisible2);

const selectCategory = (index) => {
  selectedCategory.value = index;
};
</script>

<style scoped>
/* Smooth scrolling for the dropdown */
.container {
  max-width: 1200px;
}

/* Category name hover effect */
p {
  transition: all 0.3s ease;
}

.cursor-pointer {
  cursor: pointer;
}

.text-orange-500 {
  color: #ffa500;
}

.shadow-lg {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c0c0c0;
  border-radius: 10px;
}

.hover\:pl-6:hover {
  padding-left: 1.5rem;
}

.hover\:text-blue-500:hover {
  color: #1e40af;
}

.hover\:text-black:hover {
  color: #000;
}
</style>

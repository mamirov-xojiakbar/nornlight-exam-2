<template>
  <div
    v-if="dropdownVisible2"
    class="absolute text-start md:top-[110px] top-[-400px] left-0 z-40 duration-300 h-full w-full scale-100 "
  >
    <div class="md:container bg-transparent h-[400px] ">
    <div class="grid md:grid-cols-5 grid-cols-2 overflow-auto bg-white border-b-[3px] border-b-gray-400">
        <!-- Left side with category names -->
        <div class="w-full h-[400px] overflow-auto bg-gray-300">
          <div class="w-full h-full py-1">
            <div
              v-for="(category, index) in categories"
              :key="index"
              class="flex flex-col gap-5 w-full"
            >
              <p
                class="font-medium py-[10px] px-4 text-black cursor-pointer max-md:text-sm"
                @click="selectCategory(index)"
                :class="{
                  'text-blue-500 w-full bg-white': selectedCategory === index,
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
          <div v-if="selectedCategory !== null" class="md:grid grid-cols-4 gap-5 col-span-4">
            <div
              v-for="(type, typeIndex) in categories[selectedCategory].type"
              :key="typeIndex"
              class="flex flex-col gap-5"
            >
              <p class="font-bold max-md:text-sm text-black">{{ type }}</p>
              <div>
                <p
                  class="text-lg font-normal text-[#666] max-md:text-sm border-b-[0.5px] border-b-black md:border-none"
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
.cursor-pointer {
  cursor: pointer;
}
.text-orange-500 {
  color: #ffa500;
}

::-webkit-scrollbar {
  width: 5px;
  
}

/* Track */
::-webkit-scrollbar-track {
  /* background: #898989;  */
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(173, 173, 173); 
  border-radius: 10px;
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: rgb(97, 108, 232); 
} */
</style>

<template>
  <div id="catalog" class="h-full md:hidden mb-[70px]">
    <div v-for="(category, index) in categories" :key="index" class="w-full px-3">
      <p
        class="font-medium py-[10px] px-4 text-black cursor-pointer max-md:text-sm border-b flex justify-between"
        @click="toggleCategory(index)"
      >
        {{ category.name }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
          :class="{ 'rotate-90': isCategorySelected(index) }"
        >
          <path fill="black" d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4"/>
        </svg>
      </p>
      <div v-if="selectedCategory === index" class="md:col-span-4 bg-white md:grid grid-cols-4 gap-5 overflow-auto h-[400px] px-[33px] py-[15px]">
        <div class="">
          <div
            v-for="(type, typeIndex) in categories[selectedCategory].type"
            :key="typeIndex"
            class="flex flex-col mb-[15px]"
          >
            <p class="font-bold max-md:text-sm text-black mb-[10px]">{{ type }}</p>
            <div class="">
              <p
                class="text-lg font-normal text-[#666] max-md:text-sm border-b-[0.5px] pb-[5px]"
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
</template>

<script setup>
import { reactive, ref } from 'vue'
import categoriesData from '../JSON/data.json'

const categories = reactive(categoriesData.categories)
const selectedCategory = ref(null)

const toggleCategory = (index) => {
  if (selectedCategory.value === index) {
    selectedCategory.value = null
  } else {
    selectedCategory.value = index
  }
}

const isCategorySelected = (index) => {
  return selectedCategory.value === index
}
</script>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
  transition: transform 0.3s;
}

@media (max-width: 1015px) {
  #catalog {
    display: block;
  }
}

@media (max-width: 640px) {
  #catalog {
    display: block
  }
}
</style>

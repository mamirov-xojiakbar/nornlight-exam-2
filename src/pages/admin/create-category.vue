<template>
  <div
    @click="isDropdownOpen = false"
    v-if="isDropdownOpen"
    class="absolute top-0 left-0 z-10 w-screen h-screen bg-transparent"
  ></div>

  <div class="grid grid-cols-1 gap-5">
    <!-- Create Category Form -->
    <div class="col-span-9 bg-white shadow-lg rounded-lg p-8 mt-16">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">
        Create New Category
      </h2>
      <form @submit.prevent="submitCategory">
        <!-- Parent Category Selection -->
        <div class="mb-5">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Parent Category</label
          >
          <div class="relative">
            <button
              @click="toggleDropdown"
              class="shadow-sm border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-all duration-300"
            >
              {{
                selectedParentCategory
                  ? categoryNameFun(categories)
                  : 'No Parent (Root Category)'
              }}
            </button>
            <div
              v-if="isDropdownOpen"
              class="absolute z-20 w-full bg-white shadow-md max-h-48 overflow-y-auto"
            >
              <div
                v-for="(category, index) in categories"
                :key="index"
                @click="selectCategory(category.id)"
                class="py-2 px-4 hover:bg-gray-200 cursor-pointer"
              >
                {{ category.name }}
              </div>
            </div>
          </div>
        </div>

        <!-- Category Name (UZ) -->
        <div class="mb-5">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Category Name (UZ)</label
          >
          <input
            type="text"
            v-model="categoryName.uz"
            placeholder="Enter category name in Uzbek"
            class="shadow-sm border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-all duration-300"
            required
          />
        </div>

        
        <!-- Category Name (EN) -->
        <div class="mb-5">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Category Name (EN)</label
          >
          <input
            type="text"
            v-model="categoryName.en"
            placeholder="Enter category name in English"
            class="shadow-sm border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-all duration-300"
            required
          />
        </div>

        <!-- Category Name (RU) -->
        <div class="mb-5">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Category Name (RU)</label
          >
          <input
            type="text"
            v-model="categoryName.ru"
            placeholder="Enter category name in Russian"
            class="shadow-sm border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-all duration-300"
            required
          />
        </div>

        <!-- Submit Button -->
        <div class="flex justify-between items-center">
          <button
            type="submit"
            class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
          >
            Create Category
          </button>
          <button
            type="button"
            @click="resetForm"
            class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
          >
            Reset
          </button>
        </div>
      </form>
      <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const categoryName = ref({
  uz: '',
  en: '',
  ru: ''
})

const selectedParentCategory = ref(null)
const categories = ref([])
const hierarchicalCategories = ref([])
const errorMessage = ref('')

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const categoryNameFun = (cate) => {
  for (const element of cate) {
    if (element.id == selectedParentCategory.value) {
      return element.name
    }
  }
}

const selectCategory = (index) => {
  selectedParentCategory.value = index
  isDropdownOpen.value = false
}

// Fetch categories from API when the component mounts
onMounted(async () => {
  await fetchCategories()
})

// Fetch categories function
const fetchCategories = async () => {
  try {
    const token = getTokenFromLocalStorage()
    setAuthorizationHeader(token)

    const lang = 'uz' // Language parameter
    const response = await axios.get(`/api/categories/fetch?lang=${lang}`)
    categories.value = response.data
    // console.log('Fetched categories:', categories.value); // Log fetched categories
    // processCategories();
  } catch (error) {
    console.error('Error fetching categories:', error)
    errorMessage.value = 'Failed to fetch categories. Please check your access.'
  }
}

// Get access token from local storage
const getTokenFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return user?.access_token || null
}

// Set authorization header for Axios requests
const setAuthorizationHeader = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    throw new Error('Access token not found')
  }
}


const log = () => {
  console.log(selectedParentCategory.value)
}

// Submit category to API
const submitCategory = async () => {
  console.log('select', selectedParentCategory.value)
  const newCategory = {
    name: {
      uz: categoryName.value.uz,
      en: categoryName.value.en,
      ru: categoryName.value.ru
    },
    parentId: selectedParentCategory.value
  }

  try {
    const token = getTokenFromLocalStorage()
    setAuthorizationHeader(token)

    await axios.post('/api/categories/add', newCategory)
    console.log('Category created successfully:', newCategory)
    resetForm()
  } catch (error) {
    console.error('Error creating category:', error)
    errorMessage.value = 'Error creating category. Please try again.'
  }
}

// Reset the form
const resetForm = () => {
  categoryName.value = { uz: '', en: '', ru: '' }
  selectedParentCategory.value = null
  errorMessage.value = ''
}
</script>

<style scoped>
</style>

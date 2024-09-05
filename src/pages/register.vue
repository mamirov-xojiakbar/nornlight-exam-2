<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 px-[15px]">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-center mb-6">Register</h2>
        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name
            </label>
            <input v-model="name" type="text" id="name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[3px] focus:border-gray-300" required>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input v-model="email" type="email" id="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[3px] focus:border-gray-300" required>
          </div>
          <div class="mb-6 relative">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input v-model="password" :type="showPassword ? 'text' : 'password'" id="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[3px] focus:border-gray-300" required>
            <span @click="togglePasswordVisibility" class="absolute inset-y-0 right-3 flex items-center cursor-pointer top-6">
              <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="#6c757d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7s-8.268-2.943-9.542-7"/></g></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="#6c757d" stroke-linecap="round" stroke-width="2"><path stroke-linejoin="round" d="M10.73 5.073A11 11 0 0 1 12 5c4.664 0 8.4 2.903 10 7a11.6 11.6 0 0 1-1.555 2.788M6.52 6.519C4.48 7.764 2.9 9.693 2 12c1.6 4.097 5.336 7 10 7a10.44 10.44 0 0 0 5.48-1.52m-7.6-7.6a3 3 0 1 0 4.243 4.243"/><path d="m4 4l16 16"/></g></svg>
            </span>
          </div>
          <div class="flex items-center justify-between mb-4 gap-4">
            <button type="submit" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
            <router-link to="/login" class="inline-block align-baseline font-bold text-sm text-gray-400 hover:text-gray-600">
              Already have an account? Login
            </router-link>
          </div>
        </form>
      </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();
const showPassword = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const handleRegister = () => {
// Registration logic here
console.log('Name:', name.value);
console.log('Email:', email.value);
console.log('Password:', password.value);
router.push('/login'); // Redirect to login after registration
};
</script>

<style scoped>
/* Optional: Add any custom styles here */
</style>
  
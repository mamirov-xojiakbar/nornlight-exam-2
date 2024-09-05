<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 px-[15px]">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-center mb-6">Payment</h2>
        <form @submit.prevent="handlePayment">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="card-number">
              Card Number
            </label>
            <input 
              v-model="cardNumber" 
              type="text" 
              id="card-number" 
              placeholder="1234 5678 9012 3456" 
              @input="formatCardNumber" 
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
              required
            >
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="expiry-date">
              Expiry Date
            </label>
            <input 
              v-model="expiryDate" 
              type="text" 
              id="expiry-date" 
              placeholder="MM/YY" 
              @input="formatExpiryDate" 
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
              required
            >
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="cvv">
              CVV
            </label>
            <input 
              v-model="cvv" 
              type="text" 
              id="cvv" 
              placeholder="123" 
              @input="formatCVV" 
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
              required
            >
          </div>
          <div class="bg-gray-200 rounded-[5px] p-2 my-[20px]">
              <p class="font-bold text-[17px] text-gray-600">EUR 10.99/month</p>
            </div>
            <p class="text-[13px] opacity-[80%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae animi quae ducimus eos ab nihil architecto consequuntur autem, illum voluptas.</p>
            <div class="flex items-center justify-center mt-4">
                <button type="submit" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-9 rounded focus:outline-none focus:shadow-outline">
                    Pay
                </button>
            </div>
        </form>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const cardNumber = ref('');
const expiryDate = ref('');
const cvv = ref('');
const router = useRouter();

const formatCardNumber = () => {
cardNumber.value = cardNumber.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
};

const formatExpiryDate = () => {
expiryDate.value = expiryDate.value.replace(/\D/g, '').replace(/^(\d{2})(\d{0,2})/, '$1/$2').slice(0, 5);
};

const formatCVV = () => {
cvv.value = cvv.value.replace(/\D/g, '').slice(0, 3);
};

const handlePayment = () => {
// To'lovni amalga oshirish logikasi bu yerda bo'ladi
console.log('Card Number:', cardNumber.value);
console.log('Expiry Date:', expiryDate.value);
console.log('CVV:', cvv.value);

// To'lov muvaffaqiyatli amalga oshirilganda ro'yxatdan o'tish sahifasiga yo'naltirish
router.push('/register');
};
</script>

<style scoped>
/* Optional: Add any custom styles here */
</style>
  
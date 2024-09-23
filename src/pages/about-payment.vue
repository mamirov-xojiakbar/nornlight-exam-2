<!-- benefits.vue -->
<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h2 class="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p class="text-gray-700 mb-4">Discover the top reasons to shop with us:</p>
        <ul class="text-left mb-8 list-disc list-inside text-gray-600">
          <li>High-quality Chinese products at affordable prices</li>
          <li>Fast and reliable shipping directly from China</li>
          <li>Secure payment options with multiple payment methods</li>
          <li>Customer support available 24/7 to assist with your needs</li>
        </ul>
        <div class="bg-gray-200 rounded-lg p-4 mb-6">
          <h3 class="text-xl font-bold text-gray-700 mb-2">What happens after payment?</h3>
          <p class="text-gray-600">Once your payment is confirmed, you will receive:</p>
          <ul class="text-left list-disc list-inside text-gray-600">
            <li>A confirmation email with your order details</li>
            <li>Tracking information for your shipment</li>
            <li>Exclusive access to upcoming deals and discounts</li>
          </ul>
        </div>
        <router-link to="/payment" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
          Proceed to Payment
        </router-link>
      </div>
    </div>
</template>

<script setup>
</script>

<style scoped>

</style>
  
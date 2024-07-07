<template>
  <div class="min-h-screen">
    <p class="font-medium text-[28px] leading-[30.8px] mb-[33px] text-center text-gray-800">Orders</p>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <li v-for="order, i in orders" :key="i" class="bg-white p-6 rounded-lg shadow-md">
        <p class="font-semibold text-lg mb-2">Заказ ID: {{ i }}</p>
        <p class="text-blue-400 mb-1"><span class="text-black font-medium">ФИО:</span> {{ order.orderInfo.fio }}</p>
        <p class="text-blue-400 mb-1"><span class="text-black font-medium">Телефон:</span> {{ order.orderInfo.phone }}</p>
        <p class="text-blue-400 mb-1"><span class="text-black font-medium">Электронная почта:</span> {{ order.orderInfo.email }}</p>
        <p class="text-blue-400 mb-1"><span class="text-black font-medium">Адрес:</span> {{ order.orderInfo.address }}</p>
        <p class="text-blue-400 mb-3"><span class="text-black font-medium">Комментарий:</span> {{ order.orderInfo.comment }}</p>
        <h3 class="font-semibold text-lg mb-2">Товары:</h3>
        <ol class="list-disc list-inside space-y-2 ">
          <li v-for="product in order.products" :key="product.id" class="text-gray-700">
            <p>{{ product.title }} - {{ product.quantity }} шт.</p>
            <p>Цена: {{ product.unitPrice }}</p>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { usePiniaStore } from '../../store/pinia';
import { computed } from 'vue';

const store = usePiniaStore();

const orders = computed(() => store.orders);
</script>

<style scoped>
</style>

<template>
    <div class="checkout-container mx-auto my-10 p-5 bg-white mt-[120px]">
      <!-- Main Checkout Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Shipping and Payment Form -->
        <div class="lg:col-span-2">
          <!-- Shipping Information -->
          <div class="p-5 border rounded-lg mb-6">
            <h2 class="font-bold text-xl mb-4">Yetkazib berish ma'lumotlari</h2>
            <form>
              <!-- Shipping Fields -->
              <input type="text" class="form-input mb-4" placeholder="To'liq ism-familiya" />
              <input type="text" class="form-input mb-4" placeholder="Manzil" />
              <input type="text" class="form-input mb-4" placeholder="Shahar" />
              <input type="text" class="form-input mb-4" placeholder="Viloyat" />
              <input type="text" class="form-input mb-4" placeholder="Pochta indeksi" />
              <input type="text" class="form-input mb-4" placeholder="Telefon raqami" />

              <!-- Delivery Method -->
              <h2 class="font-bold text-xl mb-4">Yetkazib berish usuli</h2>
              <div class="mb-4">
                <label class="block mb-2">
                  <input type="radio" name="delivery" value="standard" /> Standart yetkazib berish (5-7 kun, $5.00)
                </label>
                <label class="block">
                  <input type="radio" name="delivery" value="express" /> Tezkor yetkazib berish (2-3 kun, $10.00)
                </label>
              </div>
            </form>
          </div>
  
          <!-- Payment Information -->
          <div class="p-5 border rounded-lg">
            <h2 class="font-bold text-xl mb-4">To'lov ma'lumotlari</h2>
            <form>
              <input type="text" class="form-input mb-4" placeholder="Karta raqami" />
              <input type="text" class="form-input mb-4" placeholder="Amal qilish muddati (MM/YY)" />
              <input type="text" class="form-input mb-4" placeholder="CVV" />
              <input type="text" class="form-input mb-4" placeholder="Kupon kodi" />
            </form>
            <label class="block mt-4">
              <input type="checkbox" class="mr-2" /> Karta ma'lumotlarini saqlash
            </label>
          </div>
        </div>
  
        <!-- Order Summary -->
        <div class="bg-gray-50 p-5 rounded-lg sticky top-[120px] h-fit">
          <h2 class="font-bold text-xl mb-4">Buyurtma xulosasi</h2>
          <div class="flex justify-between mb-2">
            <span>Mahsulot narxi</span>
            <span>$50.00</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Yetkazib berish</span>
            <span>$5.00</span>
          </div>
          <hr class="my-2" />
          <div class="flex justify-between font-bold text-lg">
            <span>Jami</span>
            <span>$55.00</span>
          </div>
          <button class="btn-primary w-full mt-5 ">Buyurtma berish</button>
        </div>
      </div>
    </div>
</template>

<script setup>
</script>
  
<style scoped>
.checkout-container {
  max-width: 1200px;
}
.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.step {
  background-color: #eee;
  padding: 10px;
  border-radius: 5px;
  flex: 1;
  text-align: center;
  margin-right: 5px;
}
.btn-primary {
  background-color: gray;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
}
</style>

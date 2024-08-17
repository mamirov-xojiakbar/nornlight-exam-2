<template>
  <div id="container" class="mt-[140px] container">
    <div class="flex">
      <p class="font-bold text-[20px] md:text-[30px] md:leading-[70.4px] mb-[34px]">Корзина</p>
      <p class="bg-red-500 w-[20px] h-[20px] flex items-center justify-center text-white rounded-[50%] ml-4">{{ karzinaCount }}</p>
    </div>

    <div>
      <div v-if="getKarzinaProducts.length === 0" class="text-center mt-4 mb-[100px]">
        <p class="text-[20px] font-bold mb-[20px]">Savatda hozircha mahsulot yoʻq</p>

        <router-link to="/" class="bg-gray-600 text-white px-[40px] py-[10px] rounded-[10px]">Bosh sahifa</router-link>
      </div>

      <div v-else class="mb-[93px] flex gap-5">
        <!-- Desktop -->
        <div id="k1" class="bg-[#F2F2F2] rounded-[20px] px-[46px] py-[25px] w-[73%] h-full">
          <div v-for="product in getKarzinaProducts" :key="product.id" class="md:flex items-start pb-[20px] mt-[33px] border-b justify-between">
            <div class="flex w-[60%]">
              <img :src="product.img" alt="Product Image" class="md:w-[80px] md:h-[110px] w-[48px] h-[48px] mr-[37px] object-cover">
              <div>
                <p class="font-medium text-[14px] mb-[10px] md:mb-[20px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, modi.</p>
                <p class="font-bold text-[18px] leading-[22px] opacity-[80%]">${{ (product.unitPrice * product.quantity).toFixed(2) }}</p>
              </div>
            </div>
            
            <div class="flex items-center mt-0 border rounded-[10px] px-5">
              <button @click="" class="font-medium text-[24px] leading-[32.78px]">-</button>
              <p class="font-medium text-[16px] leading-[21px] py-[15px] px-[27px]">{{ count }}</p>
              <button @click="" class="font-medium text-[20px] leading-[27px]">+</button>
            </div>
            
            
            <button @click="remove(product.id)" class="flex items-center opacity-[50%] hover:opacity-[100%] duration-150 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#454545" d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07L4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929zM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m.28-6H9.72l-.333 1h5.226z"/></g></svg>
              <p class="font-bold">Delete</p>
            </button>
          </div>
        </div>

        <div id="k2"class="bg-[#F2F2F2] px-[48px] py-[31px] rounded-[20px] sticky top-[130px] h-full">
          <p class="font-bold text-[22px] leading-[35.2px] mb-[10px]">Jami summa:</p>
          <p class="font-bold text-[20px] leading-[26.4px] mb-[28px] text-[#454545]">{{ totalPrice }}₽</p>
          <router-link to="/create-order" class=" bg-[#454545] text-white px-[35px] py-[14px] rounded-[100px]">Rasmiylashtrish</router-link>  
        </div>
        <!-- End desktop -->
 

        <!-- Mobile -->
        <div id="mobile" class="bg-[#F2F2F2] rounded-[20px] px-[36px] py-[25px] w-full h-full hidden">
          <div v-for="product in getKarzinaProducts" :key="product.id" class="items-start pb-[20px] mt-[33px] border-b justify-between">
            <div class="flex">
              <img :src="product.img" alt="Product Image" class="w-[60px] h-[70px] mr-[17px] object-cover">
              <div>
                <p class="font-medium text-[12px] mb-[10px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, modi.</p>
                <p class="font-bold text-[15px] leading-[22px] opacity-[80%]">${{ (product.unitPrice * product.quantity).toFixed(2) }}</p>
              </div>
            </div>
            
            <div class="flex justify-between items-center mt-[20px]">
              <div class="flex items-center border rounded-[10px] px-5 w-[130px]">
                <button @click="" class="font-medium text-[24px] leading-[32.78px]">-</button>
                <p class="font-medium text-[16px] leading-[21px] py-[12px] px-[27px]">{{ count }}</p>
                <button @click="" class="font-medium text-[20px] leading-[27px]">+</button>
              </div>

              <button @click="remove(product.id)" class="flex items-center opacity-[50%] hover:opacity-[100%] duration-150 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#454545" d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07L4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929zM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m.28-6H9.72l-.333 1h5.226z"/></g></svg>
                <p class="font-bold">Delete</p>
              </button>
            </div>
            
            
          </div>
        </div>

        <div id="mobile2" class="bg-gray-300 px-[20px] py-[11px] fixed bottom-[62px] left-0  w-full justify-between z-50 hidden">
          <div>
            <p class="font-bold text-[17px] mb-[5px]">Jami summa:</p>
            <p class="font-bold text-[18px] text-[#454545]">{{ totalPrice }}₽</p>
          </div>
          <router-link to="/create-order" class=" bg-[#454545] text-white px-[20px] h-[40px] rounded-[5px] text-[15px]">Rasmiylashtrish</router-link>  
        </div>
        <!-- End mobile -->
      </div>
    </div>

    <OfferedProducts />
  </div>
</template>


<script setup>
import OfferedProducts from '../components/home/offered-products.vue';
import { usePiniaStore } from '../store/pinia';
import { computed, ref } from 'vue';

const count = ref(0)

const store = usePiniaStore();

const fullName = ref('');
const phone = ref('');
const email = ref('');
const adress = ref('')
const comment = ref('')

const karzinaCount = computed(() => {
  return store.karzina.length;
});

const getKarzinaProducts = computed(() => {
  return store.getKarzinaProducts;
});

const totalProductsPrice = computed(() => {
  return getKarzinaProducts.value.reduce((total, product) => {
    return total + (product.unitPrice * product.quantity);
  }, 0).toFixed(2);
});

const totalPrice = computed(() => {
  return (parseFloat(totalProductsPrice.value) + 580).toFixed(2);
});




const remove = (productId) => {
  store.removeFromKarzina(productId);
};

const buy = () => {
  const orderInfo = {
    fio: fullName.value,
    phone: phone.value,
    email: email.value,
    address: adress.value,
    comment: comment.value,
  };
  store.addOrder({
    orderInfo,
    products: getKarzinaProducts.value.map(product => ({
      id: product.id,
      title: product.title,
      quantity: product.quantity,
      unitPrice: product.unitPrice,
    })),
  });
  store.clearKarzina(); // Clear cart after placing order
};
</script>

<style scoped>
@media (max-width: 1015px) {
  #k1, #k2 {
    display: none;
  }
  #mobile {
    display: block
  }
  #mobile2 {
    display: flex
  }
  #container {
    padding-right: 10px;
    padding-left: 10px;
    margin-top: 30px;
  }
  
}

/* @media (max-width: 640px) {
  #k2 {
    display: none;
  }
} */
</style>

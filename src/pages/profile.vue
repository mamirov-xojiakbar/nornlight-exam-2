<template>
    <div class="pt-[50px] bg-gray-100 min-h-screen">
      <!-- Desktop -->
      <div id="dp" class="container mx-auto relative">
        <button @click="openModal" class="absolute top-4 right-[120px] text-white px-4 py-2 rounded-lg shadow">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <g fill="none" stroke="#808080" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>
            </g>
          </svg>
        </button>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex flex-col md:flex-row items-center mb-6 ">
            <div class="relative">
              <img
                :src="user.profilePicture"
                alt="User Profile"
                class="w-24 h-24 rounded-full shadow-lg mb-4 md:mb-0 md:mr-6 object-cover cursor-pointer"
                @click="triggerImageUpload"
              />
              <input
                ref="fileInput"
                type="file"
                class="hidden"
                @change="handleImageUpload"
              />
              <svg class="absolute top-7 left-7 cursor-pointer" @click="triggerImageUpload" xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#808080" d="M11 13h2.5zM1 21V5h5.15L8 3h6v2H8.875L7.05 7H3v12h16v-9h2v11zM19 7V5h-2V3h2V1h2v2h2v2h-2v2zm-8 10.5q1.875 0 3.188-1.312T15.5 13t-1.312-3.187T11 8.5T7.813 9.813T6.5 13t1.313 3.188T11 17.5m0-2q-1.05 0-1.775-.725T8.5 13t.725-1.775T11 10.5t1.775.725T13.5 13t-.725 1.775T11 15.5"/></svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ user.name }} {{ user.surname }}</h2>
              <p class="text-gray-600"><strong>Email:</strong> {{ user.email }}</p>
              <p class="text-gray-600"><strong>Phone:</strong> {{ user.phone }}</p>
            </div>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 p-4 rounded-lg shadow col-span-1 md:col-span-2">
              <h3 class="text-xl font-semibold text-gray-700 mb-4">Notifications</h3>
              <ul class="space-y-4">
                <li
                  v-for="notification in displayedNotifications"
                  :key="notification.id"
                  class="p-4 bg-white rounded-lg shadow flex justify-between items-center"
                >
                  <p class="text-gray-700">{{ notification.message }}</p>
                  <span class="text-xs font-semibold text-gray-500">{{ notification.date }}</span>
                </li>
              </ul>
              <button    
                v-if="displayedNotifications.length < user.notifications.length" 
                @click="loadMoreNotification" 
                class="mt-6 py-2 px-6 bg-[#4C4C4C] text-white font-semibold rounded-lg"
              >
                More
              </button>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold text-gray-700 mb-4">Orders</h3>
              <ul class="space-y-4">
                <li
                  v-for="order in displayedOrders"
                  :key="order.id"
                  class="p-4 bg-white rounded-lg shadow flex justify-between items-center"
                >
                  <div>
                    <p class="text-gray-700 font-semibold">Order #{{ order.id }}</p>
                    <p class="text-gray-500">{{ order.date }}</p>
                  </div>
                  <span class="text-blue-500 font-bold">{{ order.total }} USD</span>
                </li>
              </ul>

              <button    
                v-if="displayedOrders.length < user.orders.length" 
                @click="loadMore" 
                class="mt-6 py-2 px-6 bg-[#4C4C4C] text-white font-semibold rounded-lg"
              >
                More
              </button>
            </div>
  
            <div class="bg-gray-50 p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold text-gray-700 mb-4">Reviews</h3>
              <ul class="space-y-4">
                <li
                  v-for="review in displayedReviews"
                  :key="review.id"
                  class="p-4 bg-white rounded-lg shadow"
                >
                  <p class="text-gray-700 font-semibold">{{ review.productName }}</p>
                  <p class="text-gray-500 text-sm">{{ review.comment }}</p>
                  <div class="flex mt-2">
                    <span
                      v-for="n in review.rating"
                      :key="n"
                      class="text-yellow-400"
                    >
                      ★
                    </span>
                    <span
                      v-for="n in 5 - review.rating"
                      :key="n"
                      class="text-gray-300"
                    >
                      ★
                    </span>
                  </div>
                </li>
              </ul>

              <button    
                v-if="displayedReviews.length < user.reviews.length" 
                @click="loadMoreReviews" 
                class="mt-6 py-2 px-6 bg-[#4C4C4C] text-white font-semibold rounded-lg"
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End desktop -->
  
      <!-- Edit desktop -->
      <div id="edp" v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div @click="closeModal" class="absolute inset-0"></div>
        <div @click.stop class="bg-white p-6 rounded-lg shadow-lg relative z-10 max-w-lg w-full">
          <button @click="closeModal" class="absolute top-6 right-6 text-gray-500 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#808080" d="M20.48 3.512a11.97 11.97 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.97 11.97 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.8 9.8 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.8 9.8 0 0 1 2.876-6.943a9.8 9.8 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.8 9.8 0 0 1-2.876 6.942z"/><path fill="#808080" d="m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"/></svg>
          </button>
          <h3 class="text-xl font-bold mb-4">Edit Profile</h3>
          <form @submit.prevent="saveChanges">
            <div class="grid gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="name">Name</label>
                <input
                  v-model="editedUser.name"
                  type="text"
                  id="name"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="surname">Surname</label>
                <input
                  v-model="editedUser.surname"
                  type="text"
                  id="surname"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="email">Email</label>
                <input
                  v-model="editedUser.email"
                  type="email"
                  id="email"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="phone">Phone</label>
                <input
                  v-model="editedUser.phone"
                  type="text"
                  id="phone"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <button type="submit" class="mt-4 hover:bg-gray-600 bg-gray-500 text-white px-6 py-2 rounded-lg">Save</button>
          </form>
        </div>
      </div>
      <!-- end edit desktop -->

      <!-- Mobile -->
      <div id="mp" class="container mx-auto relative p-4">
        <div class="bg-white rounded-lg shadow-lg">
          <div class="flex flex-col  items-center p-6 relative">
            <img
              :src="user.profilePicture"
              alt="User Profile"
              class="w-24 h-24 rounded-full shadow-lg mb-4 object-cover"
              @click="triggerImageUpload"
            />
            <h2 class="text-2xl font-bold text-gray-800">{{ user.name }} {{ user.surname }}</h2>
            <p class="text-gray-600"><strong>Email:</strong> {{ user.email }}</p>
            <p class="text-gray-600"><strong>Phone:</strong> {{ user.phone }}</p>

            <button @click="openModal" class="text-white px-4 py-2 rounded-lg shadow mt-4 absolute right-6 top-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <g fill="none" stroke="#808080" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>
                </g>
              </svg>
            </button>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg shadow col-span-1 md:col-span-2">
              <h3 class="text-xl font-semibold text-gray-700 mb-4">Notifications</h3>
              <ul class="space-y-4">
                <li
                  v-for="notification in displayedNotifications"
                  :key="notification.id"
                  class="p-4 bg-white rounded-lg shadow flex justify-between items-center"
                >
                  <p class="text-gray-700">{{ notification.message }}</p>
                  <span class="text-xs font-semibold text-gray-500">{{ notification.date }}</span>
                </li>
              </ul>

              <button    
                v-if="displayedNotifications.length < user.notifications.length" 
                @click="loadMoreNotification" 
                class="mt-6 py-2 px-6 bg-[#4C4C4C] text-white font-semibold rounded-lg"
              >
                More
              </button>
          </div>

          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-700 mb-4">Orders</h3>
            <ul class="space-y-4">
              <li
                v-for="order in displayedOrders"
                :key="order.id"
                class="p-4 bg-white rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <p class="text-gray-700 font-semibold">Order #{{ order.id }}</p>
                  <p class="text-gray-500">{{ order.date }}</p>
                </div>
                <span class="text-blue-500 font-bold">{{ order.total }} USD</span>
              </li>
            </ul>

            <button    
                v-if="displayedOrders.length < user.orders.length" 
                @click="loadMore" 
                class="mt-6 py-2 px-6 bg-[#4C4C4C] text-white font-semibold rounded-lg"
              >
                More
            </button>
          </div>

          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-700 mb-4">Reviews</h3>
            <ul class="space-y-4">
              <li
                v-for="review in displayedReviews"
                :key="review.id"
                class="p-4 bg-white rounded-lg shadow"
              >
                <p class="text-gray-700 font-semibold">{{ review.productName }}</p>
                <p class="text-gray-500 text-sm">{{ review.comment }}</p>
                <div class="flex mt-2">
                  <span
                    v-for="n in review.rating"
                    :key="n"
                    class="text-yellow-400"
                  >
                    ★
                  </span>
                  <span
                    v-for="n in 5 - review.rating"
                    :key="n"
                    class="text-gray-300"
                  >
                    ★
                  </span>
                </div>
              </li>
            </ul>

            <button    
                v-if="displayedReviews.length < user.reviews.length" 
                @click="loadMoreReviews" 
                class="mt-6 py-2 px-6 bg-[#4C4C4C] text-white font-semibold rounded-lg"
              >
                More
            </button>
          </div>
        </div>
      </div>
      <!-- End Mobile -->

      <!-- Edit mobile -->
      <div id="edit-mobile" v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div @click="closeModal" class="absolute inset-0"></div>
        <div @click.stop class="bg-white p-6 rounded-lg shadow-lg relative z-10 max-w-lg w-full">
          <button @click="closeModal" class="absolute top-6 right-6 text-gray-500 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#808080" d="M20.48 3.512a11.97 11.97 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.97 11.97 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.8 9.8 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.8 9.8 0 0 1 2.876-6.943a9.8 9.8 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.8 9.8 0 0 1-2.876 6.942z"/><path fill="#808080" d="m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"/></svg>
          </button>
          <h3 class="text-xl font-bold mb-4">Edit Profile</h3>
          <form @submit.prevent="saveChanges">
            <div class="grid gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="name">Name</label>
                <input
                  v-model="editedUser.name"
                  type="text"
                  id="name"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="surname">Surname</label>
                <input
                  v-model="editedUser.surname"
                  type="text"
                  id="surname"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="email">Email</label>
                <input
                  v-model="editedUser.email"
                  type="email"
                  id="email"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="phone">Phone</label>
                <input
                  v-model="editedUser.phone"
                  type="text"
                  id="phone"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <button type="submit" class="mt-4 hover:bg-gray-600 bg-gray-500 text-white px-6 py-2 rounded-lg">Save</button>
          </form>
        </div>
      </div>
      <!-- End edit mobile -->
    </div>
</template>

<script setup>
import { ref,computed } from 'vue';

const user = ref({
name: 'John',
surname: 'Doe',
email: 'john.doe@example.com',
phone: '+1234567890',
profilePicture: 'https://via.placeholder.com/150',
orders: [
    { id: 1, date: '2024-01-15', total: 150 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
    { id: 2, date: '2024-02-22', total: 230 },
],
reviews: [
    { id: 1, productName: 'Product 1', comment: 'Great product!', rating: 4 },
    { id: 2, productName: 'Product 2', comment: 'Not bad.', rating: 3 },
    { id: 2, productName: 'Product 2', comment: 'Not bad.', rating: 3 },
    { id: 2, productName: 'Product 2', comment: 'Not bad.', rating: 3 },
    { id: 2, productName: 'Product 2', comment: 'Not bad.', rating: 3 },
    { id: 2, productName: 'Product 2', comment: 'Not bad.', rating: 3 },
    { id: 2, productName: 'Product 2', comment: 'Not bad.', rating: 3 },
    { id: 2, productName: 'Product 2', comment: 'Not bad.', rating: 3 },
],
notifications: [
    { id: 1, message: 'Your order has been shipped!', date: '2024-03-05' },
    { id: 2, message: 'Your review was approved.', date: '2024-03-10' },
],
});  

const editedUser = ref({ ...user.value });
const isModalOpen = ref(false);
const ordersToShow = ref(4);
const notificationsToShow = ref(4);
const reviewsToShow = ref(3);

const displayedOrders = computed(() => {
  return user.value.orders.slice(0, ordersToShow.value);
});

const displayedNotifications = computed(() => {
  return user.value.notifications.slice(0, notificationsToShow.value);
});

const displayedReviews = computed(() => {
  return user.value.reviews.slice(0, reviewsToShow.value);
});

const loadMore = () => {
  ordersToShow.value += 4;
};

const loadMoreNotification = () => {
  notificationsToShow.value += 3;
};

const loadMoreReviews = () => {
  reviewsToShow.value += 4;
};

const openModal = () => {
editedUser.value = { ...user.value };
isModalOpen.value = true;
};

const closeModal = () => {
isModalOpen.value = false;
};

const saveChanges = () => {
user.value = { ...editedUser.value };
closeModal();
};

const handleImageUpload = (event) => {
const file = event.target.files[0];
if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
    editedUser.value.profilePicture = e.target.result;
    user.value.profilePicture = e.target.result; // Darhol o'zgaradi
    };
    reader.readAsDataURL(file);
}
};

const triggerImageUpload = () => {
const fileInput = document.querySelector('input[type="file"]');
fileInput.click();
};
</script>

<style scoped>
.group:hover svg {
opacity: 1;
}

@media (max-width: 1015px) {
  #dp {
    display: none;
  }
}

@media (max-width: 640px) {
  #dp {
    display: none;
  }
}
@media (min-width: 1015px) {
  #mp {
    display: none;
  }
} 
</style>

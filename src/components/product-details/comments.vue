<template>
  <div class="md:container mb-[40px]">
    <h2 class="text-2xl font-bold mb-6">Mahsulot sharhlari</h2>
    <!-- Desktop -->
    <div id="comment" class="grid grid-cols-4 gap-5">
        <div v-for="(comment, index) in displayedComments" :key="index">
          <div class="p-4 border rounded-lg md:h-[170px] h-[140px]">
            <div class="flex justify-between items-center mb-2">
              <span class="font-semibold md:text-[17px] text-[14px]">{{ comment.username }}</span>
              <div class="text-yellow-500 flex md:text-[12px] text-[10px]">
                <i class="fas fa-star" v-for="star in comment.rating" :key="star"></i>
              </div>
            </div>
            <p class="text-gray-700 md:text-[15px] text-[12px]">{{ comment.text }}</p>
          </div>
        </div>
    </div>


    <div class="flex justify-center">
      <button    
        v-if="displayedComments.length < comments.length" 
        @click="loadMore" 
        class="mt-6 py-2 px-4 bg-[#4C4C4C] text-white font-semibold rounded-lg"
      >
        Ko'proq ko'rsatish
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const comments = ref([
  { username: 'Ali', rating: 1, text: 'Bu mahsulot juda yaxshi! Tavsiya qilaman.' },
  { username: 'Aziza', rating: 4, text: 'Mahsulot umuman yaxshi, lekin yetkazib berish biroz kechikdi.' },
  { username: 'Bekzod', rating: 3, text: "Mahsulot o'rtacha, xizmat yaxshi." },
  { username: 'Dilnoza', rating: 5, text: 'Juda ajoyib mahsulot!' },
  { username: 'Feruza', rating: 4, text: 'Mahsulot yaxshi, yana sotib olaman.' },
  { username: 'Dilnoza', rating: 5, text: 'Juda ajoyib mahsulot!' },
  { username: 'Feruza', rating: 4, text: 'Mahsulot yaxshi, yana sotib olaman.' },
  { username: 'Dilnoza', rating: 5, text: 'Juda ajoyib mahsulot!' },
  { username: 'Feruza', rating: 4, text: 'Mahsulot yaxshi, yana sotib olaman.' }
]);

const commentsToShow = ref(4);

const displayedComments = computed(() => {
  return comments.value.slice(0, commentsToShow.value);
});

const loadMore = () => {
  commentsToShow.value += 4;
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
@media (max-width: 840px ) {
  #comment {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  #text {
    font-size: 30px;
  }
}

@media (max-width: 600px) {
  #comment {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  #text {
    font-size: 23px;
  }
}

@media (min-width: 840px) {
  #comment {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

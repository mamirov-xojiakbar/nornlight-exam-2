import { defineStore } from "pinia";

export const usePiniaStore = defineStore({
  id: "pinia",
  state: () => ({
    likedProducts: [],
    items: [],
    karzina: [],
  }),
  actions: {
    addToLikedProducts(productId) {
      if (!this.likedProducts.includes(productId)) {
        this.likedProducts.push(productId);
      }
    },
    removeFromLikedProducts(productId) {
      this.likedProducts = this.likedProducts.filter((id) => id !== productId);
    },
    toggleLikedProduct(productId) {
      if (this.likedProducts.includes(productId)) {
        this.removeFromLikedProducts(productId);
      } else {
        this.addToLikedProducts(productId);
      }
    },
    setItems(items) {
      this.items = items;
    },
    addToKarzina(productId) {
      if (!this.karzina.includes(productId)) {
        this.karzina.push(productId);
      }
    },
    removeFromKarzina(productId) {
      this.karzina = this.karzina.filter((id) => id !== productId);
    },
  },

  persist: true,
});

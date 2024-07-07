import { defineStore } from "pinia";

export const usePiniaStore = defineStore({
  id: "pinia",
  state: () => ({
    likedProducts: [],
    items: [],
    karzina: [],
    orders: [],
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
    clearKarzina() {
      this.karzina = [];
    },
    addOrder(order) {
      this.orders.push(order);
    },
  },
  getters: {
    getKarzinaProducts() {
      return this.karzina
        .map((productId) => {
          const product = this.items.find((item) => item.id === productId);
          if (!product) {
            console.error(`Product with ID ${productId} not found`);
            return null;
          }
          return {
            ...product,
            quantity: 1,
            unitPrice: product.price,
          };
        })
        .filter((product) => product !== null); // Filter out any null products
    },
  },
  persist: true,
});

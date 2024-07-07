import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  redirect: "/",
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../pages/not-found.vue"),
    },

    {
      path: "/",
      component: () => import("../layout/default.vue"),
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../pages/home.vue"),
        },
        {
          path: "/saved",
          name: "saved",
          component: () => import("../pages/saved.vue"),
        },
        {
          path: "/karzina",
          name: "karzina",
          component: () => import("../pages/karzina.vue"),
        },
        {
          path: "/all-products",
          name: "all-products",
          component: () => import("../pages/all-products.vue"),
        },
        {
          path: "/product-detail/:id",
          name: "product-detail",
          component: () => import("../pages/product-detail.vue"),
        },
        {
          path: "/about-us",
          name: "about-us",
          component: () => import("../pages/about.vue"),
        },
        {
          path: "/shopping",
          name: "shopping",
          component: () => import("../pages/shopping.vue"),
        },
        {
          path: "/return",
          name: "return",
          component: () => import("../pages/return.vue"),
        },
        {
          path: "/garant",
          name: "garant",
          component: () => import("../pages/garant.vue"),
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("../pages/contact.vue"),
        },
        {
          path: "/blog",
          name: "blog",
          component: () => import("../pages/blog.vue"),
        },
        {
          path: "/katalog",
          name: "katalog",
          component: () => import("../pages/katalog.vue"),
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../pages/not-found.vue')
    },
    {
      path: '/',
      component: () => import('../layout/default.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../pages/home.vue')
        },
        {
          path: '/saved',
          name: 'saved',
          component: () => import('../pages/saved.vue')
        },
        {
          path: '/karzina',
          name: 'karzina',
          component: () => import('../pages/karzina.vue')
        },
        {
          path: '/all-products',
          name: 'all-products',
          component: () => import('../pages/all-products.vue')
        },
        {
          path: '/product-detail/:id',
          name: 'product-detail',
          component: () => import('../pages/product-detail.vue')
        },
        {
          path: '/about-us',
          name: 'about-us',
          component: () => import('../pages/about.vue')
        },
        {
          path: '/shopping',
          name: 'shopping',
          component: () => import('../pages/shopping.vue')
        },
        {
          path: '/return',
          name: 'return',
          component: () => import('../pages/return.vue')
        },
        {
          path: '/garant',
          name: 'garant',
          component: () => import('../pages/garant.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../pages/contact.vue')
        },
        {
          path: '/blog',
          name: 'blog',
          component: () => import('../pages/blog.vue')
        },
        {
          path: '/katalog',
          name: 'katalog',
          component: () => import('../pages/katalog.vue')
        },
        {
          path: '/catalog',
          name: 'catalog',
          component: () => import('../pages/mobile-katalog.vue')
        },
        {
          path: '/create-order',
          name: 'create-order',
          component: () => import('../pages/create-order.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../pages/profile.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../layout/admin.vue'),
      redirect: '/admin/create-product',
      children: [
        {
          path: '/admin/create-product',
          name: 'create-product',
          component: () => import('../pages/admin/create-product.vue')
        },
        {
          path: '/admin/manage-product',
          name: 'manage-product',
          component: () => import('../pages/admin/manage-product.vue')
        },
        {
          path: '/admin/update-product',
          name: 'update-product',
          component: () => import('../pages/admin/update-product.vue')
        },
        {
          path: '/admin/order',
          name: 'order',
          component: () => import('../pages/admin/order.vue')
        },
        {
          path: '/admin/create-category',
          name: 'create-category',
          component: () => import('../pages/admin/create-category.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/register.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../pages/payment.vue')
    },
    {
      path: '/about-payment',
      name: 'about-payment',
      component: () => import('../pages/about-payment.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/about-payment'];
  const authRequired = !publicPages.includes(to.path); 
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
   
    return next('/login');
  }

  next(); 
});

export default router;

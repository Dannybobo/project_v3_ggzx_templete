export const constantRoute = [
  // Login
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: 'Login',
      hidden: true,
    },
  },
  // Root and Home
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      hidden: false,
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'Home',
          hidden: false,
          icon: 'House',
        },
      },
    ],
  },
  // Screen
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'screen',
    meta: {
      title: 'Dashboard',
      hidden: false,
      icon: 'Cpu',
    },
  },
  // Acl
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    meta: {
      title: 'Management',
      hidden: false,
      icon: 'Lock',
    },
    redirect: '/acl/user',
    children: [
      // user
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'Acl',
        meta: {
          title: 'User',
          hidden: false,
          icon: 'User',
        },
      },
      // role
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: 'Role',
          hidden: false,
          icon: 'Open',
        },
      },
      // permission
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: 'Permission',
          hidden: false,
          icon: 'Finished',
        },
      },
    ],
  },
  // Product
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    meta: {
      title: 'Product',
      hidden: false,
      icon: 'Goods',
    },
    redirect: '/product/trademark',
    children: [
      // trademark
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: {
          title: 'Trademark',
          hidden: false,
          icon: 'Suitcase',
        },
      },
      // attr
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: {
          title: 'Attr',
          hidden: false,
          icon: 'Memo',
        },
      },
      // spu
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'Spu',
          hidden: false,
          icon: 'ShoppingCart',
        },
      },
      // sku
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'Sku',
          hidden: false,
          icon: 'TakeawayBox',
        },
      },
    ],
  },
  // 404
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  // Any
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: 'Any',
      hidden: true,
    },
  },
];

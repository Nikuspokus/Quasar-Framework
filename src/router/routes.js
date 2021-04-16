
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('src/pages/PageTodo.vue') 
      },
      { 
        path: '/settings', 
        component: () => import('src/pages/PageSettings.vue') 
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import toDo from '../views/toDo.vue'
// import { ref } from 'vue'
// import { computed } from 'vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
    // {
    //   path: '/',
    //   name: 'toDo',
    //   component: toDo,
    // }
//   ],
// })


// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes = [{
//   '/': HomeView,
//   '/toDo': toDo
// }]
// })
// const currentPath = ref(window.location.hash || '/')
// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })
// im
// const currentView = computed(() => {
//   return routes[currentPath.value.slice(1) || '/'] || NotFound
// })
// im


// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })


// <template>
//     <a href="#/">Home</a> |
//     <a href="#/toDo">toDo</a> |
// </template>

// export default router

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import toDo from '../views/toDo.vue';

const routes = [
  { path: '/meteo', component: HomeView },
  { path: '/todo', component: toDo },
  { path: '/', redirect: '/meteo' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // ✅ CECI EST ESSENTIEL

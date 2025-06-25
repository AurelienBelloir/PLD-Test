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

export default router;

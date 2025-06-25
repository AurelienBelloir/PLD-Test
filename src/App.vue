<!-- <script setup>
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import toDo from './views/toDo.vue'
import { ref } from 'vue'
import { computed } from 'vue'





const routes = {
  '/': HomeView,
  '/toDo': toDo
}


const currentPath = ref(window.location.hash || '/')
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})


window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
</script>

<template>
    <a href="#/">Home</a> |
    <a href="#/toDo">toDo</a> |
    <component :is="currentView" />
</template> -->



<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<!-- <template>
  <RouterView />
</template> -->
<template>
  <div id="app">
    <nav>
      <router-link to="/meteo">Météo</router-link>
      |
      <router-link to="/todo">To-Do</router-link>
    </nav>

    <!-- C’est ici que le composant de page s’affiche -->
    <router-view />
  </div>
</template>
<style>
body {
text-align: center;
}
</style>

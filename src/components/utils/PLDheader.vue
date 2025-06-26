<template>
  <header>
    <nav>
      <router-link class="link" const to="/meteo">Météo </router-link>
      <router-link class="link" to="/todo">To-Do</router-link>
    </nav>
  </header>
</template>
<style scoped>
nav {
  display: flex;
}
header{
  display: flex;
  justify-content: center;
  margin: 40px auto;
  max-width: 600px ;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.link{
  display: flex;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.link:first{
  margin-right: .5rem;
}
nav {
  width: 60%;
  display: flex;
  justify-content: space-evenly;
}
</style>

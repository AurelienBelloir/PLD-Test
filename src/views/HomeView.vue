<template>
  <div>
  <img v-if="weather" :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"/>
    <h1>Météo</h1><br>
    <input v-model="city" @keyup.enter="getWeather" autofocus /><br>
    <div v-if="weather">
      <p>Température à {{ weather.name }} : {{ weather.main.temp }}°C</p>
      <p>Météo : {{ weather.weather[0].description }} </p>
    </div>
  </div>
<div v-if="weather" :class="`weather-container ${condition}`"></div>
</template>

<script setup>

import { ref, computed } from 'vue'
import axios from 'axios'

const city = ref('Paris')
const apiKey = '694f728d23584c81d486a33186d9abeb'
const weather = ref(null)


const getWeather = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&lang=fr&units=metric`
    );
    console.log('response', response.data);
    weather.value = response.data;
  }
   catch (error) {
    console.error('error', error);
    weather.value = null;
  }
}
const condition = computed(() => {
  if (!weather.value) return ""
  const id = weather.value.weather[0].id
  return getWeatherCategory(id)
})

function getWeatherCategory(id) {
  if (id >= 200 && id < 300) return "orage";
  if (id >= 300 && id < 400) return "bruine";
  if (id >= 500 && id < 600) return "pluie";
  if (id >= 600 && id < 700) return "neige";
  if (id >= 700 && id < 800) return "atmosphère";
  if (id === 800) return "dégagé";
  if (id >= 801 && id <= 804) return "nuageux";
}
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
  border-image-source: -moz-radial-gradient(circle, #ffffff, #000000);

}
*{
  box-sizing: border-box;
  align-items: center;
  text-align: left;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}

div {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 10px;
}

input[type='text'] {
  padding: 10px;
  width: 80%;
  border: 2px solid #7d6e6e;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 10px;
  color: #ffffff;
}

.weather-container {
  padding: 20px;
  border-radius: 10px;
  color: white;
  transition: background 0.5s ease;
  min-height: 200px;
}

.weather-container.orage {
  background: linear-gradient(135deg, #3a3a69, #000000);
}

.weather-container.bruine {
  background: linear-gradient(135deg, #6e7b8b, #a9b0b3);
}


.weather-container.pluie {
  background: linear-gradient(135deg, #5c9ead, #3f6883);
}

.weather-container.neige {
  background: linear-gradient(135deg, #e0f7fa, #ffffff);
  color: #333;
}

.weather-container.atmosphère {
  background: linear-gradient(135deg, #bdc3c7, #95a5a6);
}

.weather-container.dégagé {
  background: linear-gradient(135deg, #f9d423, #ff4e50);
  color: #000;
}

.weather-container.nuageux {
  background: linear-gradient(135deg, #757f9a, #d7dde8);
  color: #000;
}

.weather-container.inconnu {
  background: gray;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

input {
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center;
  width: 200px;
}

h1 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin: 5px 0;
  color: #2c3e50;
}
</style>

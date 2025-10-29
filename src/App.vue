<script setup>
import { ref } from 'vue'
import SearchInput from './components/SearchInput.vue'
import History from './components/History.vue'
import Temperature from './components/Temperature.vue'
import Humidity from './components/Humidity.vue'
import { useFetchWeather } from './composables/useWeather'
import { useHumidity } from './composables/humidity'
import { useTemperature } from './composables/temperature'

// const {temperature} = useTemperature()
// const {humidity} = useHumidity()
const {fetchWeather, degreeCelsius, degreeFar, humidity} = useFetchWeather()
const locationInput = ref('')

function onSearch(location) {
  if (!location) return
  locationInput.value = location
  fetchWeather(location)
}

</script>

<template>
      <div class="weather-info">
          <Temperature :fahrenheit="degreeFar" :celsius="degreeCelsius"/>
          <Humidity :humidity="humidity"/>
      </div>
      <SearchInput @search="onSearch" />
      <History :location="locationInput" :temperature="degreeCelsius" :humidity="humidity" />
</template>

<style scoped>

.weather-info {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 1em;
}
</style>
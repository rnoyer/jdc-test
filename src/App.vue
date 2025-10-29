<script setup>
import { ref } from 'vue'
import SearchInput from './components/SearchInput.vue'
import History from './components/History.vue'
import Temperature from './components/Temperature.vue'
import Humidity from './components/Humidity.vue'
import { useFetchWeather } from './composables/useWeather'
import { useHumidity } from './composables/humidity'
import { useTemperature } from './composables/temperature'

const { rawCelsius, rawHumidity, fetchWeather } = useFetchWeather()
const { celsius, fahrenheit } = useTemperature(rawCelsius)
const { humidity } = useHumidity(rawHumidity)
const locationInput = ref('')

async function onSearch(location) {
  if (!location) return
  await fetchWeather(location)
  locationInput.value = location
}

</script>

<template>
      <div class="weather-info">
          <Temperature :fahrenheit="fahrenheit" :celsius="celsius"/>
          <Humidity :humidity="humidity"/>
      </div>
      <SearchInput @search="onSearch" />
      <History :location="locationInput" :temperature="celsius" :humidity="humidity" />
</template>

<style scoped>

.weather-info {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 1em;
}
</style>
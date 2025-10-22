<script setup>
import SearchInput from './components/SearchInput.vue'
import History from './components/History.vue'
import Temperature from './components/Temperature.vue'
import Humidity from './components/Humidity.vue'



</script>

<template>
      <div class="weather-info">
          <Temperature />
          <Humidity />
      </div>
      <SearchInput />
      <History />
</template>

<style scoped>

.weather-info {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 1em;
}
</style>
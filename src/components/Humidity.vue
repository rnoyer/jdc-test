<script setup>
import { useHumidity } from '../composables/humidity';

const props = defineProps({
  humidity: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="humidity-card">
      <div class="humidity-label">Humidité</div>
      <div class="humidity-value">{{humidity}}</div>
    </div>
</template>

<style scoped>
.humidity-card {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
  border: 1px solid #e0e0e0;
}
.humidity-label {
  font-size: 18px;
  color: #555;
  margin-bottom: 12px;
  font-weight: 500;
}
.humidity-value {
  color: #555;
  font-size: 48px;
  font-weight: bold;
}
</style>
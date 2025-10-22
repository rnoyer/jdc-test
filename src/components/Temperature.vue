<script setup>
import { useTemperature } from '../composables/temperature';

const { temperature } = useTemperature();
</script>

<template>
    <div class="temperature-card">
        <div class="temperature-label">Température</div>
        <div class="temperature-value">-2°C</div>
    </div>
</template>

<style scoped>
.temperature-card {
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
.temperature-label {
  font-size: 18px;
  color: #555;
  margin-bottom: 12px;
  font-weight: 500;
}
.temperature-value {
  font-size: 48px;
  font-weight: bold;
}
</style>
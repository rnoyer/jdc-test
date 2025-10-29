<script setup>
import { ref, computed } from 'vue';
import { useTemperature } from '../composables/temperature';

const props = defineProps({
  fahrenheit: {
    type: String,
    required: true
  },
  celsius: {
    type: String,
    required: true
  }
})

const isCelsius = ref(true)
const tempToDisplay = computed(() => isCelsius.value ? props.celsius : props.fahrenheit)

function handleToggle(){
  isCelsius.value = !isCelsius.value
}

</script>

<template>
    <div class="temperature-card" @click="handleToggle">
      <div class="temperature-label">Température</div>
        <div class="temperature-value">
          {{ tempToDisplay }}
        </div>
    </div>
</template>

<style scoped>
.temperature-card {
  cursor: pointer;
  user-select: none;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
  min-height: 111px;
  border: 1px solid #e0e0e0;
}
.temperature-label {
  font-size: 18px;
  color: #555;
  margin-bottom: 12px;
  font-weight: 500;
}
.temperature-value {
  color: #555;
  font-size: 48px;
  font-weight: bold;
}
</style>
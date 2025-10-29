<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  location: {
    type: String,
    required: true
  },
  temperature: {
    type: String,
    required: true
  },
  humidity: {
    type: String,
    required: true
  }
})

const history = ref([])

watch(() => props.temperature, () => {
  if(props.location === history.value[0]?.location) return
  history.value.unshift({
    location : props.location,
    temperature: props.temperature,
    humidity : props.humidity
  })
})




</script>

<template>
    <div class="history">
        <h2>Historique</h2>
        <ul>
            <li v-if="!location">Aucun historique disponible.</li>
            <li v-for="(item, index) in history" :key="index" class="element">
                <div>{{item.location}}</div>
                <div>{{item.temperature}}</div>
                <div>{{item.humidity}}</div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.history {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  color: #555;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.element {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
.element:last-child {
  border-bottom: none;
}
</style>
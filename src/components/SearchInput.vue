<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const locationInput = ref('')

function handleSubmit() {
  emit('search', locationInput.value)
  locationInput.value = ''
}

</script>


<template>
    <form class="search-input-container" @submit.prevent="handleSubmit">
        <input v-model="locationInput" type="text" placeholder="Ville..." class="search-input" />
        <input type=submit value='Rechercher' />
    </form>
</template>

<style scoped>
.search-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.2s;
}
.search-input:focus {
  border-color: #0078d4;
  outline: none;
}
.search-input-container {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}
</style>



import { computed } from 'vue';

export function useTemperature(rawCelsius) {
    const celsius = computed(() => rawCelsius.value == null ? '' : `${rawCelsius.value}°C`)

    // La logique pour convertir la température en degrés Fahrenheit
    const fahrenheit = computed(() => rawCelsius.value == null ? '' : `${Math.floor(rawCelsius.value * (9 / 5) + 32)}°F`)

    return { celsius, fahrenheit };
}
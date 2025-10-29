import { ref } from 'vue';

export function useTemperature() {
    const temperature = ref(0);

    // La logique pour convertir la température en degrés Fahrenheit
    temperature.value = Math.floor(temperature.value * (9 / 5) + 32)


    return { temperature };
}
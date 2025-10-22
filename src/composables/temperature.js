import { ref } from 'vue';

export function useTemperature() {
    const temperature = ref(0);

    // La logique pour convertir la température en degrés Fahrenheit


    return { temperature };
}
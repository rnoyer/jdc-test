import { ref } from 'vue';

export function useHumidity() {
    const humidity = ref(0);

    // La logique pour convertir l'humidité en pourcentage

    return { humidity };
}
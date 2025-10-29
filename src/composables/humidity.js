import { computed } from 'vue';

export function useHumidity(rawHumidity) {

    // La logique pour convertir l'humidité en pourcentage
    const humidity = computed(() => rawHumidity.value == null ? '' : `${rawHumidity.value}%`)

    return { humidity };
}
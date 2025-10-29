import { ref,computed } from "vue";

export function useFetchWeather() {
  const degreeCelsius = ref('')
  const degreeFar = ref('')
  const humidity = ref('')

  async function fetchWeather(location){
    const rawDegreeCelsius = ref(0)
    const rawDegreeFar = computed(() => Math.floor(rawDegreeCelsius.value * (9 / 5) + 32))
    const rawHumidity = ref(0)

    const apiKey = '432cc4e418414d2abf781706230612'
    const url = `https://api.weatherapi.com/v1/current.json?q=${location}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 400) {
          console.error('No result for this request.')
        } else {
          console.error('An error happened, Try again later.')
        }
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      rawDegreeCelsius.value = result.current.temp_c
      rawHumidity.value = result.current.humidity

      degreeCelsius.value = result.current.temp_c == null ? '' : `${rawDegreeCelsius.value}°C`
      degreeFar.value = result.current.temp_c == '' ? '' : `${rawDegreeFar.value}°F`
      humidity.value = result.current.humidity == null ? '' : `${rawHumidity.value}%`

    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  return {degreeCelsius, degreeFar, humidity, fetchWeather}
}

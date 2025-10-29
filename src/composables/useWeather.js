import { ref } from "vue";

export function useFetchWeather() {
  const rawCelsius = ref()
  const rawHumidity = ref()

  async function fetchWeather(location){

    const apiKey = '432cc4e418414d2abf781706230612'
    const url = `https://api.weatherapi.com/v1/current.json?q=${location}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      rawCelsius.value = result.current.temp_c
      rawHumidity.value = result.current.humidity

    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  return {rawCelsius, rawHumidity, fetchWeather}
}

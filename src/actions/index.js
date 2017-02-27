import axios from 'axios';

const API_KEY = '20497d7277a6d8e11da54b4af9fbd7c7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const config = {
    method: 'get',
    url: url,
    crossDomain: true
  };
  // const request = axios.get(url);
  const request = axios(config);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
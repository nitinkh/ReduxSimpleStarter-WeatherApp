import axios from 'axios';

const API_KEY = "3ce38d09ad00a3998e93f59199980fde";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export  function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    
    return {
        type: FETCH_WEATHER,
        payload : request
    }
}
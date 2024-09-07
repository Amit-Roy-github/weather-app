import React, { createContext, useState, useContext } from "react";
import fetchData from "./fetchData";

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = (({ childern }) => {
   const [weatherData, setWeatherData] = useState(null);
   const [error, setError] = useState(null);

   const fetchAndSetWeatherData = async (location) => {
      try {
         const data = await fetchData(location);
         setWeatherData(data);
         setError(null);
      }
      catch (err) {
         setError('Error fetching weather Data ');
         setWeatherData(null);
      }
   };
   return (
      <WeatherContext.Provider value={{ weatherData, error, fetchAndSetWeatherData }}>
         {childern}
      </WeatherContext.Provider>
   );
});

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = (city) => {
    fetch(`http://127.0.0.1:8000/weather/${city}/`)
      .then((response) => response.json())
      .then((data) => {setWeather(data); console.log(data)})
      .catch((error) => console.error('Error fetching weather data:', error));
  };

  const fetchCoordWeather = (lat, long) => {
    fetch(`http://127.0.0.1:8000/coordWeather/${lat}+${long}/`)
      .then((response) => response.json())
      .then((data) => {setWeather(data); console.log(data)})
      .catch((error) => console.error('Error fetching weather data:', error));
  };

  return (
    <div className='container'>
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} onCoordSearch={fetchCoordWeather} />
      <br></br><br></br>
      <WeatherCard weather={weather} />
    </div>
  );
};

export default App;

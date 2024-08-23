const WeatherCard = ({ weather }) => {
  console.log(weather);
    return weather != null && weather.cod === '404'?
      <div className="weather-info">
          <p>City not found</p>
      </div>
    :
    (
      <div className="weather-info">
        {weather ? (
          <div>
            <h3>{weather.name}</h3>
            <p>{weather.weather[0].description}</p>
            <i class="fa-solid fa-temperature-three-quarters"></i><span>    {weather.main.temp}°C</span>
          </div>
        ) : (
          <p>Search for weather condition of a location!</p>
        )}
      </div>
    );
  };
  
  export default WeatherCard;
  
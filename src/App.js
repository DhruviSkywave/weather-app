import Weather from './components/Weather';
import './App.css';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "f9b5b8a043aa2d87b5789309e8f7203f";

  const getWeather = async () => {
    if (!city) {
      setError("Please Enter a city name");
      return;
    }

    try {
      setError("");

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      const data = await response.json();

      if (data.cod === "404") {
        setError("City Not Found");
        setWeatherData(null);
      } else {
        setWeatherData(data);
      }
    }
    catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[350px] text-center">

        <h1 className="text-2xl font-bold mb-4 text-gray-800">Weather App</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter City Name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1"
            onKeyDown={(e)=> {
              if (e.key === "Enter") getWeather();
            }}
          />
          <button onClick={getWeather}>Search</button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {weatherData && <Weather data={weatherData} />}
      </div>
    </div>
  );
}

export default App;

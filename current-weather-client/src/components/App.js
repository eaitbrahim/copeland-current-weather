import { useEffect, useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

function App() {
  const [ weather, setWeather ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchCurrentWeather();
  },[]);

  const fetchCurrentWeather = async () => {
    const response = await axios.get("http://localhost:5277/api/v1/currentWeatherByCoord/43.551/-87.9876");
    // DEV ONLY!
    await pause(1000);

    setWeather(response.data);
    setIsLoading(false);
  }
  return (
    <div className="container mx-auto">
     <CurrentWeather weather={weather} isLoading={isLoading} error=''/>
    </div>
  );
}

// DEV ONLY!
const pause = (duration) => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};

export default App;

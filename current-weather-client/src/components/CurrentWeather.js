import Skeleton from "./Skeleton";

function CurrentWeather({ isLoading, error, weather}){
  if(isLoading){
    return <Skeleton times={8} className="h-10 w-full"/>;
  }

  if(error){
    return <div className="text-sm text-red-400 mt-2">{error}...</div>;
  }

  if(JSON.stringify(weather) !== '{}'){
    return (
    <div className="mb-2 boarder rounded">
      <div className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mt-3 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
        <label className="font-bold mr-2">Date & Time:</label>
        { weather.timeDataCalculation}
      </div>

      <div className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mt-3 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
        <label className="font-bold mr-2">City:</label>
        { weather.name}
      </div>

      <div className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mt-3 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
        <label className="font-bold mr-2">Temperature:</label>
        { weather.temp} Fahrenheit
      </div>

      <div className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mt-3 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
        <label className="font-bold mr-2">Feels like:</label>
        { weather.feelsLike} Fahrenheit
      </div>

      <div className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mt-3 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
        <label className="font-bold mr-2">Description:</label>
        { weather.description}
      </div>

      <div className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mt-3 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
        <label className="font-bold mr-2">Pressure:</label>
        { weather.pressure} hPa
      </div>

      <div className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mt-3 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
        <label className="font-bold mr-2">Humidity:</label>
        { weather.humidity} %
      </div>

      <div className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mt-3 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
        <label className="font-bold mr-2">Wind Speed:</label>
        { weather.windSpeed} miles/hour
      </div>
    </div>
    );
  }
}

export default CurrentWeather;
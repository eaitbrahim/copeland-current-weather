import Skeleton from "./Skeleton";

function CurrentWeather({ isLoading, error, weather}){
  if(isLoading){
    return <Skeleton times={8} className="h-10 w-full"/>;
  }

  if(error){
    return <div>Error fetching current weather...</div>;
  }

  return (
    <div className="mb-2 boarder rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        { weather.timeDataCalculation}
      </div>

      <div className="flex p-2 justify-between items-center cursor-pointer">
        { weather.name}
      </div>

      <div className="flex p-2 justify-between items-center cursor-pointer">
        { weather.temp} Fahrenheit
      </div>

      <div className="flex p-2 justify-between items-center cursor-pointer">
        { weather.feelsLike} Fahrenheit
      </div>

      <div className="flex p-2 justify-between items-center cursor-pointer">
        { weather.description}
      </div>

      <div className="flex p-2 justify-between items-center cursor-pointer">
        { weather.pressure} hPa
      </div>

      <div className="flex p-2 justify-between items-center cursor-pointer">
        { weather.humidity} %
      </div>

      <div className="flex p-2 justify-between items-center cursor-pointer">
        { weather.windSpeed} %
      </div>
    </div>
    );
}

export default CurrentWeather;
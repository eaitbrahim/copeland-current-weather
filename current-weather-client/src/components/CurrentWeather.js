import Skeleton from "./Skeleton";
import WeatherItem from "./WeatherItem";

function CurrentWeather({ isLoading, error, weather}){
  if(isLoading){
    return <Skeleton times={8} className="h-10 w-full"/>;
  }

  if(error){
    return <div className="text-sm text-red-400 mt-2">{error}...</div>;
  }

  if(JSON.stringify(weather) !== '{}'){
    const outerClass = 'mb-2 boarder rounded';
    const innerClass = 'bg-blue-100 text-blue-800 text-xs font-medium mr-2 mt-3 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400';

    if(!weather.list){
      return (
        <WeatherItem weather={weather} outerClass={outerClass} innerClass={innerClass}/>
      );
    }

    return (
      <div>
          <div className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mt-3 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
            <label className="font-bold mr-2">City:</label>
            { weather.name }
          </div>

          { weather.list.map((forcast, index) => (<div key={index}><WeatherItem weather={forcast} outerClass={innerClass} innerClass={outerClass}/></div>))}
      </div>
    );
  }
}

export default CurrentWeather;
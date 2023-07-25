import Skeleton from "./Skeleton";

function CurrentWeather({ isLoading, error, weather}){
  if(isLoading){
    return <Skeleton times={6} className="h-10 w-full"/>;
  }

  if(error){
    return <div>Error fetching current weather...</div>;
  }

  return <div>{weather.name}</div>;
}

export default CurrentWeather;
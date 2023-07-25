import { useState } from "react";
import axios from "axios";
import { GoSync } from 'react-icons/go';
import CurrentWeather from "./CurrentWeather";
import classNames from "classnames";

function App() {
  const [ weather, setWeather ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState('');
  const [ searchOption, setSearchOption ] = useState('City');
  const [ location, setLocation ] = useState('');
  const [ placeholder, setPlaceholder ] = useState('New York');

  const apiUrl = 'http://localhost:5277/api/v1/';

  const onSubmit = (event) => {
    event.preventDefault();
    let endPoint;

    switch(searchOption){
      case 'City':
        endPoint = `currentWeatherByCity/${location}`;
        break;
      case 'Zip':
        endPoint = `currentWeatherByZip/${location}`;
        break;
      case 'Coord':
      default:
        endPoint = `currentWeatherByCoord/${location.split(',')[0].trim()}/${location.split(',')[1].trim()}`;
    }

    setError('');
    setIsLoading(true);
    axios.get(apiUrl + endPoint)
          .then(res => {
            setIsLoading(false);
            setWeather(res.data);
          })
          .catch(err => {
            setIsLoading(false);
            setError(`Failed to fetch current weather for the given location: ${location} & the error message is ${err.message}`);
            setWeather({});
          })
          .finally(() => {
            setLocation('');
            setSearchOption('City');
          });
  }

  const onChange = (event) => {
    setSearchOption(event.target.value);
    switch(event.target.value){
      case 'City':
        setPlaceholder('New York');
        break;
      case 'Zip':
        setPlaceholder('43551');
        break;
      case 'Coord':
      default:
        setPlaceholder('41.65424619050698, -83.53740534314433');
    }
  }
  return (
    <div className="bg-blue-200 min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
          Current weather by location
        </h2>
    
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={onSubmit}>
              <label className="block mb-2 font-bold text-gray-600">Search Current Weather By</label>
              
              <div className="mb-5">
                <span>
                  <input id="city" type="radio" value="City" checked={searchOption === 'City'} onChange={onChange}/> 
                  <label className="ml-2" htmlFor="city">City</label>
                </span>

                <span>
                  <input className="ml-5" id="zip" type="radio" value="Zip" checked={searchOption === 'Zip'} onChange={onChange}/>
                  <label className="ml-2" htmlFor="zip">Zip</label>
                </span>

                <span>
                  <input className="ml-5" id="coord" type="radio" value="Coord" checked={searchOption === 'Coord'} onChange={onChange}/> 
                  <label className="ml-2" htmlFor="coord">Latitude & Longitude</label>
                </span>
              </div>

              
              <div className="mb-5">
                <input className="border border-black-300 shadow p-3 w-full rounded" placeholder={placeholder} value={location} onChange={(e) => setLocation(e.target.value)} /> 
              </div>
              
              <button type="submit" className={classNames("block w-full bg-blue-500 text-white font-bold p-4 rounded-lg", { "opaticty:80": isLoading})} 
                disabled={isLoading | location === ''}>
                  { isLoading ? <GoSync className="animate-spin"/> : 'Search' }
              </button>
          </form>

          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

          </hr>
          <CurrentWeather weather={weather} isLoading={isLoading} error={error}/>
        </div>
      </div>
    </div>
  );
}

export default App;

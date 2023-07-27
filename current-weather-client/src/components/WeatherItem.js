function WeatherItem({weather, outerClass, innerClass}){
  const {timeDataCalculation, name, temp, feelsLike, description, pressure, humidity, windSpeed} = weather;

  return (
    <div className={outerClass}>
      <div className={innerClass}>
        <label className="font-bold mr-2">Date & Time:</label>
        { timeDataCalculation}
      </div>
      
      { name && (
        <div className={innerClass}>
          <label className="font-bold mr-2">City:</label>
          { name}
        </div>
      )}
      <div className={innerClass}>
        <label className="font-bold mr-2">Temperature:</label>
        { temp} Fahrenheit
      </div>

      <div className={innerClass}>
        <label className="font-bold mr-2">Feels like:</label>
        { feelsLike} Fahrenheit
      </div>

      <div className={innerClass}>
        <label className="font-bold mr-2">Description:</label>
        { description}
      </div>

      <div className={innerClass}>
        <label className="font-bold mr-2">Pressure:</label>
        { pressure} hPa
      </div>

      <div className={innerClass}>
        <label className="font-bold mr-2">Humidity:</label>
        { humidity} %
      </div>

      <div className={innerClass}>
        <label className="font-bold mr-2">Wind Speed:</label>
        { windSpeed} miles/hour
      </div>
    </div>
  );
}

export default WeatherItem;
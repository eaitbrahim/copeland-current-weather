# Search current weather
The application allows a user to search for current weather conditions by city name, zip code, or coordinates (GPS, reverse geolocation) using the the Open Weather Map API.

# Requirements
- .Net version 7 or above
- Node Js 16 or above

# Running the project
- Set the Open Weather Map Api Key & Base Url by running the following commands
  1. `cd CurrentWeatherApi`
  2. `dotnet user-secrets set "OpenWeatherId" "VALUE_OF_YOUR_API_KEY"`
  3. `dotnet user-secrets set "OpenWeatherBaseUrl" "https://api.openweathermap.org/"`
- Run the API application using the command `dotnet run`
- In other terminal, navigate to the client app using `cd current-weather-client`
- Install the npm packages for the client application using `npm install`
- Run the client using `npm start`


using CurrentWeatherApi.Data;

namespace CurrentWeatherApi.Services
{
  public interface IOpenWeatherService
    {
        Task<OpenWeatherResponse> GetCurrentWeather(string requestUri); 
    }
}
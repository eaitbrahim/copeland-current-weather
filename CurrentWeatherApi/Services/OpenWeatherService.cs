using CurrentWeatherApi.Data;
using Newtonsoft.Json;

namespace CurrentWeatherApi.Services
{
    public class OpenWeatherService : IOpenWeatherService
    {
        private readonly HttpClient _client;

        public OpenWeatherService(HttpClient client)
        {
            _client = client;
        }
        public async Task<OpenWeatherResponse> GetCurrentWeather(string requestUri)
        {
            return await _client.GetFromJsonAsync<OpenWeatherResponse>(requestUri);
        }

        public async Task<ForcastResponse> GetForcastWeather(string requestUri)
        {
            return await _client.GetFromJsonAsync<ForcastResponse>(requestUri);
        }
    }
}
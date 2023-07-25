using AutoMapper;
using CurrentWeatherApi.Dtos;
using CurrentWeatherApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddHttpClient<IOpenWeatherService, OpenWeatherService>(client => 
{
    client.BaseAddress = new Uri(builder.Configuration["OpenWeatherBaseUrl"]);
});

var app = builder.Build();
var appId = builder.Configuration["OpenWeatherId"];

app.MapGet("api/v1/currentWeatherByCity/{city}",  async (string city, IMapper mapper, IOpenWeatherService weatherSvc) =>
{
    var weatherData = await weatherSvc.GetCurrentWeather($"/data/2.5/weather?q={city}&appid={appId}");
    return Results.Ok(mapper.Map<WeatherReadDto>(weatherData)); 
});

app.MapGet("api/v1/currentWeatherByZip/{zip}",  async (string zip, IMapper mapper, IOpenWeatherService weatherSvc) =>
{
    var weatherData = await weatherSvc.GetCurrentWeather($"/data/2.5/weather?zip={zip}&appid={appId}");
    return Results.Ok(mapper.Map<WeatherReadDto>(weatherData)); 
});

app.MapGet("api/v1/currentWeatherByCoord/{lat}/{lon}",  async (decimal lat, decimal lon, IMapper mapper, IOpenWeatherService weatherSvc) =>
{
    var weatherData = await weatherSvc.GetCurrentWeather($"/data/2.5/weather?lat={lat}&lon={lon}&appid={appId}");
    return Results.Ok(mapper.Map<WeatherReadDto>(weatherData)); 
});

app.Run();
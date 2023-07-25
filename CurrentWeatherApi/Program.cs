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

app.Run();

app.MapGet("api/v1/currentWeatherByCity/{city}",  async (string city, IMapper mapper, IOpenWeatherService weatherSvc) =>
{
    var weatherData = await weatherSvc.GetCurrentWeather($"q={city}&appid={appId}");
    return Results.Ok(mapper.Map<WeatherReadDto>(weatherData)); 
});
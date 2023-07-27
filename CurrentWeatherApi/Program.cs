using AutoMapper;
using CurrentWeatherApi.Dtos;
using CurrentWeatherApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddProblemDetails();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddHttpClient<IOpenWeatherService, OpenWeatherService>(client => 
{
    client.BaseAddress = new Uri(builder.Configuration["OpenWeatherBaseUrl"]);
});
builder.Services.AddCors(opt => 
{
    opt.AddPolicy("CorsPolicy", policy => 
    {
        policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
    });
});

var app = builder.Build();
var appId = builder.Configuration["OpenWeatherId"];
app.UseCors("CorsPolicy");
app.UseExceptionHandler();
app.UseStatusCodePages();

app.MapGet("api/v1/currentWeatherByCity/{city}",  async (string city, IMapper mapper, IOpenWeatherService weatherSvc) =>
{
    var weatherData = await weatherSvc.GetCurrentWeather($"/data/2.5/weather?q={city}&appid={appId}&units=imperial");
    return Results.Ok(mapper.Map<WeatherReadDto>(weatherData)); 
});

app.MapGet("api/v1/currentWeatherByZip/{zip}",  async (string zip, IMapper mapper, IOpenWeatherService weatherSvc) =>
{
    var weatherData = await weatherSvc.GetCurrentWeather($"/data/2.5/weather?zip={zip}&appid={appId}&units=imperial");
    return Results.Ok(mapper.Map<WeatherReadDto>(weatherData)); 
});

app.MapGet("api/v1/currentWeatherByCoord/{lat}/{lon}",  async (decimal lat, decimal lon, IMapper mapper, IOpenWeatherService weatherSvc) =>
{
    var weatherData = await weatherSvc.GetCurrentWeather($"/data/2.5/weather?lat={lat}&lon={lon}&appid={appId}&units=imperial");
    return Results.Ok(mapper.Map<WeatherReadDto>(weatherData)); 
});

app.MapGet("api/v1/forcastWeather/{lat}/{lon}",  async (decimal lat, decimal lon, IMapper mapper, IOpenWeatherService weatherSvc) =>
{
    var weatherData = await weatherSvc.GetForcastWeather($"/data/2.5/forecast?lat={lat}&lon={lon}&appid={appId}&units=imperial");
    
    return Results.Ok(mapper.Map<ForcastReadDto>(weatherData)); 
});

app.Run();
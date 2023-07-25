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

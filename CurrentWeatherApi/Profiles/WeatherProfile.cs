using AutoMapper;
using CurrentWeatherApi.Data;
using CurrentWeatherApi.Dtos;

namespace CurrentWeatherApi.Profiles
{
public class WeatherProfile: Profile
    {
        public WeatherProfile()
        {
            CreateMap<OpenWeatherResponse, WeatherReadDto>()
            .ForMember(dest => dest.Description, opt => 
            {
                opt.MapFrom(src => src.Weather.FirstOrDefault(s => !String.IsNullOrEmpty(s.Description)).Description);
            })
            .ForMember(dest => dest.Temp, opt => 
            {
                opt.MapFrom(src => src.Main.Temp);
            })
            .ForMember(dest => dest.FeelsLike, opt => 
            {
                opt.MapFrom(src => src.Main.FeelsLike);
            })
            .ForMember(dest => dest.Pressure, opt => 
            {
                opt.MapFrom(src => src.Main.Pressure);
            })
            .ForMember(dest => dest.Humidity, opt => 
            {
                opt.MapFrom(src => src.Main.Humidity);
            })
            .ForMember(dest => dest.WindSpeed, opt => 
            {
                opt.MapFrom(src => src.Wind.Speed);
            })
            .ForMember(dest => dest.TimeDataCalculation, opt => 
            {
                opt.MapFrom(src => new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc).AddSeconds( src.Dt ).ToLocalTime());
            });
        }
    }
}
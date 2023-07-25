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
            .ForMember(dest => dest.Himidity, opt => 
            {
                opt.MapFrom(src => src.Main.Himidity);
            });
        }
    }
}
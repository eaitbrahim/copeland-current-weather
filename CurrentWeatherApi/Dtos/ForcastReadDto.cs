using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrentWeatherApi.Dtos
{
    public class ForcastReadDto
    {
        public string Name { get; set; }

        public ICollection<WeatherReadDto> List { get; set; }
    }
}
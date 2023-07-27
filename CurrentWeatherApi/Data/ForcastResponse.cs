using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrentWeatherApi.Data
{
    public class ForcastResponse
    {
        public ICollection<OpenWeatherResponse> List {get; set;} = new List<OpenWeatherResponse>();
    }
}
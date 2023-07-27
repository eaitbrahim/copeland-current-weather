using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrentWeatherApi.Data
{
    public class ForcastResponse
    {

        public City City  {get; set; }
        public ICollection<OpenWeatherResponse> List {get; set;} = new List<OpenWeatherResponse>();
    }

    public class City
    {
        public string Name { get; set; }
    }
}
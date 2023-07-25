namespace CurrentWeatherApi.Dtos
{
  public class WeatherReadDto
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public decimal Temp { get; set; }

        public decimal FeelsLike { get; set; }

        public decimal Pressure { get; set; }

        public int Humidity { get; set; }

        public decimal WindSpeed { get; set; }

        public DateTime  TimeDataCalculation { get; set; }
    }
}
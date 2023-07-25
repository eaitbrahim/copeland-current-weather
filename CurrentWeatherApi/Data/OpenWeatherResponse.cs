namespace CurrentWeatherApi.Data
{
  public class OpenWeatherResponse
    {
        public string Name { get; set; }

        public IEnumerable<Weather> Weather { get; set; }

        public Main Main { get; set; }

        public Wind Wind { get; set; }

        public double Dt { get; set; }
    }

    public class Main
    {
        public decimal Temp { get; set; }

        public decimal FeelsLike { get; set; }

        public decimal Pressure { get; set; }

        public int Humidity { get; set; }

    }

    public class Weather
    {
        public string Main { get; set; }

        public string Description { get; set; }
    }

    public class Wind
    {
        public decimal Speed { get; set; }
    }
}
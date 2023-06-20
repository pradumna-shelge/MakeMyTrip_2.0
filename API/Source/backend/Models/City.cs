using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class City
{
    public int CityId { get; set; }

    public string? CityName { get; set; }

    public string? AirportName { get; set; }

    public string? AirportCode { get; set; }


    public virtual ICollection<Flight> FlightDestinationCities { get; set; } = new List<Flight>();

    public virtual ICollection<Flight> FlightSourceCities { get; set; } = new List<Flight>();
}

using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Flight
{
    public int FlightId { get; set; }

    public int? AirlineId { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public string? FlightName { get; set; }

    public virtual Airline? Airline { get; set; }

    public virtual ICollection<Journey> Journeys { get; set; } = new List<Journey>();
}

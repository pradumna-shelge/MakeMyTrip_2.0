using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Airline
{
    public int AirlineId { get; set; }

    public string? AirlineName { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public string? AirlineLogo { get; set; }

    public virtual User? Created { get; set; }

    public virtual ICollection<Flight> Flights { get; set; } = new List<Flight>();

    public virtual User? LastModification { get; set; }
}

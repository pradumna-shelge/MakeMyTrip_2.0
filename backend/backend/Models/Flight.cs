using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Flight
{
    public int FlightId { get; set; }

    public string? FlightNo { get; set; }

    public int? AirlineId { get; set; }

    public int? EconomyClass { get; set; }

    public int? FirstClass { get; set; }

    public int? Businessclass { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual Airline? Airline { get; set; }

    public virtual FlightclassStructure? BusinessclassNavigation { get; set; }

    public virtual User? Created { get; set; }

    public virtual FlightclassStructure? EconomyClassNavigation { get; set; }

    public virtual FlightclassStructure? FirstClassNavigation { get; set; }

    public virtual ICollection<Journey> Journeys { get; set; } = new List<Journey>();

    public virtual User? LastModification { get; set; }
}

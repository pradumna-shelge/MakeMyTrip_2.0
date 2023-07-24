using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SeatClassType
{
    public int SeatClassId { get; set; }

    public string? SeatClassName { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual User? Created { get; set; }

    public virtual ICollection<FlightclassStructure> FlightclassStructures { get; set; } = new List<FlightclassStructure>();

    public virtual ICollection<JourneyClassPrice> JourneyClassPrices { get; set; } = new List<JourneyClassPrice>();

    public virtual User? LastModification { get; set; }

    public virtual ICollection<Passenger> Passengers { get; set; } = new List<Passenger>();

    public virtual ICollection<SeatLocation> SeatLocations { get; set; } = new List<SeatLocation>();
}

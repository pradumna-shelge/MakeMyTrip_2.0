using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class AirportDatum
{
    public int AirportId { get; set; }

    public string? AirportName { get; set; }

    public string? AirportCode { get; set; }

    public int? AddressId { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual LocationDatum? Address { get; set; }

    public virtual User? Created { get; set; }

    public virtual ICollection<Journey> JourneyDestinations { get; set; } = new List<Journey>();

    public virtual ICollection<Journey> JourneySources { get; set; } = new List<Journey>();

    public virtual User? LastModification { get; set; }
}

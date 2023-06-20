using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class LocationDatum
{
    public int LocationId { get; set; }

    public string? LocationName { get; set; }

    public int? CountryId { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual ICollection<AirportDatum> AirportData { get; set; } = new List<AirportDatum>();

    public virtual LocationDatum? Country { get; set; }

    public virtual User? Created { get; set; }

    public virtual ICollection<LocationDatum> InverseCountry { get; set; } = new List<LocationDatum>();

    public virtual User? LastModification { get; set; }
}

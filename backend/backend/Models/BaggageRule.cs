using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class BaggageRule
{
    public int BaggageRuleId { get; set; }

    public int? AirlineId { get; set; }

    public int? FlightclassStructureId { get; set; }

    public int? BaggageTypeId { get; set; }

    public decimal? MaxWeight { get; set; }

    public decimal? DefaultWeight { get; set; }

    public decimal? Fee { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual Airline? Airline { get; set; }

    public virtual BaggageType? BaggageType { get; set; }

    public virtual User? Created { get; set; }

    public virtual FlightclassStructure? FlightclassStructure { get; set; }

    public virtual User? LastModification { get; set; }
}

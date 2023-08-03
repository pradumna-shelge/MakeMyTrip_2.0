using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class FlightclassStructure
{
    public int FlightclassStructureId { get; set; }

    public int? SeatClassId { get; set; }

    public int? RowsStart { get; set; }

    public int? RowsEnd { get; set; }

    public string? ColumnsStart { get; set; }

    public string? ColumnsEnd { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual ICollection<BaggageRule> BaggageRules { get; set; } = new List<BaggageRule>();

    public virtual User? Created { get; set; }

    public virtual ICollection<Flight> FlightBusinessclassNavigations { get; set; } = new List<Flight>();

    public virtual ICollection<Flight> FlightEconomyClassNavigations { get; set; } = new List<Flight>();

    public virtual ICollection<Flight> FlightFirstClassNavigations { get; set; } = new List<Flight>();

    public virtual User? LastModification { get; set; }

    public virtual SeatClassType? SeatClass { get; set; }
}

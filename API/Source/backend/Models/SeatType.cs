using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SeatType
{
    public int SeatTypeId { get; set; }

    public string? SeatTypeName { get; set; }

    public int? LocationId { get; set; }

    public virtual ICollection<SeatType> InverseLocation { get; set; } = new List<SeatType>();

    public virtual SeatType? Location { get; set; }
}

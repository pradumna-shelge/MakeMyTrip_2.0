using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Seat
{
    public int SeatId { get; set; }

    public int? Rows { get; set; }

    public string? Column { get; set; }

    public int? FlightId { get; set; }

    public int? SeatTypeId { get; set; }

    public int? Status { get; set; }

    public virtual Flight? Flight { get; set; }

    public virtual SeatType? SeatType { get; set; }

    public virtual StatusDatum? StatusNavigation { get; set; }
}

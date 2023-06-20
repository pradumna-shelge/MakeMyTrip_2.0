using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SeatTypePrice
{
    public int? SeatTypeId { get; set; }

    public int? FlightId { get; set; }

    public decimal? Price { get; set; }

    public int? AvailableSeats { get; set; }

    public virtual Flight? Flight { get; set; }

    public virtual SeatType? SeatType { get; set; }
}

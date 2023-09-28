using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class JourneyClassPrice
{
    public int JourneyClassPriceId { get; set; }

    public int? JourneyClassType { get; set; }

    public int? Percentage { get; set; }

    public int? AirlineId { get; set; }

    public virtual Airline? Airline { get; set; }

    public virtual SeatClassType? JourneyClassTypeNavigation { get; set; }
}

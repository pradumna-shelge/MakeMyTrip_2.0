using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class JourneyClassPrice
{
    public int JourneyClassPriceId { get; set; }

    public int? JourneyClassType { get; set; }

    public int? Percentage { get; set; }

    public virtual ICollection<Journey> JourneyBussinessClassNavigations { get; set; } = new List<Journey>();

    public virtual SeatClassType? JourneyClassTypeNavigation { get; set; }

    public virtual ICollection<Journey> JourneyEconomyClassNavigations { get; set; } = new List<Journey>();

    public virtual ICollection<Journey> JourneyFirstClassNavigations { get; set; } = new List<Journey>();
}

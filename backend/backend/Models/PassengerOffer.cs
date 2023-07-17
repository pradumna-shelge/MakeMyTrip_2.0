using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PassengerOffer
{
    public int PassengerOfferId { get; set; }

    public int? PassengerType { get; set; }

    public int? Percentage { get; set; }

    public virtual ICollection<Journey> JourneyAdultNavigations { get; set; } = new List<Journey>();

    public virtual ICollection<Journey> JourneyChildNavigations { get; set; } = new List<Journey>();

    public virtual ICollection<Journey> JourneyInfantsNavigations { get; set; } = new List<Journey>();

    public virtual PassengerType? PassengerTypeNavigation { get; set; }
}

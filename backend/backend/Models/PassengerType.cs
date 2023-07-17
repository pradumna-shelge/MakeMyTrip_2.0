using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PassengerType
{
    public int PassengerTypeId { get; set; }

    public string? PassengerType1 { get; set; }

    public virtual ICollection<PassengerOffer> PassengerOffers { get; set; } = new List<PassengerOffer>();
}

using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Booking
{
    public long BookingId { get; set; }

    public int? JourneyId { get; set; }

    public int? UserId { get; set; }

    public DateTime? BookingDate { get; set; }

    public decimal? TotalFare { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual User? Created { get; set; }

    public virtual Journey? Journey { get; set; }

    public virtual User? LastModification { get; set; }

    public virtual ICollection<Passenger> Passengers { get; set; } = new List<Passenger>();

    public virtual User? User { get; set; }
}

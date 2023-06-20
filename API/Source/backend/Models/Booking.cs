using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Booking
{
    public int BookingId { get; set; }

    public int? UserId { get; set; }

    public int? JourneyId { get; set; }

    public DateTime? BookingDate { get; set; }

    public decimal? TotalPrice { get; set; }

    public string? Status { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public int? Bookingstatus { get; set; }

    public virtual StatusDatum? BookingstatusNavigation { get; set; }

    public virtual Journey? Journey { get; set; }

    public virtual ICollection<Passenger> Passengers { get; set; } = new List<Passenger>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual User? User { get; set; }
}

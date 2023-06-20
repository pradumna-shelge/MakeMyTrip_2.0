using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Passenger
{
    public int PassengerId { get; set; }

    public int? SeatTypeId { get; set; }

    public int? BookingId { get; set; }

    public int? SeatRow { get; set; }

    public string? SeatCol { get; set; }

    public string? Name { get; set; }

    public int? Age { get; set; }

    public string? Gender { get; set; }

    public string? IdentificationCode { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual Booking? Booking { get; set; }

    public virtual SeatType? SeatType { get; set; }
}

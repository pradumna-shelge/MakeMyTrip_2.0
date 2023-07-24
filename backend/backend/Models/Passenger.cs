using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Passenger
{
    public int PassengerId { get; set; }

    public long? BookingId { get; set; }

    public string? FullName { get; set; }

    public string? Gender { get; set; }

    public string? SeatNumber { get; set; }

    public int? SeatClass { get; set; }

    public int? PassengerTypeId { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual Booking? Booking { get; set; }

    public virtual User? Created { get; set; }

    public virtual User? LastModification { get; set; }

    public virtual PassengerType? PassengerType { get; set; }

    public virtual SeatClassType? SeatClassNavigation { get; set; }
}

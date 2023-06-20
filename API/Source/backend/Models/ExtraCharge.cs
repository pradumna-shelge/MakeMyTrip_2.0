using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ExtraCharge
{
    public int Id { get; set; }

    public string? ExtraChargeType { get; set; }

    public decimal? Amount { get; set; }

    public int? SeatRow { get; set; }

    public string? SeatCol { get; set; }

    public int? FlightId { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual Flight? Flight { get; set; }
}

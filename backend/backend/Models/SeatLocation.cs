using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SeatLocation
{
    public int SeatTypeId { get; set; }

    public string? SeatTypeName { get; set; }

    public int? ClassType { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual SeatClassType? ClassTypeNavigation { get; set; }

    public virtual User? Created { get; set; }

    public virtual User? LastModification { get; set; }
}

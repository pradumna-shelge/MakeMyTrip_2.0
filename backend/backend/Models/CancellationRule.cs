using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class CancellationRule
{
    public int RuleId { get; set; }

    public int? AirlineId { get; set; }

    public decimal? AirlineFee { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public int? CancellationTypeId { get; set; }

    public virtual Airline? Airline { get; set; }

    public virtual CancellationType? CancellationType { get; set; }

    public virtual User? Created { get; set; }

    public virtual User? LastModification { get; set; }
}

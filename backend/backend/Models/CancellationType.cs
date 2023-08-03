using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class CancellationType
{
    public int TypeId { get; set; }

    public string TypeName { get; set; } = null!;

    public int? HoursBeforeFlight { get; set; }

    public virtual ICollection<CancellationRule> CancellationRules { get; set; } = new List<CancellationRule>();
}

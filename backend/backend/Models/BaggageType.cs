using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class BaggageType
{
    public int BaggageTypeId { get; set; }

    public string? TypeName { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual ICollection<BaggageRule> BaggageRules { get; set; } = new List<BaggageRule>();

    public virtual User? Created { get; set; }

    public virtual User? LastModification { get; set; }
}

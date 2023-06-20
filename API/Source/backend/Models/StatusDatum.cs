using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class StatusDatum
{
    public int Id { get; set; }

    public string? Statusval { get; set; }

    public int? StatusFor { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public virtual ICollection<StatusDatum> InverseStatusForNavigation { get; set; } = new List<StatusDatum>();

    public virtual ICollection<Journey> Journeys { get; set; } = new List<Journey>();

    public virtual StatusDatum? StatusForNavigation { get; set; }
}

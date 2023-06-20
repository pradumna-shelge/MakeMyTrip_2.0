    using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Journey
{
    public int JourneyId { get; set; }

    public int? FlightId { get; set; }

    public DateTime? Arrivaltime { get; set; }

    public DateTime? Departuretime { get; set; }

    public int? DestinationId { get; set; }

    public int? SourceId { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public int? StatusFor { get; set; }

    public decimal? SeatbasicPrice { get; set; }

    public virtual AirportDatum? Destination { get; set; }

    public virtual Flight? Flight { get; set; }

    public virtual AirportDatum? Source { get; set; }

    public virtual StatusDatum? StatusForNavigation { get; set; }
}

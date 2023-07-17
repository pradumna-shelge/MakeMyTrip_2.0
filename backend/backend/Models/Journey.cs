﻿using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Journey
{
    public int JourneyId { get; set; }

    public int? FlightId { get; set; }

    public int? DestinationId { get; set; }

    public int? SourceId { get; set; }

    public DateTime? DepartureTime { get; set; }

    public DateTime? ArrivalTime { get; set; }

    public int? Distance { get; set; }

    public decimal? SeatbasicPrice { get; set; }

    public int? EconomyClass { get; set; }

    public int? FirstClass { get; set; }

    public int? BussinessClass { get; set; }

    public int? Adult { get; set; }

    public int? Child { get; set; }

    public int? Infants { get; set; }

    public virtual PassengerOffer? AdultNavigation { get; set; }

    public virtual JourneyClassPrice? BussinessClassNavigation { get; set; }

    public virtual PassengerOffer? ChildNavigation { get; set; }

    public virtual AirportDatum? Destination { get; set; }

    public virtual JourneyClassPrice? EconomyClassNavigation { get; set; }

    public virtual JourneyClassPrice? FirstClassNavigation { get; set; }

    public virtual Flight? Flight { get; set; }

    public virtual PassengerOffer? InfantsNavigation { get; set; }

    public virtual AirportDatum? Source { get; set; }
}
﻿using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class Airpots : genericeBase<AirportDatum>, IAirportData
    {
        public Airpots(MakeMyTripContext context) : base(context)
        {
        }
    }
}

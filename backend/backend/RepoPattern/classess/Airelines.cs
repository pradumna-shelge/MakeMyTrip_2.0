using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class Airelines : genericeBase<Airline>, IAirlines
    {
        public Airelines(MakeMyTripContext context) : base(context)
        {
        }
    }
}

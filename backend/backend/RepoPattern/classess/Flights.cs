using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class Flights : genericeBase<Flight>, Iflight
    {
        public Flights(MakeMyTripContext context) : base(context)
        {
        }
    }
}

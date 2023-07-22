using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class passenger : genericeBase<Passenger>, IPassenger
    {
        public passenger(MakeMyTripContext context) : base(context)
        {
        }
    }
}

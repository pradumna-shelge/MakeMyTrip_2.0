using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class booking : genericeBase<Booking>, Ibooking
    {
        public booking(MakeMyTripContext context) : base(context)
        {
        }
    }
}

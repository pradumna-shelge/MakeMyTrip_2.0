using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class Cancellationtypes : genericeBase<CancellationType>, ICancellationtype
    {
        public Cancellationtypes(MakeMyTripContext context) : base(context)
        {
        }
    }
}

using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class Cityes : genericeBase<LocationDatum>, ICity
    {
        public Cityes(MakeMyTripContext context) : base(context)
        {
        }
    }
}

using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class Baggagetype : genericeBase<BaggageType>, IBaggagetypes
    {
        public Baggagetype(MakeMyTripContext context) : base(context)
        {
        }
    }
}

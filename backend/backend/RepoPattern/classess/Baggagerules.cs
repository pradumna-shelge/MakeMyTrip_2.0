using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class Baggagerules : genericeBase<BaggageRule>, IBaggagerule
    {
        public Baggagerules(MakeMyTripContext context) : base(context)
        {
        }
    }
}

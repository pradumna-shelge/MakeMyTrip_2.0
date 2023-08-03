using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class Cancellationrule : genericeBase<CancellationRule>, ICancellationrules
    {
        public Cancellationrule(MakeMyTripContext context) : base(context)
        {
        }
    }
}

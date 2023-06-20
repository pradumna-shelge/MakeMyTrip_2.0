using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class Journeyclass : genericeBase<Journey>,IJourney
    {
        public Journeyclass(BookMyShowContext context) : base(context)
        {
        }
    }
}

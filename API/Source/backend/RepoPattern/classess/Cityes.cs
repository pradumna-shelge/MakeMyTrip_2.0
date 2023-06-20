using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class Cityes : genericeBase<LocationDatum>, ICity
    {
        public Cityes(BookMyShowContext context) : base(context)
        {
        }
    }
}

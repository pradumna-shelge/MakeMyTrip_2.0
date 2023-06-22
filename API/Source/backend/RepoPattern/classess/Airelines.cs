using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class Airelines : genericeBase<Airline>, IAirlines
    {
        public Airelines(BookMyShowContext context) : base(context)
        {
        }
    }
}

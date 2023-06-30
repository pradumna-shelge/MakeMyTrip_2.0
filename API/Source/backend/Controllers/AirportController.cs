 using backend.Models;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirportController : ControllerBase
    {
        private readonly IAirportData _airport;
        private readonly ICity _city;

        public AirportController(IAirportData airport,ICity city)
        {
                _airport = airport;
            _city = city;
        }

        [HttpGet]
        public  async Task< IActionResult> Get()
        {
            var preAirport = await _airport.Get();
            var preCity =await _city.Get();

            var resp = from a in preAirport
                       join c in preCity on a.AddressId equals c.LocationId
                       join cou in preCity on c.CountryId equals cou.LocationId
                       select new
                       {
                           AirportId = a.AirportId,
                           AirportCode = a.AirportCode,
                           City = c.LocationName,
                           AirportName = a.AirportName,
                           Country=cou.LocationName
                       };
                              

            




            return   Ok(resp);

        }
    }
}

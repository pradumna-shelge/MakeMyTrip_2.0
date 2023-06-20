using backend.Models;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class searchData : ControllerBase
    {
        private readonly IAirportData _airport;
        private readonly ICity _city;
        private readonly IJourney _journey;

        public searchData(IAirportData airport,ICity city,IJourney journey)
        {
                _airport = airport;
            _city = city;
            _journey = journey;
        }

        [HttpGet]
        public  IActionResult Get()
        {
            var preAirport =  _airport.Get();
            var preCity = _city.Get();

            var resp = from a in preAirport
                       join c in preCity on a.AddressId equals c.LocationId
                       join cou in preCity on c.CountryId equals cou.LocationId
                       select new
                       {
                           airportId = a.AirportId,
                           airportCode = a.AirportCode,
                           city = c.LocationName,
                           airportName = a.AirportName,
                           country=cou.LocationName
                       };

            return   Ok(resp);

        }

        [HttpPost]
        public IActionResult Post(string value)
        {

            var ob = _airport.Get().FirstOrDefault(x => x.AirportCode == value);
            if (ob == null)
            {
                return NotFound();
            }
            var journay = from x in _journey.Get()
                          where x.JourneyId == ob.AirportId
                          select new { 
                          JournayId = x.JourneyId,
                          Arrival = x.Arrivaltime,
                          Depature = x.Departuretime,
                         
                          };

            return Ok(journay);
        }
    }
}

using backend.DTOs;
using backend.Models;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class searchData : ControllerBase
    {
        private readonly IAirportData _airport;
        private readonly ICity _city;
        private readonly IJourney _journey;
        private readonly Iflight _flight;

        public searchData(IAirportData airport,ICity city,IJourney journey,Iflight flights)
        {
                _airport = airport;
            _city = city;
            _journey = journey;
            _flight = flights;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var preAirport = await _airport.Get();
            var preCity = await _city.Get();

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
        public async Task<IActionResult> Post(JourneySearch obj)
        {

            
            if (obj == null)
            {
                return BadRequest();
            }
            var journays = await _journey.Get();
            var flights = await _flight.Get();
            var journay =  from x in journays
                               //where x.SourceId == obj.fromID
                               //&& x.DestinationId == obj.toID
                           select new { 
                           
                          JournayId = x.JourneyId,
                          Arrival = x.Arrivaltime,
                          Depature = x.Departuretime,
                          airlineId = flights.FirstOrDefault(f=>f.FlightId == x.FlightId)?.AirlineId ?? -1
                          };

            if (journay == null)
            {
                return NotFound();
            }
            return Ok(journay);
        }
    }
}

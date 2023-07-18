using backend.DTOs;
using backend.Models;
using backend.RepoPattern.classess;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace backend.Controllers
{
    [Route("makeMyTrip/[controller]")]
    [ApiController]
    public class searchData : ControllerBase
    {
        private readonly IAirportData _airport;
        private readonly ICity _city;
        private readonly IJourney _journey;
        private readonly Iflight _flight;
        private readonly IAirlines _airline;

        public searchData(IAirportData airport,ICity city,IJourney journey,Iflight flights,IAirlines airline)
        {
                _airport = airport;
            _city = city;
            _journey = journey;
            _flight = flights;
            _airline = airline;
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

    //    id: number,
    //airline: AirlineInterface,
    //flightNumber: string
    //from:AirportModel,
    //to: AirportModel,
    //departureTime: Date,
    //arrivalTime: Date,
    //price: number,
    //duration: string,
    //baggage :number,
    //cabin: number,
    //Surcharges: number



            if (obj == null)
            {
                return BadRequest();
            }
            var journays = await _journey.Get();
            var flights = await _flight.Get();
            var airportData = await _airport.Get();
            var airlines = await _airline.Get();

            var journay = from j in journays
                          join f in flights on j.FlightId equals f.FlightId
                          join fa in airportData on j.SourceId equals fa.AirportId
                          join toAirport in airportData on j.DestinationId equals toAirport.AirportId
                          where j.SourceId == obj.fromID &&
                                j.DestinationId == obj.toID &&
                                j.DepartureTime.Date >= obj.depatureDate.Date
                          select new
                          {
                              JournayId = j.JourneyId,
                              airlineId = airlines.FirstOrDefault(a => a.AirlineId == f.AirlineId).AirlineId,
                              flightNumber = f.FlightNo,
                              to = toAirport.AirportId,
                              fromid = fa.AirportId,
                              departureTime = j.DepartureTime,
                              arrivalTime = j.ArrivalTime,
                              price = j.SeatbasicPrice,
                              duration = (j.ArrivalTime - j.DepartureTime).ToString(),
                              baggage = 17,
                              cabin = 7,
                              Surcharges = 700
                          };



            if (journay == null)
            {
                return NotFound();
            }
            

            if (obj.ReturnDate != null)
            {

                var journay1 = from j in journays
                              join f in flights on j.FlightId equals f.FlightId
                              join fa in airportData on j.SourceId equals fa.AirportId
                              join toAirport in airportData on j.DestinationId equals toAirport.AirportId
                              where j.SourceId == obj.toID &&
                                    j.DestinationId == obj.fromID &&
                                    j.ArrivalTime.Value.Date >= obj.ReturnDate.Value.Date
                              select new
                              {
                                  JournayId = j.JourneyId,
                                  airline = airlines.FirstOrDefault(a => a.AirlineId == f.AirlineId),
                                  flightNumber = f.FlightNo,
                                  airlineId = airlines.FirstOrDefault(a => a.AirlineId == f.AirlineId).AirlineId,
                                  to = toAirport.AirportId,
                                  fromid = fa.AirportId,
                                  departureTime = j.DepartureTime,
                                  arrivalTime = j.ArrivalTime,
                                  price = j.SeatbasicPrice,
                                  duration = (j.ArrivalTime - j.DepartureTime).ToString(),
                                  baggage = 17,
                                  cabin = 7,
                                  Surcharges = 700
                              };



                return Ok(new { dep = journay, ren = journay1 });
            }


           
            return Ok(new {dep= journay  });
        }
    }
}

using backend.DTOs;
using backend.Models;
using backend.RepoPattern.classess;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        private readonly MakeMyTripContext _context;
        private readonly Ibooking _booking;
        private readonly IPassenger _passenger;
        private readonly IBaggagetypes _baggagetypes;
        private readonly IBaggagerule _baggagerule;
        private readonly ICancellationrules _cancellationrules;
        private readonly ICancellationtype _ICancellationtype;

        public searchData(MakeMyTripContext context, IAirportData airport,ICity city,IJourney journey,
            Iflight flights,IAirlines airline,Ibooking ibooking,IPassenger passenger,IBaggagetypes baggagetypes
            ,IBaggagerule baggagerule, ICancellationrules cancellationrules, ICancellationtype cancellationtype)
        {
                _airport = airport;
            _city = city;
            _journey = journey;
            _flight = flights;
            _airline = airline;
            _context = context;
            _booking = ibooking;
            _passenger = passenger;

            _baggagetypes = baggagetypes;
            _baggagerule = baggagerule;

            _cancellationrules = cancellationrules;
            _ICancellationtype = cancellationtype;

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
            var airportData = await _airport.Get();
            var airlines = await _airline.Get();
            var bookings = await _booking.Get(); 
            var passengers = await _passenger.Get();

            var canRules =  await _cancellationrules.Get();
            var canTypes = await _ICancellationtype.Get();

            var bagR = await _baggagerule.Get();
            var bagT = await _baggagetypes.Get();


            var journay = from j in journays
                          join f in flights on j.FlightId equals f.FlightId
                          join a in airlines on f.AirlineId equals a.AirlineId
                          join fa in airportData on j.SourceId equals fa.AirportId
                          join toAirport in airportData on j.DestinationId equals toAirport.AirportId
                          where j.SourceId == obj.fromID &&
                                j.DestinationId == obj.toID &&
                                j.DepartureTime?.Date == obj.depatureDate.Date

                          select new
                          {
                              JourneyId = j.JourneyId,
                              airlineId = a.AirlineId,
                              flightNumber = f.FlightNo,
                              to = toAirport.AirportId,
                              fromid = fa.AirportId,
                              departureTime = j.DepartureTime,
                              arrivalTime = j.ArrivalTime,
                              price = j.SeatbasicPrice,
                              duration = (j.ArrivalTime - j.DepartureTime).ToString(),
                              baggageRule = (from br in bagR
                                             join bt in bagT on br.BaggageTypeId equals bt.BaggageTypeId
                                             where br.AirlineId == a.AirlineId && br.FlightclassStructureId == obj.seatClass
                                             orderby bt.BaggageTypeId
                                         select new
                                         {
                                           type= bt.TypeName,
                                           defaultWeight = br.DefaultWeight,
                                           max = br.MaxWeight,
                                           price = br.Fee
                                         }
                                         ),
                              Surcharges = 700,
                              seatStature = _context.SeatClassDtos.FromSqlRaw($"exec GetSeatStructureForFlight @FlightId={f.FlightId}"),
                              bookedSeats = (
                                             from  p in passengers
                                             join b in bookings on p.BookingId equals b.BookingId
                                             where p.SeatClass == obj.seatClass
                                             && b.JourneyId == j.JourneyId
                                             select p.SeatNumber).ToList()

        };



            if (journay == null)
            {
                return NotFound();
            }
            

            if (obj.ReturnDate != null )
            {
                var journay1 = from j in journays
                              join f in flights on j.FlightId equals f.FlightId
                               join a in airlines on f.AirlineId equals a.AirlineId

                               join fa in airportData on j.SourceId equals fa.AirportId
                              join toAirport in airportData on j.DestinationId equals toAirport.AirportId
                              where j.SourceId == obj.toID &&
                                    j.DestinationId == obj.fromID &&
                                    j.ArrivalTime.Value.Date == obj.ReturnDate.Value.Date
                              select new
                              {
                                  JourneyId = j.JourneyId,
                                  airlineId = a.AirlineId,
                                  flightNumber = f.FlightNo,
                                  to = toAirport.AirportId,
                                  fromid = fa.AirportId,
                                  departureTime = j.DepartureTime,
                                  arrivalTime = j.ArrivalTime,
                                  price = j.SeatbasicPrice,
                                  duration = (j.ArrivalTime - j.DepartureTime).ToString(),
                                  baggageRule = (from br in bagR
                                                 join bt in bagT on br.BaggageTypeId equals bt.BaggageTypeId
                                                 where br.AirlineId == a.AirlineId && br.FlightclassStructureId == obj.seatClass
                                                 orderby bt.BaggageTypeId
                                                 select new
                                                 {
                                                     type = bt.TypeName,
                                                     defaultWeight = br.DefaultWeight,
                                                     max = br.MaxWeight,
                                                     price = br.Fee
                                                 }
                                         ),
                                  Surcharges = 700,
                                  seatStature = _context.SeatClassDtos.FromSqlRaw($"exec GetSeatStructureForFlight @FlightId={f.FlightId}"),
                                  bookedSeats = (
                                             from p in passengers
                                             join b in bookings on p.BookingId equals b.BookingId
                                             where p.SeatClass == obj.seatClass
                                             && b.JourneyId == j.JourneyId
                                             select p.SeatNumber).ToList()
                              };



                return Ok(new { dep = journay, ren = journay1 });
            }


           
            return Ok(new {dep= journay  });
        }
    }
}

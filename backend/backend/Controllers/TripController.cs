using backend.DTOs;
using backend.Models;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("makeMyTrip/[controller]")]
    [ApiController]
    public class TripController : ControllerBase
    {

        private readonly IAirportData _airport;
        private readonly ICity _city;
        private readonly IJourney _journey;
        private readonly Iflight _flight;
        private readonly IAirlines _airline;
        private readonly MakeMyTripContext _context;
        private readonly Ibooking _booking;
        private readonly IPassenger _passenger;
        private readonly IUser _user;

        public TripController(MakeMyTripContext context, ICity city1, IAirportData airport, ICity city, IJourney journey, Iflight flights, IAirlines airline, Ibooking ibooking, IPassenger passenger, IUser user)
        {
            _airport = airport;
            _city = city;
            _journey = journey;
            _flight = flights;
            _airline = airline;
            _context = context;
            _booking = ibooking;
            _passenger = passenger;
            _user = user;
            _city = city1;
        }



        [HttpGet]

        public async Task<IActionResult> userTrip(string email)
        {

            var journays = await _journey.Get();
            var flights = await _flight.Get();
            var airportData = await _airport.Get();
            var airlines = await _airline.Get();
            var bookings = await _booking.Get();
            var users = await _user.Get();
            var passengers = await _passenger.Get();
            var cities = await _city.Get();
            var userID = users.FirstOrDefault(u => u.UserEmail == email)?.UserId;


            if(userID == null)
            {
                return NotFound();
            }
            var trips = from j in journays
                        join b in bookings on j.JourneyId equals b.JourneyId
                        join f in flights on j.FlightId equals f.FlightId
                        join a in airlines on f.AirlineId equals a.AirlineId
                        join fromA in airportData on j.SourceId equals fromA.AirportId
                        join toA in airportData on j.DestinationId equals toA.AirportId
                        where b.UserId == userID
                        select new
                        {
                            prnNo = b.BookingId,
                            airline = a.AirlineId,
                            fromAirport = cities.FirstOrDefault(c => c.LocationId == fromA.AddressId)?.LocationName,
                            toAirport = cities.FirstOrDefault(c => c.LocationId == toA.AddressId)?.LocationName,
                            passengers = (from p in passengers
                                          where p.BookingId == b.BookingId
                                          select new
                                          {
                                              name = p.FullName,
                                              gender = p.Gender,
                                              seat = p.SeatNumber
                                          }).Count(),
                            date = b.BookingDate,
                            total = b.TotalFare
                        };

            return Ok(trips);
        }



        [HttpPost]
        public async Task<ActionResult> trip(tripDto ob)
        {

            var journays = await _journey.Get();
            var flights = await _flight.Get();
            var airportData = await _airport.Get();
            var airlines = await _airline.Get();
            var bookings = await _booking.Get();
            var users = await _user.Get();
            var passengers = await _passenger.Get();
            var cities = await _city.Get();
            var userID = users.FirstOrDefault(u => u.UserEmail == ob.email)?.UserId;
            if (userID == null)
            {
                return NotFound();
            }
            var trips = from j in journays
                        join b in bookings on j.JourneyId equals b.JourneyId
                        join f in flights on j.FlightId equals f.FlightId
                        join a in airlines on f.AirlineId equals a.AirlineId
                        join fromA in airportData on j.SourceId equals fromA.AirportId
                        join toA in airportData on j.DestinationId equals toA.AirportId
                        where b.UserId == userID && b.BookingId ==ob.id
                        select new
                        {

                            prnNo = b.BookingId,
                            airline = a.AirlineId,
                            fromAirport = cities.FirstOrDefault(c => c.LocationId == fromA.AddressId)?.LocationName,
                            toAirport = cities.FirstOrDefault(c => c.LocationId == toA.AddressId)?.LocationName,
                            passengers = (from p in passengers
                                          where p.BookingId == b.BookingId
                                          select new
                                          {
                                              name = p.FullName,
                                              gender = p.Gender,
                                              seat = p.SeatNumber
                                          }),
                            date = b.BookingDate,
                            total = b.TotalFare
                        };

            return Ok(trips.First());

        }

    }


}

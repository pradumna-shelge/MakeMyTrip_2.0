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

        public TripController(MakeMyTripContext context, IAirportData airport, ICity city, IJourney journey, Iflight flights, IAirlines airline, Ibooking ibooking, IPassenger passenger, IUser user)
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
        }



        [HttpGet]

        public async  Task< IActionResult> userTrip( string email)
        {

            var journays = await _journey.Get();
            var flights = await _flight.Get();
            var airportData = await _airport.Get();
            var airlines = await _airline.Get();
            var bookings = await _booking.Get();
            var users = await _user.Get();
            var passengers = await _passenger.Get();

            var userID = users.FirstOrDefault(u=>u.UserEmail == email)?.UserId;
            var trips = from j in journays
                             join b in bookings on j.JourneyId equals b.JourneyId
                             
                             where b.UserId == userID
                             select new
                             {
                                 prnNo = b.BookingId,
                                 fromId = j.SourceId,
                                 toId = j.DestinationId,
                                 passengers = from p in passengers where p.BookingId == b.BookingId select new
                                 {
                                     name = p.FullName,
                                     gender = p.Gender,
                                     seat = p.SeatNumber
                                 },
                                 date = b.BookingDate
                             };

            return Ok(trips);
        }
    }



}

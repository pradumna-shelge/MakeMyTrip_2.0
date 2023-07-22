using backend.DTOs;
using backend.Models;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("makeMyTrip/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IPassenger _passenger;
        private readonly Ibooking _booking;
        private readonly IJourney _journey;

        public BookingController(IPassenger passenger, Ibooking ibooking,IJourney journey) {
                _passenger = passenger;
            _booking = ibooking;
            _journey = journey;

        }


       
        [HttpPost]
        public async Task<IActionResult> Post(BookingDto obj)
        {
            if(obj == null)
            {
                return BadRequest(new {mes="data is empty"});
            }

            var journeyList = await _journey.Get();

            var journey1 = journeyList.FirstOrDefault(ob=>ob.JourneyId == obj.FirstJourneyId);

            if(journey1 == null)
            {
                return BadRequest(new { mes = "journey not found" });
            }

            var booking1 = new Booking()
            {
                JourneyId = obj.FirstJourneyId,
                BookingDate = DateTime.Now,
                UserId = obj.userId,

            };

          await  _booking.Post(booking1);
           

            foreach(var x in obj.passengerList)
            {
                var pass = new Passenger()
                {
                    FullName = x.fullname,
                    BookingId = booking1.BookingId,
                    PassengerTypeId = x.passengerType,
                    SeatNumber= x.seatNo

                };

              await  _passenger.Post(pass);
            }

            return Ok(booking1);
            
        }

   
        }


    }

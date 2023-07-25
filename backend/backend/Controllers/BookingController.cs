using backend.DTOs;
using backend.Models;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace backend.Controllers
{
    [Route("makeMyTrip/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IPassenger _passenger;
        private readonly Ibooking _booking;
        private readonly IJourney _journey;
        private readonly IUser _user;

        public BookingController(IPassenger passenger, Ibooking ibooking,IJourney journey,IUser user) {
                _passenger = passenger;
            _booking = ibooking;
            _journey = journey;
            _user = user;

        }


       
        [HttpPost]
        public async Task<IActionResult> Post(BookingDto obj)
        {
            if(obj == null)
            {
                return BadRequest(new {mes="data is empty"});
            }

            var journeyList = await _journey.Get();
            var users = await _user.Get();

            var journey1 = journeyList.FirstOrDefault(ob=>ob.JourneyId == obj.firstJourneyId);

            if(journey1 == null)
            {
                return BadRequest(new { mes = "journey not found" });
            }
            var prnNumber = GenerateUniquePRNNumber();

            var booking1 = new Booking()
            {
                BookingId = prnNumber,
                JourneyId = obj.firstJourneyId,
                BookingDate = DateTime.Now,
                UserId = users.FirstOrDefault(ob=>ob.UserEmail == obj.userEmail)?.UserId,
                TotalFare = Convert.ToDecimal( obj.totalPrice)

            };

          await  _booking.Post(booking1);
           

            foreach(var x in obj.passengerList)
            {
                var pass = new Passenger()
                {
                    FullName = x.fullname,
                    BookingId = booking1.BookingId,
                    PassengerTypeId = x.passengerType,
                    SeatNumber= x.seatNo,
                    Gender = x.gender,
                    SeatClass = obj.seatClass
                    

                };

              await  _passenger.Post(pass);
            }


            if (obj.returnJourneyId != null)
            {

           var   journey2 = journeyList.FirstOrDefault(ob => ob.JourneyId == obj.returnJourneyId);

            if (journey2 == null)
            {
                return BadRequest(new { mes = "journey not found" });
            }
             prnNumber = GenerateUniquePRNNumber();

            var booking2 = new Booking()
            {
                BookingId = prnNumber,
                JourneyId = obj.returnJourneyId,
                BookingDate = DateTime.Now,
                UserId = users.FirstOrDefault(ob => ob.UserEmail == obj.userEmail)?.UserId,
                TotalFare = Convert.ToDecimal(obj.totalPrice)

            };

            await _booking.Post(booking2);


            foreach (var x in obj.passengerList)
            {
                var pass = new Passenger()
                {
                    FullName = x.fullname,
                    BookingId = booking2.BookingId,
                    PassengerTypeId = x.passengerType,
                    SeatNumber = x.seatNo2,
                    Gender = x.gender,
                    SeatClass = obj.seatClass


                };

                await _passenger.Post(pass);

                return Ok(new { booking1,booking2 });
            }
            }





            return Ok(new { booking1 });
            
        }



        private static long GenerateUniquePRNNumber()
        {
           
            DateTime currentTime = DateTime.Now;

            Random randomGenerator = new Random();

           
            string prnNumber = currentTime.ToString("yyyyMMddHHmmss") + randomGenerator.Next(10) ;
              Console.WriteLine(prnNumber);
           
            return Convert.ToInt64(prnNumber);
        }

    }


    }

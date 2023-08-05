using backend.DTOs;
using backend.Models;
using backend.RepoPattern.classess;
using backend.RepoPattern.Interfaces;
using backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using static Org.BouncyCastle.Math.EC.ECCurve;
using static System.Net.WebRequestMethods;

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
        private readonly IConfiguration _config;

        public BookingController(IPassenger passenger, Ibooking ibooking,IJourney journey,IUser user,IConfiguration cong) {
                _passenger = passenger;
            _booking = ibooking;
            _journey = journey;
            _user = user;
            _config = cong;
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


            EmailServices emailObject = new EmailServices(_config);

            var subject = "your booking for Make my trip";
            var body = "";

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


                    //var fs = new FileStream("./Templates/Forgot.html", FileMode.Open, FileAccess.Read);
                    //var sr = new StreamReader(fs);
                    //var html = sr.ReadToEnd().Replace("##otp##", otp.ToString());
                    //fs.Close();


                    body = booking1.ToString()+" "+booking2.ToString();
                    emailObject.SendEmail(obj.billingEmail, subject, body);

                    return Ok(new { booking1,booking2 });
            }
            }






             body = booking1.ToString();
            emailObject.SendEmail(obj.billingEmail, subject, body);
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

using backend.Models;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("makeMyTrip/[controller]")]
    [ApiController]
    public class testingController : ControllerBase
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

        public testingController(MakeMyTripContext context, IAirportData airport, ICity city, IJourney journey,
            Iflight flights, IAirlines airline, Ibooking ibooking, IPassenger passenger, IBaggagetypes baggagetypes
            , IBaggagerule baggagerule, ICancellationrules cancellationrules, ICancellationtype cancellationtype)
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
            return Ok();

        }




    }
}

using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Aireline : ControllerBase
    {
        private IAirlines _aireline;

        public Aireline(IAirlines airlines)
        {
                _aireline = airlines;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var data = from d in _aireline.Get()
                       select new
                       {
                           id = d.AirlineId,
                           name = d.AirlineName,
                           logo = d.AirlineLogo
                       };

            return Ok(data);
        }
    }
}

using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirelineController : ControllerBase
    {
        private IAirlines _aireline;

        public AirelineController(IAirlines airlines)
        {
                _aireline = airlines;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var data = from d in await _aireline.Get()
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

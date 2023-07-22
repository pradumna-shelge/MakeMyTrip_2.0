using backend.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {


        [HttpPost]
        public IActionResult MakePayment([FromBody] PaymentDto payment)
        {
          
            return Ok(new { message = "Payment successful."});
        }
    }
}

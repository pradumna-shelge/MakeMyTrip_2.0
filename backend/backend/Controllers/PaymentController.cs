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
            // Here you can implement the logic for processing the payment.
            // For this example, let's assume the payment is successful.
            return Ok(new { message = "Payment successful." });
        }
    }
}

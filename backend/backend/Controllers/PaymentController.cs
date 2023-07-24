using backend.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Razorpay.Api;
using System.Net;
using System.Security.Cryptography;
using System.Text;

namespace backend.Controllers
{
    [Route("makeMyTrip/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {

            const string apiKey = "rzp_test_D4KAnFxqNqzQsE";
            const string apiSecret = "UWRmx6j8d1mkclWRuHim0I8x";

        [HttpPost("create-order")]
        public IActionResult CreateOrder(PaymentDto obj)
        {
            
            RazorpayClient razorpayClient = new RazorpayClient(apiKey, apiSecret);

                
            Dictionary<string, object> orderOptions = new Dictionary<string, object>
            {
                { "amount", obj.amount }, 
                { "currency", "INR" },
                {"payment_capture","0" }
               
            };
            Order order = razorpayClient.Order.Create(orderOptions);

            Order order1 = razorpayClient.Order.Create(orderOptions);
            string orderId = order["id"].ToString();

            return Ok(new { OrderId = orderId });
        }

        [HttpPost("verify-Paymnet")]

        public async Task<IActionResult> verify_Paymnet( PaymenyVerifyDto obj)
        {
            try
            {

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            Razorpay.Api.RazorpayClient client = new Razorpay.Api.RazorpayClient(apiKey, apiSecret);
            Razorpay.Api.Payment payment = client.Payment.Fetch(obj.paymentId);

            Dictionary<string, object> options = new Dictionary<string, object>();
            options.Add("amount", payment.Attributes["amount"]);
            Razorpay.Api.Payment paymentCaptured = payment.Capture(options);
            string amt = paymentCaptured.Attributes["amount"];

         
            var response = new
            {
                Status = paymentCaptured.Attributes["status"],
                paymentId = obj.paymentId,
                paymentmethod = paymentCaptured.Attributes["method"],
                time = DateTime.Now,
                amount = (paymentCaptured.Attributes["amount"]) / 100
            };
            return Ok(new { mes="payment Done" });
            }
            catch(Exception ex)
            {
                return BadRequest(new{mes = "error while payment" });
            }
        }

    }
}

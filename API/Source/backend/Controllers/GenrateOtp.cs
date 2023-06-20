using backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;

namespace backend.Controllers
{
    public class GenrateOtp : Controller
    {
        private BookMyShowContext _context;
        public GenrateOtp(BookMyShowContext context)
        {
_context = context;
        }

        [HttpPost ("getOtp")]
        public async Task<IActionResult> getOtp(string email)
        {
            string senderEmail = "testdotnet@mailtest.radixweb.net";
            string senderPassword = "Radix@web#8";
            string recipientEmail =email;
            string subject = "OTP Verification";
            string body = GenerateOTP();

            //MailKit.Net.Smtp.SmtpClient smtpClient = new MailKit.Net.Smtp.SmtpClient();
            //smtpClient.Connect("mail.mailtest.radixweb.net", 456, true);

            //smtpClient.Authenticate(senderEmail, senderPassword);
            
            //MailMessage mailMessage = new MailMessage(senderEmail, recipientEmail, subject, body);

            try
            {
                
                //smtpClient.Send(mailMessage);
                return Ok(body);
            }
            catch (Exception ex)
            {
                return BadRequest("Error sending email: " + ex.Message);
            }

        }
        private string GenerateOTP()
        {
         
            Random random = new Random();
            int otp = random.Next(100000, 999999);
            return otp.ToString();
        }
    }
}

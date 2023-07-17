using backend.Controllers;

namespace backend.Services
{
    public class OtpServices
    {
        private readonly IConfiguration _config;

       public OtpServices(IConfiguration configuration) { _config = configuration;  }
       public int sendOtp(string email)
        {
            var  otp = GenrateOtp();
            var subject = "Make My Trip";
            var body = "User Login Otp = "+otp;

            EmailServices emailObject = new EmailServices(_config);

            emailObject.SendEmail(email, subject, body);

            return otp;

        }


        private int GenrateOtp()
        {

            Random random = new Random();
            int otp = random.Next(100000, 999999);
            return otp;
        }
    }
}

using backend.DTOs;
using backend.Models;
using backend.RepoPattern.Interfaces;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("makeMyTrip/[controller]")]
    [ApiController]
    public class loginController : ControllerBase
    {
        private readonly IUser _user;
        private readonly IConfiguration _config;

        public loginController(IUser user, IConfiguration configuration)
        {
            _user = user;
            _config = configuration;
        }


        [HttpPost("emailValidate")]
        public async Task<IActionResult> emailValidate(LoginDTO obj)
        {

            var Users = await _user.Get();
            var userObj = Users.FirstOrDefault(user => user.UserEmail == obj.email);
            

            if(userObj == null) { 
                User newUser  = new User()
                {
UserEmail = obj.email
                };
               await _user.Post(newUser);

                userObj = Users.FirstOrDefault(user => user.UserEmail == newUser.UserEmail);
                if(userObj == null)
                {
                    return BadRequest(new { mes="user not found"});
                }
            }

            if (userObj == null )
            {
                return BadRequest(new { mes = "user not found" });
            }
            OtpServices otpServices = new OtpServices(_config);

           var OTP= otpServices.sendOtp(obj.email);

            userObj.OtpTime = DateTime.Now;
            userObj.UserOtp = OTP;

            await _user.Put(userObj);

            return  Ok(new{ otp= OTP });
            
           

        }


        [HttpPost("loginUser")]
        public async Task<IActionResult> loginUser(LoginDTO LoginObj)
        {
            if(LoginObj == null)
            {
                return  BadRequest(new { mes = "Invalid Data" });
            }
            var Users = await _user.Get();
            var Userobj = Users.FirstOrDefault(user => user.UserEmail == LoginObj.email);
            if (Userobj == null)
            {
                return NotFound(new { mes = "User Not found" });
            }

            if(Userobj.UserOtp == LoginObj.otp)
            {
                var otpDate =  Userobj.OtpTime.Value.AddMinutes(2);
                if (otpDate < DateTime.Now)
                {
                    return BadRequest(new { mes = "Otp Expried" });
                }
                Tokenservices tokenservices = new Tokenservices(_config);
                var token = tokenservices.createToken(Userobj);
                return Ok(new {token=token });
            }

            return BadRequest(new { mes = "Otp is Invalid" });
        }
    
    }
}

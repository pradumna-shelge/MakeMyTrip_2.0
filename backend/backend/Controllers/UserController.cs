using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;
using backend.DTOs;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("makeMyTrip/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUser _user;
        private readonly IConfiguration _configuration;

        public UserController(IUser user, IConfiguration configuration)
        {
            _user = user;
            _configuration = configuration;
        }

        [HttpGet]

        public async Task<IActionResult> get(string email)
        {

            if (email == null)
            {
                return BadRequest(new { mes = "email is empty" });
            }

            var users = await _user.Get();


            var user = users.FirstOrDefault(u => u.UserEmail == email);

            if (user == null)
            {
                return NotFound(new { mes = "user not found" });
            }

            var data = new
            {
                fullName = user.FullName,
                userEmail = user.UserEmail,
                gender = user.Gender,
                phoneNumber = user.PhoneNumber,
                imageUrl = user.ImageUrl,
                address = user.Address,

            };


            return Ok(data);
        }


        [HttpPost]

        public async Task<IActionResult> update(UserDto ob)
        {

            if (ob == null)
            {
                return BadRequest(new { mes = "object is empty" });
            }


            var users = await _user.Get();


            var user = users.FirstOrDefault(u => u.UserEmail == ob.UserEmail);

            if (user == null)
            {
                return NotFound(new { mes = "user not found" });

            }

            user.Address = ob.Address;
            user.Gender = ob.Gender;
            user.PhoneNumber = ob.PhoneNumber;
            user.ImageUrl = ob.ImageUrl;
            user.FullName = ob.FullName;
            user.ImageUrl = ob.ImageUrl;
            await _user.Put(user);

            return Ok(new { mes = "user updated" });

        }



        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");

            string accessKey = _configuration["AWS:AccessKey"];
            string secretKey = _configuration["AWS:SecretKey"];
            string bucketName = _configuration["AWS:BucketName"];

            if (string.IsNullOrWhiteSpace(accessKey) || string.IsNullOrWhiteSpace(secretKey) || string.IsNullOrWhiteSpace(bucketName))
                return StatusCode(500, "AWS credentials or bucket configuration missing.");

            using (var client = new AmazonS3Client(accessKey, secretKey, RegionEndpoint.APSouth1))
            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);

                var fileTransferUtility = new TransferUtility(client);
                var keyName = Guid.NewGuid().ToString();
                await fileTransferUtility.UploadAsync(memoryStream, bucketName, keyName);

                var urlRequest = new GetPreSignedUrlRequest
                {
                    BucketName = bucketName,
                    Key = keyName,
                    Expires = DateTime.Now.AddHours(1)
                };

                string imageUrl = client.GetPreSignedURL(urlRequest);
                return Ok(new { ImageUrl = imageUrl });
            }


        }

        }

        
}

using backend.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace backend.Services
{
    public class Tokenservices
    {
        private readonly IConfiguration _config;

        public Tokenservices(IConfiguration configuration)
        {
                _config = configuration;
        }
          public string conertTOhash(string password)
        {
            using(var sha = SHA256.Create())
            {
                byte[] hash = sha.ComputeHash(Encoding.UTF8.GetBytes(password));

                return Convert.ToBase64String(hash);
            }
        }


        public string createToken(User user)
    {
            var userRole = "user";


            var sec = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("Jwt:Key").Value));
            var cre = new SigningCredentials(sec,
                SecurityAlgorithms.HmacSha256);

            var clames = new Claim[]
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, userRole),
                 new Claim("userEmail", user.UserEmail),
            };

            var preToken = new JwtSecurityToken(
                _config.GetSection("Jwt:Issuer").Value,
                 _config.GetSection("Jwt:Audience").Value,
                 clames,
                 expires: DateTime.Now.AddDays(1),
                 signingCredentials: cre
                 );
            var token = new JwtSecurityTokenHandler().WriteToken(preToken);

            



        return token;
    }
    }
}

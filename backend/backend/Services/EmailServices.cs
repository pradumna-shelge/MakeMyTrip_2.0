using MailKit.Net.Smtp;
using MimeKit;

namespace backend.Services
{
    public class EmailServices
    {
        private readonly IConfiguration _config;

        

        public EmailServices(IConfiguration configuration)
        {
            _config = configuration;
        }


        public  void SendEmail(string recipient, string subject, string body)
        {

            var SmtpUsername = _config.GetSection("Email:SmtpUsername").Value;
            var SmtpHost = _config.GetSection("Email:SmtpHost").Value;
            var SmtpPassword = _config.GetSection("Email:SmtpPassword").Value;
            var SmtpPort = Convert.ToInt16(_config.GetSection("Email:SmtpPort").Value);

            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("MakeMytrip", SmtpUsername));
            message.To.Add(new MailboxAddress(recipient, recipient));
            message.Subject = subject;

            var bodyBuilder = new BodyBuilder();
            bodyBuilder.TextBody = body;

            message.Body = bodyBuilder.ToMessageBody();

            using (var client = new SmtpClient())
            {
                client.Connect(SmtpHost, SmtpPort);
                client.Authenticate(SmtpUsername, SmtpPassword);
                client.Send(message);
                client.Disconnect(true);
            }
        }
    }
}

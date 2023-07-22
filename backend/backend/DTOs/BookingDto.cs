using backend.Models;

namespace backend.DTOs
{
    public class BookingDto
    {
    public  int  FirstJourneyId { get; set; }
        public int userId { get; set; }
        public int ?returnJourneyId { get; set; }

     public ICollection<passengerDto> passengerList { get; set; }
    
    public string billingEmail { get; set; }
    public string seatClass { get; set; }



    }
}

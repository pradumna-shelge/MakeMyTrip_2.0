using backend.Models;

namespace backend.DTOs
{
    public class BookingDto
    {
    public  int firstJourneyId { get; set; }
        public string userEmail { get; set; }
        public int ? returnJourneyId { get; set; }

     public ICollection<passengerDto> passengerList { get; set; }
    
    public string billingEmail { get; set; }
    public int seatClass { get; set; }

        public double totalPrice { get; set; }

    }
}

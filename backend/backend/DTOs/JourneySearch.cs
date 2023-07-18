using Microsoft.VisualBasic;

namespace backend.DTOs
{
    public class JourneySearch
    {
        public int fromID { get; set; }
        public int toID { get; set; }
        public DateTime depatureDate { get; set; }
        public DateTime? ReturnDate { get; set; }


    }
}

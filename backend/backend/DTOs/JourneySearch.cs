using Microsoft.VisualBasic;

namespace backend.DTOs
{
    public class JourneySearch
    {
        public int fromID { get; set; }
        public int toID { get; set; }
        public string depatureDate { get; set; }
        public string? ReturnDate { get; set; }


    }
}

using Microsoft.EntityFrameworkCore;

namespace backend.DTOs.SpDTo
{
    [Keyless]
    public class SeatClassDto
    {
            public int SeatClassId { get; set; }
            public int RowsStart { get; set; }
            public int RowsEnd { get; set; }
            public string ColumnsStart { get; set; }
            public string ColumnsEnd { get; set; }
        
    }
}

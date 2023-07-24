namespace backend.DTOs
{
    public class PaymenyVerifyDto
    {
        public string paymentId { get; set; }
        public string orderId { get; set; }
        public string signature { get; set; }

    }
}

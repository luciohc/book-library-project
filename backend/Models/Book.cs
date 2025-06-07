namespace BookLibraryApi.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Publisher { get; set; }
        public string Authors { get; set; }
        public string Type { get; set; }
        public string ISBN { get; set; }
        public string Category { get; set; }
        public int TotalCopies { get; set; }
        public int CopiesInUse { get; set; }
    }
}

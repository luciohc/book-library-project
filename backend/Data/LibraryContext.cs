using Microsoft.EntityFrameworkCore;
using BookLibraryApi.Models;

namespace BookLibraryApi.Data
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options)
            : base(options) { }

        public DbSet<Book> Books { get; set; }
    }
}

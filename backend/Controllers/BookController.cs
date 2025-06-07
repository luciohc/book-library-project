using Microsoft.AspNetCore.Mvc;
using BookLibraryApi.Data;
using BookLibraryApi.Models;
using System.Linq;

namespace BookLibraryApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly LibraryContext _context;

        public BookController(LibraryContext context)
        {
            _context = context;
        }

        [HttpGet("search")]
        public IActionResult Search(string by, string value)
        {
            var books = _context.Books.AsQueryable();

            if (by == "Author")
                books = books.Where(b => b.Authors.Contains(value));
            else if (by == "ISBN")
                books = books.Where(b => b.ISBN.Contains(value));
            else if (by == "Title")
                books = books.Where(b => b.Title.Contains(value));

            return Ok(books.ToList());
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_context.Books.ToList());
    }
}

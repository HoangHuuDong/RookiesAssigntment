using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class CategoryContext : DbContext
    {
        public CategoryContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; } 
    }
}

using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class ShopeeContext : DbContext
    {
        public ShopeeContext(DbContextOptions options) : base(options) { }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<User> Users {get; set;}
        public DbSet<Rating> Ratings { get; set; }
    }
}

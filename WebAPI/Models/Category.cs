using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public virtual List<Product> Product { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class Rating
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public int Rate { get; set; }
        public int IdProduct { get; set; }
        [ForeignKey("IdProduct")]
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public DateTime CreatedDate { get; set; }
        public virtual User User { get; set; }
        public virtual Product Product { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<Rating> Rating { get; set; }

    }
}

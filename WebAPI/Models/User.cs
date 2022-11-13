using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int OrdersNotFinish { get; set; }
        public int OrdersFinish { get; set; }
        public int Role { get; set; }
        public string NameRole { get; set; }
        public virtual List<Rating> Rating { get; set; }
    }
}

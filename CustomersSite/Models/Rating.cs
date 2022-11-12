using System.ComponentModel.DataAnnotations.Schema;

namespace CustomersSite.Models
{
    public class Rating
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int Rate { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public DateTime CreatedDate { get; set; }
        public virtual User User { get; set; }
    }
}

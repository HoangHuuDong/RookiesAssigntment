using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.DTO
{
    public class RatingDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int Rate { get; set; }
        public string UserName { get; set; }
        public int UserId { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}

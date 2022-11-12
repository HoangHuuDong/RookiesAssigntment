namespace CustomersSite.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<Rating> Rating { get; set; }
    }
}

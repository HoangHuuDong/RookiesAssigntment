namespace WebAPI.DTO
{
    public class AddProductDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double OldPrice { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
        public string Image2 { get; set; }
        public string Image3 { get; set; }
        public DateTime CreatedDate { get; set; }
        public int CategoryId { get; set; }
    }
}

namespace WebAPI.DTO
{
    public class UpdateProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double OldPrice { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
        public DateTime UpdateDate { get; set; }
        public int CategoryId { get; set; }
    }
}
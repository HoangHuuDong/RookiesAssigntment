﻿using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;

namespace WebAPI.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        //public string IdCategory { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public double OldPrice { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
        public string Image2 { get; set; }
        public string Image3 { get; set; }
        public DateTime CreatedDate { get; set; }
        public virtual Category Category { get; set; }
    }
}

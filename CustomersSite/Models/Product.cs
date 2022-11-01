using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CustomersSite.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public string Image { get; set; }
        public string Image2 { get; set; }
        public string Image3 { get; set; }
        public DateTime CreatedDay { get; set; }
        public virtual Category Category { get; set; }

    }
}

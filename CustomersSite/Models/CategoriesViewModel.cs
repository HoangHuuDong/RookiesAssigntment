using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CustomersSite.Models
{
    public class CategoriesViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Amount { get; set; }
    }
}

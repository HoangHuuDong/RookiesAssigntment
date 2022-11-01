using CustomersSite.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace CustomersSite.ViewComponents
{
    public class CategoriesViewComponent : Microsoft.AspNetCore.Mvc.ViewComponent
    {
        Uri baseAddress = new Uri("https://localhost:7290/api");
        HttpClient client;
        public CategoriesViewComponent()
        {
            client = new HttpClient();
            client.BaseAddress = baseAddress;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            List<Category> categories = new List<Category>();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/category/get-category").Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                categories = JsonConvert.DeserializeObject<List<Category>>(data);
            }
            return View(categories);
        }
    }
}

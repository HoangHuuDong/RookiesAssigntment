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
    public class CategoriesViewComponent : ViewComponent
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
            List<CategoriesViewModel> categories = new List<CategoriesViewModel>();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/category/get-category").Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                categories = JsonConvert.DeserializeObject<List<CategoriesViewModel>>(data);
            }
            return View(categories);
        }
    }
}

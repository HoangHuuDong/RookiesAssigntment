using CustomersSite.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace CustomersSite.ViewComponent
{
    public class ProductsViewComponent : Microsoft.AspNetCore.Mvc.ViewComponent
    {
        Uri baseAddress = new Uri("https://localhost:7290/api");
        HttpClient client;
        public ProductsViewComponent()
        {
            client = new HttpClient();
            client.BaseAddress = baseAddress;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            List<Product> products = new List<Product>();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/product/get-product").Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                products = JsonConvert.DeserializeObject<List<Product>>(data);
            }
            return View(products);
        }
    }
}

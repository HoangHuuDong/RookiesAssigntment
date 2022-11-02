using CustomersSite.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;

namespace CustomersSite.Controllers
{
    public class HomeController : Controller
    {
        Uri baseAddress = new Uri("https://localhost:7290/api");
        HttpClient client;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
            client = new HttpClient();
            client.BaseAddress = baseAddress;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult ProductByCate(int id)
        {
            List<Product> products = new List<Product>();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/product/get-by-idCategory/" + id).Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                products = JsonConvert.DeserializeObject<List<Product>>(data);
            }
            return View(products);
        }

        public IActionResult Detail(int id)
        {
            Product getproduct = new Product();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/product/" + id).Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                getproduct = JsonConvert.DeserializeObject<Product>(data);
            }
            return View(getproduct);
        }

        public IActionResult Search([FromQuery(Name ="product")] string name)
        {
            List<Product> searchproduct = new List<Product>();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/product/searching/" + name).Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                searchproduct = JsonConvert.DeserializeObject<List<Product>>(data);
            }
            return View(searchproduct);
        }

        public IActionResult SortOrderByDescending()
        {
            List<Product> sortproduct = new List<Product>();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/product/sortOrderByDescending").Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                sortproduct = JsonConvert.DeserializeObject<List<Product>>(data);
            }
            return View(sortproduct);
        }

        public IActionResult SortOrderBy()
        {
            List<Product> sortproduct = new List<Product>();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/product/sortOrderBy").Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                sortproduct = JsonConvert.DeserializeObject<List<Product>>(data);
            }
            return View(sortproduct);
        }

        public IActionResult SortPriceOrderBy()
        {
            List<Product> sortproduct = new List<Product>();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/product/sortPriceOrderBy").Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                sortproduct = JsonConvert.DeserializeObject<List<Product>>(data);
            }
            return View(sortproduct);
        }

        public IActionResult SortPriceOrderByDescending()
        {
            List<Product> sortproduct = new List<Product>();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/product/sortPriceOrderByDescending").Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                sortproduct = JsonConvert.DeserializeObject<List<Product>>(data);
            }
            return View(sortproduct);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
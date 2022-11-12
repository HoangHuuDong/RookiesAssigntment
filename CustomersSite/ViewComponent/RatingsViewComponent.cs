using CustomersSite.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace CustomersSite.ViewComponent
{
    public class RatingsViewComponent : Microsoft.AspNetCore.Mvc.ViewComponent
    {
        Uri baseAddress = new Uri("https://localhost:7290/api");
        HttpClient client;
        public RatingsViewComponent()
        {
            client = new HttpClient();
            client.BaseAddress = baseAddress;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            List<Rating> ratings = new List<Rating>();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/ratings/get-ratings").Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                ratings = JsonConvert.DeserializeObject<List<Rating>>(data);
            }
            return View(ratings);
        }
    }
}

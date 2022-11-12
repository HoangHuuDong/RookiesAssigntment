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
    public class UsersViewComponent : Microsoft.AspNetCore.Mvc.ViewComponent
    {
        Uri baseAddress = new Uri("https://localhost:7290/api");
        HttpClient client;
        public UsersViewComponent()
        {
            client = new HttpClient();
            client.BaseAddress = baseAddress;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            List<User> users = new List<User>();
            HttpResponseMessage response = client.GetAsync(client.BaseAddress + "/Users").Result;
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                users = JsonConvert.DeserializeObject<List<User>>(data);
            }
            return View(users);
        }
    }
}

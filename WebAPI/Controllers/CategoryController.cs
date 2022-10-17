using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Runtime.InteropServices;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/category")]
    public class CategoryController : Controller
    {
        private readonly CategoryContext dbContext;

        public CategoryController(CategoryContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Route("get-category")]
        public async Task<IActionResult> GetCategories()
        {
            return Ok(await dbContext.Categories.ToListAsync());
        }
        [HttpPost]
        [Route("add-category")]
        public async Task<IActionResult> AddCategories(AddCategory addCategory)
        {
            var category = new Category()
            {
                Id = Guid.NewGuid(),
                Name = addCategory.Name,
            };

            await dbContext.Categories.AddAsync(category);
            await dbContext.SaveChangesAsync();

            return Ok(category);
        }
        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateCategories([FromRoute] Guid id, UpdateCategory updateCategory)
        {
            var category = dbContext.Categories.Find(id);
            if (category != null)
            {
                category.Name = updateCategory.Name;

                await dbContext.SaveChangesAsync();

                return Ok(category);
            }
            return NotFound();
        }
        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteCatogories([FromRoute] Guid id)
        {
            var category = await dbContext.Categories.FindAsync(id);
            if (category != null)
            {
                dbContext.Remove(category);
                await dbContext.SaveChangesAsync();
                return Ok(category);
            }
            return NotFound();
        }
    }
}

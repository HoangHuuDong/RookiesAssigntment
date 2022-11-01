using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/product")]
    public class ProductsController : ControllerBase
    {
        private readonly ShopeeContext _context;

        public ProductsController(ShopeeContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        [Route("get-product")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("get-by-idCategory/{idCategory}")]

        public async Task<ActionResult<IEnumerable<Product>>> GetProductByCategory(int idCategory)
        {
            var result = from product in _context.Products
                         where product.Category.Id == idCategory
                         select product;

            if (result == null)
            {
                return NotFound();
            }

            return await result.ToListAsync();
        }

        [HttpGet("searching/{name}")]
        public async Task<ActionResult<IEnumerable<Product>>> SearchingProduct(string name)
        {
            var result = _context.Products.Where(t => t.Name.Contains(name));

            if (result == null)
            {
                return NotFound();
            }

            return await result.ToListAsync();
        }

        [HttpGet("sortOrderByDescending")]
        public async Task<ActionResult<IEnumerable<Product>>> Sort()
        {
            var result = _context.Products.OrderByDescending(x => x.CreatedDate);

            if (result == null)
            {
                return NotFound();
            }

            return await result.ToListAsync();
        }

        [HttpGet("sortOrderBy")]
        public async Task<ActionResult<IEnumerable<Product>>> SortOrderby()
        {
            var result = _context.Products.OrderBy(x => x.CreatedDate);

            if (result == null)
            {
                return NotFound();
            }

            return await result.ToListAsync();
        }

        [HttpGet("sortPriceOrderBy")]
        public async Task<ActionResult<IEnumerable<Product>>> SortPriceOrderby()
        {
            var result = _context.Products.OrderBy(x => x.Price);

            if (result == null)
            {
                return NotFound();
            }

            return await result.ToListAsync();
        }

        [HttpGet("sortPriceOrderByDescending")]
        public async Task<ActionResult<IEnumerable<Product>>> SortPriceOrderByDescending()
        {
            var result = _context.Products.OrderByDescending(x => x.Price);

            if (result == null)
            {
                return NotFound();
            }

            return await result.ToListAsync();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}

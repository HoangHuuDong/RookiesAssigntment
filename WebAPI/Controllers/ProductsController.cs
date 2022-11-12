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
using WebAPI.DTO;
using WebAPI.Models;
using static System.Net.Mime.MediaTypeNames;

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
        [HttpGet("get-product")]
        public async Task<ActionResult<IEnumerable<ProductDto>>> GetProducts()
        {
            var result = await _context.Products.Select(products => new ProductDto() {
                Id = products.Id,
                CategoryId = products.CategoryId,
                CategoryName = products.Category.Name,
                CreatedDate = products.CreatedDate,
                Description = products.Description,
                Image = products.Image,
                Image2 = products.Image2,
                Image3 = products.Image3,
                Name = products.Name,
                OldPrice = products.OldPrice,
                Price = products.Price
            }).ToListAsync();
            return result;
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

        [HttpPut("update-product")]
        public async Task<IActionResult> UpdateProduct([FromBody] UpdateProductDto updateproduct)
        {
            var product = _context.Products.Find(updateproduct.Id);
            if (product != null)
            {
                product.Name = updateproduct.Name;
                product.Description = updateproduct.Description;
                product.OldPrice = updateproduct.OldPrice;
                product.Price = updateproduct.Price;
                product.Image = updateproduct.Image;
                product.CategoryId = updateproduct.CategoryId;
                product.UpdateDate = updateproduct.UpdateDate;
                
                await _context.SaveChangesAsync();

                return Ok(product);
            }
            return NotFound();
        }

        // POST: api/Products
        [HttpPost("add-product")]
        public async Task<ActionResult<Product>> AddProduct(AddProductDto addProduct)
        {
            var product = new Product()
            {
                //CategoryId = addProduct.CategoryId,
                Name = addProduct.Name,
                Description = addProduct.Description,
                OldPrice = addProduct.OldPrice,
                Price = addProduct.Price,
                Image = addProduct.Image,
                Image2 = addProduct.Image2,
                Image3 = addProduct.Image3,
                CreatedDate = addProduct.CreatedDate,
                CategoryId = addProduct.CategoryId,
            };

            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();

            return Ok(product);
        }

        // DELETE: api/Products/5
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] int id)
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DynamicMenu.API.Context;
using DynamicMenu.API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DynamicMenu.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeedController : ControllerBase
    {
        private readonly DynamicMenuDbContext _context;
        public SeedController(DynamicMenuDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Seed()
        {
            var menuList = new List<Menu>()
            {
                new Menu { Title = "Menu 1", Content = "Content 1" },
                new Menu { Title = "Menu 2", Content = "Content 2" },
                new Menu { Title = "Menu 3", Content = "Content 3" }
            };

            _context.Menus.AddRange(menuList);

            _context.SaveChanges();

            return Ok("Seed data loaded.");
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DynamicMenu.API.Context;
using DynamicMenu.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace DynamicMenu.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly DynamicMenuDbContext _context;
        public MenuController(DynamicMenuDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Menu>> Get()
        {
            return _context.Menus.ToList();
        }
    }
}

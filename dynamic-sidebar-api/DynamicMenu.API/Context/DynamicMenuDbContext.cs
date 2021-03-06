﻿using DynamicMenu.API.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicMenu.API.Context
{
    public class DynamicMenuDbContext : DbContext
    {
        public DynamicMenuDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Menu> Menus { get; set; }
    }
}

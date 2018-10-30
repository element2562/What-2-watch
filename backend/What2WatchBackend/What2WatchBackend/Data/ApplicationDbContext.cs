using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using What2WatchBackend.Models;

namespace What2WatchBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
    : base(options)
        { }

        public DbSet<User> User { get; set; }
        public DbSet<Movie> Movie { get; set; }
    }
}

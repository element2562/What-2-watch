using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using What2Watch.Models;

namespace What2Watch.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> User { get; set; }
        public DbSet<Movie> Movie { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        User user = new User
        {
            Id = Guid.NewGuid().ToString(),
            FirstName = "Jacob",
            LastName = "Henderson",
            UserName = "jacob@jacob.com",
            NormalizedUserName = "JACOB@JACOB.COM",
            Email = "jacob@jacob.com",
            NormalizedEmail = "JACOB@JACOB.COM",
            EmailConfirmed = true,
            LockoutEnabled = false,
            SecurityStamp = Guid.NewGuid().ToString("D")
        };

        var passwordHash = new PasswordHasher<User>();
        user.PasswordHash = passwordHash.HashPassword(user, "jacob");
        modelBuilder.Entity<User>().HasData(user);
    }
    }
    }

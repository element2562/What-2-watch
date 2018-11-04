using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using What2Watch.Data;
using What2Watch.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace What2Watch.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context, UserManager<User> user)
        {
            _userManager = user;
            _context = context;
        }


        // GET api/users/getuser
        [HttpGet]
        [EnableCors("What2WatchPolicy")]
        [Authorize]
        public async Task<IActionResult> GetUser()
        {
            string userName = User.Identity.Name;
            User currentUser = _context.User.Single(u => u.UserName == userName);

            return Ok(currentUser);
        }
    }
}
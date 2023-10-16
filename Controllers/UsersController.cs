using Microsoft.AspNetCore.Mvc;
using RaffleApplication.Models;

namespace RaffleApp_GitHubCopilot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly RaffleDbContext _dbContext;

        public UserController(RaffleDbContext dBContext)
        {
            _dbContext = dBContext;
        }

        [HttpGet]
        [Route("GetUsers")]
        public IActionResult GetUsers()
        {
            List<UserInformation> list = _dbContext.UserInformations.ToList();
            return StatusCode(StatusCodes.Status200OK, list);
        }

        [HttpGet]
        [Route("GetRandomUser")]
        public IActionResult GetRandomUser()
        {
            var random = new Random();
            var users = _dbContext.UserInformations.ToList();

            if (users.Count == 0)
            {
                return StatusCode(StatusCodes.Status404NotFound, "No users in the database");
            }

            int randomIndex = random.Next(0, users.Count);
            UserInformation randomUser = users[randomIndex];

            return StatusCode(StatusCodes.Status200OK, randomUser);
        }


        [HttpPost]
        [Route("AddUser")] 
        public IActionResult AddUser([FromForm] UserInformation userinformation)
        {
            _dbContext.UserInformations.Add(userinformation);
            _dbContext.SaveChanges();
            return StatusCode(StatusCodes.Status200OK, userinformation);
        }
    }
} 

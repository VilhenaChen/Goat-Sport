using GoatCoachAPI.Data.Models;
using GoatCoachAPI.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace GoatCoachAPI.Controllers
{
	[Route("[controller]/[action]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly UserManager<User> userManager;

		public UserController(UserManager<User> _userManager)
		{
			userManager = _userManager;
		}

		[HttpPost]
		public async Task<ActionResult> Register(RegisterVM model)
		{
			var userDb = await userManager.FindByEmailAsync(model.Email);
			if(userDb != null)
			{
				return BadRequest("Email already exists!");
			}

			if (ModelState.IsValid)
			{
				var user = new User
				{
					FullName = model.FullName,
					UserName = model.Email,
					Email = model.Email,
					PasswordHash = model.Password,
				};

				var result = await userManager.CreateAsync(user, user.PasswordHash);
				if (result.Succeeded)
				{
					return Ok();
				}
			}

			return BadRequest();
		}
	}
}

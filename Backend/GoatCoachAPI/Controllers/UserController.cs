using GoatCoachAPI.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace GoatCoachAPI.Controllers
{
	[Route("[controller]/[action]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly UserManager<IdentityUser> userManager;

		public UserController(UserManager<IdentityUser> _userManager)
		{
			userManager = _userManager;
		}

		[HttpPost]
		public async Task<ActionResult> Register(RegisterVM model)
		{
			if (ModelState.IsValid)
			{
				var user = new IdentityUser
				{
					UserName = model.Username,
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

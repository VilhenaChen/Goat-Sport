using GoatCoachAPI.Contracts;
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
		private readonly ITeamRepository teamRepository;
		private readonly ISportRepository sportRepository;
		private readonly ISportTeamRepository sportTeamRepository;

		public UserController(UserManager<User> _userManager, ITeamRepository _teamRepository, ISportRepository _sportRepository, ISportTeamRepository _sportTeamRepository)
		{
			userManager = _userManager;
			teamRepository = _teamRepository;
			sportRepository = _sportRepository;
			sportTeamRepository = _sportTeamRepository;
		}

		[HttpPost]
		public async Task<ActionResult> Register(RegisterVM model)
		{
			var userDb = await userManager.FindByEmailAsync(model.Email);
			if (userDb != null)
			{
				return BadRequest("Email already exists!");
			}

			foreach (var sportId in model.Sports)
			{
				if (!await sportRepository.Exists(sportId))
					return BadRequest("Sport don't exist!");
			}

			if (ModelState.IsValid)
			{
				var user = new User
				{
					FullName = model.FullName,
					UserName = model.Email,
					Email = model.Email,
					PasswordHash = model.Password
				};

				var result = await userManager.CreateAsync(user, user.PasswordHash);
				if (result.Succeeded)
				{
					var team = new Team
					{
						UserId = user.Id,
						Name = model.Team
					};
					await teamRepository.CreateAsync(team);

					foreach (var sportId in model.Sports)
					{
						var sportTeam = new Sport_Team
						{
							SportId = sportId,
							TeamId = team.Id
						};

						await sportTeamRepository.CreateAsync(sportTeam);
					}


					return Ok();
				}
			}

			return BadRequest();
		}
	}
}

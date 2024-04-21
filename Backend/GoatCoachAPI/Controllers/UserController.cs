using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;
using GoatCoachAPI.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace GoatCoachAPI.Controllers
{
	[Route("[controller]/[action]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly DataContext context;
		private readonly UserManager<User> userManager;
		private readonly ICalendarRepository calendarRepository;
		private readonly ITeamRepository teamRepository;
		private readonly ISportRepository sportRepository;
		private readonly ISportTeamRepository sportTeamRepository;

		public UserController(DataContext context, UserManager<User> _userManager, ICalendarRepository _calendarRepository, ITeamRepository _teamRepository, ISportRepository _sportRepository, ISportTeamRepository _sportTeamRepository)
		{
			this.context = context;
			userManager = _userManager;
			calendarRepository = _calendarRepository;
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
				return Conflict("Email already exists!");
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

					var dateStart = DateOnly.FromDateTime(DateTime.Now);
					var dateEnd = DateOnly.FromDateTime(DateTime.Now.AddYears(1));

					List<Calendar> calendars = new List<Calendar>();
					foreach (var sportId in model.Sports)
					{
						var sportTeam = new Sport_Team
						{
							SportId = sportId,
							TeamId = team.Id
						};

						await sportTeamRepository.CreateAsync(sportTeam);
						calendars.Add(
							new Calendar
							{
								SeasonStart = dateStart,
								SeasonEnd = dateEnd,
								TeamId = team.Id,
								SportId = sportId
							}
						);

						string sql = "INSERT INTO CALENDARS VALUES(@SeasonStart, @SeasonEnd, @TeamId, @SportId)";
						List<SqlParameter> parameterList = new List<SqlParameter>();
						parameterList.Add(new SqlParameter("@SeasonStart", dateStart));
						parameterList.Add(new SqlParameter("@SeasonEnd", dateEnd));
						parameterList.Add(new SqlParameter("@TeamId", team.Id));
						parameterList.Add(new SqlParameter("@SportId", sportId));
						SqlParameter[] parameters = parameterList.ToArray();
						context.Database.ExecuteSqlRaw(sql, parameters);
					}

					return Ok();
				}
			}

			return BadRequest();
		}

		// GET: User/GetUserTeamSport/{email}
		[Authorize]
		[HttpGet]
		public async Task<ActionResult<GetUserTeamSportVM>> GetUserTeamSport([FromBody] string email)
		{
			var user = await userManager.FindByEmailAsync(email);

			if (user == null)
				return NotFound();

			var team = await teamRepository.GetByUserIdAsync(user.Id);

			var sportTeam = await sportTeamRepository.GetSportTeamByTeamId(team.Id);

			List<int> sports = new List<int>();
			foreach (var sport in sportTeam)
			{
				sports.Add(sport.SportId);
			}

			var result = new GetUserTeamSportVM
			{
				TeamId = team.Id,
				Sports = sports
			};

			return Ok(result);
		}

		// GET: User/GetUserDetails/{id}
		[Authorize]
		[HttpGet]
		public async Task<ActionResult<GetUserDetailsVM>> GetUserDetails(string email)
		{
			var user = await userManager.FindByEmailAsync(email);

			if (user == null)
			{
				return NotFound();
			}

			return new GetUserDetailsVM
			{
				Name = user.FullName,
				Email = user.Email
			};

		}

	}
}

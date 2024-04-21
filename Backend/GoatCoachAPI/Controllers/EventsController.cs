using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data.Models;
using GoatCoachAPI.Repositories;
using GoatCoachAPI.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace GoatCoachAPI.Controllers
{
	[Authorize]
	[Route("[controller]/[action]")]
	[ApiController]
	public class EventsController : ControllerBase
	{
		private readonly IPlayerRepository playerRepository;
		private readonly IPracticePlayersRepository practicePlayersRepository;
		private readonly IPracticeRepository practiceRepository;
		private readonly ISubstituteTeamRepository substituteTeamRepository;
		private readonly ISubstituteTeamPlayersRepository substituteTeamPlayersRepository;
		private readonly IPrincipalTeamPlayersRepository principalTeamPlayersRepository;
		private readonly ISportTeamRepository sportTeamRepository;
		private readonly IPrincipalTeamRepository principalTeamRepository;
		private readonly ICalendarRepository calendarRepository;
		private readonly IMatchRepository matchRepository;

		public EventsController(IPlayerRepository _playerRepository, IPracticePlayersRepository _practicePlayersRepository, IPracticeRepository _practiceRepository, ISubstituteTeamRepository _substituteTeamRepository, ISubstituteTeamPlayersRepository _substituteTeamPlayersRepository, IPrincipalTeamPlayersRepository _principalTeamPlayersRepository, ISportTeamRepository _sportTeamRepository, IPrincipalTeamRepository _principalTeamRepository,ICalendarRepository _calendarRepository, IMatchRepository _matchRepository)
		{
			playerRepository = _playerRepository;
			practicePlayersRepository = _practicePlayersRepository;
			practiceRepository = _practiceRepository;
			substituteTeamRepository = _substituteTeamRepository;
			substituteTeamPlayersRepository = _substituteTeamPlayersRepository;
			principalTeamPlayersRepository = _principalTeamPlayersRepository;
			sportTeamRepository = _sportTeamRepository;
			principalTeamRepository = _principalTeamRepository;
			calendarRepository = _calendarRepository;
			matchRepository = _matchRepository;
		}

		[HttpPost]
		public async Task<ActionResult> CreateEvent(CreateEventVM model)
		{
			//Validations
			if (!ModelState.IsValid)
				return BadRequest();

			if (DateTime.Now > model.Date)
				return BadRequest("Date is invalid!");

			var sportTeamResult = await sportTeamRepository.GetSportTeamByTeamId(model.TeamId);
			if (sportTeamResult.IsNullOrEmpty() || !sportTeamResult.Exists(st => st.SportId == model.SportId))
				return NotFound("This team or this team/sport combination does not exist");

			if (!(model.GameType == "Practice" || model.GameType == "Game"))
				return BadRequest("Game type invalid!");

			//Execution
			if (model.GameType == "Practice")
				return await CreatePracticeEvent(model);
			else if (model.GameType == "Game")
				return await CreateMatchEvent(model);
			else
				return BadRequest("Invalid event!");
		}

		[ApiExplorerSettings(IgnoreApi = true)]
		[HttpPost]
		public async Task<ActionResult> CreateMatchEvent(CreateEventVM model)
		{
			if (!(model.Local == "Away" || model.Local == "Home"))
				return BadRequest("Location of the game is invalid!");

			if(model.PrincipalTeamPlayers.IsNullOrEmpty() || model.SubstituteTeamPlayers.IsNullOrEmpty())
				return BadRequest("List of players is required!");

			var teamPlayerDuplicate = model.PrincipalTeamPlayers.Intersect(model.SubstituteTeamPlayers).ToList();
			if (teamPlayerDuplicate.Any())
				return BadRequest("A player cannot be in both teams");

			var teamPlayersFromModel = model.PrincipalTeamPlayers.Union(model.SubstituteTeamPlayers).ToList();
			var teamPlayers = await playerRepository.GetPlayersFromTeamByTeamIdAndSPortId(model.TeamId, model.SportId);
			foreach (var playerId in teamPlayersFromModel)
			{
				if (!teamPlayers.Exists(tp => tp.Id == playerId))
					return BadRequest("Player don't exist in this Team");
			}

			bool home = (model.Local == "Home")? true : false;

			var calendar = await calendarRepository.GetByTeamSportIdsAsync(model.TeamId, model.SportId);

			var match = new Match
			{
				Opponent = model.Description,
				Date = model.Date,
				IsHome = home,
				CalendarId = calendar.Id
			};

			await matchRepository.CreateAsync(match);

			var principalTeam = new PrincipalTeam
			{
				MatchId = match.Id
			};

			await principalTeamRepository.CreateAsync(principalTeam);

			foreach(var playerId in model.PrincipalTeamPlayers)
			{
				var principalTeamPlayer = new PrincipalTeam_Player
				{
					PlayerId = playerId,
					PrincipalTeamId = principalTeam.Id
				};

				await principalTeamPlayersRepository.CreateAsync(principalTeamPlayer);
			}

			var substituteTeam = new SubstituteTeam
			{
				MatchId = match.Id
			};

			await substituteTeamRepository.CreateAsync(substituteTeam);

			foreach (var playerId in model.SubstituteTeamPlayers)
			{
				var substituteTeamPlayer = new SubstituteTeam_Player
				{
					PlayerId = playerId,
					SubstituteTeamId = substituteTeam.Id
				};

				await substituteTeamPlayersRepository.CreateAsync(substituteTeamPlayer);
			}

			return Ok();
		}

		[ApiExplorerSettings(IgnoreApi = true)]
		[HttpPost]
		public async Task<ActionResult> CreatePracticeEvent(CreateEventVM model)
		{
			if (model.PracticeTeamPlayers.IsNullOrEmpty())
				return BadRequest("List of players is required!");

			var teamPlayers = await playerRepository.GetPlayersFromTeamByTeamIdAndSPortId(model.TeamId, model.SportId);
			foreach (var playerId in model.PracticeTeamPlayers)
			{
				if (!teamPlayers.Exists(tp => tp.Id == playerId))
					return BadRequest("Player don't exist in this Team");
			}

			var calendar = await calendarRepository.GetByTeamSportIdsAsync(model.TeamId, model.SportId);

			var practice = new Practice
			{
				Description = model.Description,
				Date = model.Date,
				CalendarId = calendar.Id
			};

			await practiceRepository.CreateAsync(practice);

			foreach (var playerId in model.PracticeTeamPlayers)
			{
				var practicePlayer = new Practice_Player
				{
					PlayerId = playerId,
					PracticeId = practice.Id
				};

				await practicePlayersRepository.CreateAsync(practicePlayer);
			}

			return Ok();
		}
	}
}

using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoatCoachAPI.Controllers
{
	[Authorize]
	[Route("[controller]/[action]")]
	[ApiController]
	public class TeamsController : ControllerBase
	{
		private readonly ITeamRepository teamRepository;
		private readonly ISportTeamRepository sportTeamRepository;

		public TeamsController(ITeamRepository _teamRepository, ISportTeamRepository _sportTeamRepository)
		{
			teamRepository = _teamRepository;
			sportTeamRepository = _sportTeamRepository;

		}

		// GET: /Teams
		[HttpGet]
		public async Task<ActionResult<List<Team>>> GetTeams()
		{
			return Ok(await teamRepository.GetAllAsync());
		}

		// GET: /Teams/5
		[HttpGet("{id}")]
		public async Task<ActionResult<Team>> GetTeam(int id)
		{
			var team = await teamRepository.GetByIdAsync(id);

			if (team == null)
				return BadRequest();
			return Ok(team);

		}

		// PUT: /Teams/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
		public async Task<IActionResult> UpdateTeam(int id, Team team)
		{
			if (id != team.Id)
			{
				return BadRequest();
			}

			var dbTeam = await teamRepository.GetByIdAsync(id);
			if (dbTeam == null)
				return NotFound();

			if (!ModelState.IsValid)
				return BadRequest();

			try
			{
				await teamRepository.UpdateAsync(team);
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!await teamRepository.Exists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return Ok();
		}

		// POST: /Teams
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<Team>> CreateTeam(Team team)
		{
			if (ModelState.IsValid)
			{
				return Ok(await teamRepository.CreateAsync(team));
			}

			return BadRequest();
		}

		// DELETE: /Teams/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteTeam(int id)
		{
			await teamRepository.DeleteAsync(id);

			return Ok();
		}

		// GET: /Teams/GetPlayersFromTeam?teamid={teamId}&sportId={sportId}
		[HttpGet("{teamId}/{sportId}")]
		public async Task<ActionResult<IEnumerable<Player>>> GetPlayersFromTeam(int teamId, int sportId)
		{
			var team = await teamRepository.GetByIdAsync(teamId);
			team.SportsTeams = await sportTeamRepository.GetSportTeamByTeamId(teamId);


			if (team == null || team.SportsTeams == null)
			{
				return BadRequest();
			}

			if (team.SportsTeams.Any(st => st.SportId == sportId))
			{
				return NoContent();
			}
			else
			{
				// Filter for the players from that team that play that Sport
				return Ok(team.Players.Where(player => player.SportId == sportId).ToList());
			}
		}
	}
}

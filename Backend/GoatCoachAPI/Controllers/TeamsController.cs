using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoatCoachAPI.Controllers
{
    [Authorize]
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class TeamsController : ControllerBase
	{
		private readonly ITeamRepository teamRepository;

		public TeamsController(ITeamRepository _teamRepository)
		{
			teamRepository = _teamRepository;
		}

		// GET: api/Teams
		[HttpGet]
		public async Task<ActionResult<List<Team>>> GetTeams()
		{
			return Ok(await teamRepository.GetAllAsync());
		}

		// GET: api/Teams/5
		[HttpGet("{id}")]
		public async Task<ActionResult<Team>> GetTeam(int id)
		{
			var team = await teamRepository.GetByIdAsync(id);

			if (team == null)
				return BadRequest();
			return Ok(team);

		}

		// PUT: api/Teams/5
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

		// POST: api/Teams
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

		// DELETE: api/Teams/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteTeam(int id)
		{
			await teamRepository.DeleteAsync(id);

			return Ok();
		}
	}
}

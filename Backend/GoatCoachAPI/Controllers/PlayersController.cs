using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;
using GoatCoachAPI.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace GoatCoachAPI.Controllers
{
	[Authorize]
	[Route("[controller]/[action]")]
	[ApiController]
	public class PlayersController : ControllerBase
	{
		private readonly DataContext _context;
		private readonly IPlayerRepository playerRepository;
		private readonly ISportTeamRepository sportTeamRepository;
        private readonly INoteRepository noteRepository;

        public PlayersController(DataContext context, IPlayerRepository _playerRepository, ISportTeamRepository _sportTeamRepository, INoteRepository _noteRepository)
		{
			_context = context;
			playerRepository = _playerRepository;
			sportTeamRepository = _sportTeamRepository;
			noteRepository = _noteRepository;

        }

		// GET: /Players
		[HttpGet]
		public async Task<ActionResult<List<Player>>> GetPlayers()
		{
			return Ok(await playerRepository.GetAllAsync());
		}

		// GET: /Players/5
		[HttpGet("{id}")]
		public async Task<ActionResult<GetPlayerDetailsVM>> GetPlayer(int id)
		{
			var player = await playerRepository.GetByIdAsync(id);

			if (player == null)
			{
				return NotFound();
			}

			return new GetPlayerDetailsVM
			{
				Id = player.Id,
				Name = player.FullName,
				Age = player.Age,
				Position = player.Position,
                SportId = player.SportId
            };
		}

		// PUT: /Players/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
		public async Task<IActionResult> PutPlayer(int id, Player player)
		{
			if (id != player.Id)
			{
				return BadRequest();
			}

			_context.Entry(player).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!PlayerExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}

		// POST: /Players
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<Player>> CreatePlayer(CreatePlayerVM playerModel)
		{
			if (ModelState.IsValid)
			{
				var sportTeamResult = await sportTeamRepository.GetSportTeamByTeamId(playerModel.TeamId);
				if (sportTeamResult.IsNullOrEmpty() || !sportTeamResult.Exists(st => st.SportId == playerModel.SportId))
				{
					return BadRequest("This team or this team/sport combination does not exist");
				}

				var player = new Player
				{
					FullName = playerModel.FullName,
					Position = playerModel.Position,
					TeamId = playerModel.TeamId,
					SportId = playerModel.SportId,
					Age = playerModel.Age,
				};

				await playerRepository.CreateAsync(player);
				return Ok();
			}
			return BadRequest();
		}

		// DELETE: /Players/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeletePlayer(int id)
		{
			var player = await _context.Players.FindAsync(id);
			if (player == null)
			{
				return NotFound();
			}

			_context.Players.Remove(player);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool PlayerExists(int id)
		{
			return _context.Players.Any(e => e.Id == id);
		}

        // GET: /Players/GetPlayerNotes
        [HttpGet("{playerId}")]
		public async Task<ActionResult<List<GetNotesOfPlayerVM>>> GetPlayerNotes(int playerId)
		{
			var player = await playerRepository.GetByIdAsync(playerId);

			if (player == null)
			{
				return NotFound("A Player with id:" + playerId + " does not exist");
			}

			player.Notes = await noteRepository.GetNoteListByPlayerId(playerId);

            List<GetNotesOfPlayerVM> notes = new List<GetNotesOfPlayerVM>();
            foreach (var note in player.Notes)
			{
				notes.Add(new GetNotesOfPlayerVM
				{
					Title = note.Title,
					Description = note.Description,
					Date = note.Date.ToString()
				});

            }

            return Ok(notes);

		}

		// POST: /Players/CreateNote
		[HttpPost]
		public async Task<ActionResult> CreateNote(int playerId, GetNotesOfPlayerVM note)
		{
            var player = await playerRepository.GetByIdAsync(playerId);

            if (player == null)
            {
                return NotFound("A Player with id:" + playerId + " does not exist");
            }

			var newNote = new Note 
			{
				Title = note.Title,
				Description = note.Description,
				Date = DateTime.Now,
                PlayerId = playerId,
            };

			await noteRepository.CreateAsync(newNote);

			return Ok();

        }
    }
}

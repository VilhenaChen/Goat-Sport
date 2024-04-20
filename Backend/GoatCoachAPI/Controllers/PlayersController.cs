using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;
using Microsoft.AspNetCore.Authorization;
using GoatCoachAPI.Contracts;
using GoatCoachAPI.Repositories;
using GoatCoachAPI.ViewModels;

namespace GoatCoachAPI.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IPlayerRepository playerRepository;
        private readonly ISportRepository sportRepository;

        public PlayersController(DataContext context, IPlayerRepository _playerRepository, ISportRepository _sportRepository)
        {
            _context = context;
            playerRepository = _playerRepository;
            sportRepository = _sportRepository;
        }

        // GET: /Players
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Player>>> GetPlayers()
        {
            return await _context.Players.ToListAsync();
        }

        // GET: /Players/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Player>> GetPlayer(int id)
        {
            var player = await _context.Players.FindAsync(id);

            if (player == null)
            {
                return NotFound();
            }

            return player;
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

                if (!await sportRepository.Exists(playerModel.sportId))
                {
                    return BadRequest("Team with id:" + playerModel.sportId + " does not exist");
                }

                var player = new Player
                {
                    FullName = playerModel.FullName,
                    Position = playerModel.position,
                    TeamId = playerModel.teamId,
                    SportId = playerModel.sportId
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
    }
}

using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;
using GoatCoachAPI.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GoatCoachAPI.Repositories
{
    public class PlayerRepository : GenericRepository<Player>, IPlayerRepository
    {
        private readonly DataContext context;
        public PlayerRepository(DataContext _context) : base(_context) 
        {
            context = _context;
        }

        public async Task<List<GetPlayerDetailsVM>> GetPlayersFromTeamByTeamIdAndSPortId(int teamId, int sportId)
        {
            var playersFromTeam = await context.Players.Where(p => p.TeamId == teamId && p.SportId == sportId).ToListAsync();
            var playersList = new List<GetPlayerDetailsVM>();
            foreach (var player in playersFromTeam)
            {
                playersList.Add(new GetPlayerDetailsVM
                {
                    Id = player.Id,
                    Name = player.FullName,
                    Age = player.Age,
                    Position = player.Position,
                    SportId = player.SportId,
                });
            }
            return playersList;
        }
    }
}

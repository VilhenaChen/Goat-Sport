using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace GoatCoachAPI.Repositories
{
    public class SportTeamRepository : GenericRepository<Sport_Team>, ISportTeamRepository
	{
        private readonly DataContext context;

        public SportTeamRepository(DataContext _context) : base(_context)
		{
            context = _context;
        }

        public async Task<List<Sport_Team>> GetSportTeamByTeamId(int teamId)
        {
            var teamSports = await context.Sports_Teams.Where(t => t.TeamId == teamId).ToListAsync();
            return teamSports;
        }
    }
}
